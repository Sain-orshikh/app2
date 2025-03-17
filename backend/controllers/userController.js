import { getUserRepository } from '../repository.js';
import bcrypt from 'bcryptjs';
import {v2 as cloudinary} from 'cloudinary';

export const getUsers = async (req,res) => {
    
    const UserRepository = getUserRepository();

    try {
        const users = await UserRepository.find();
        res.status(200).json(users);

    } catch (error) {
        console.log("Internal Server Error: ", error);
        res.status(500).json("Internal Server Error");
    }
};

export const getUser = async (req,res) => {

    const UserRepository = getUserRepository();

    try {
        const userId = req.params.id;
        const user = await UserRepository.findOneBy({id: userId});
        if(user){
            res.status(200).json(user);
        } else {
            res.status(404).json("User not found");
        }

    } catch (error) {
        console.log("Internal Server Error: ", error);
        res.status(500).json("Internal Server Error");        
    }
};

export const createUser = async (req,res) => {

    const UserRepository = getUserRepository();

    try {
        const {username, email, password, bio, badges, achievements} = req.body;
        let {picture} = req.body;
        console.log(picture);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) return res.status(400).json({message: "Invalid email"});

        const existingUser = await UserRepository.findOneBy({email: email});
        if(existingUser) return res.status(400).json({message: "User already exists"});

        if(password.length < 6){
            return res.status(400).json({ message: "Password must be atleast 6 character long" });
        }
        // hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if(picture){
            const uploadedResponse = await cloudinary.uploader.upload(picture);
			picture = uploadedResponse.secure_url;
        }

        const newUser = {
            username: username,
            email: email,
            password: hashedPassword,
            picture: picture,
            bio: bio,
            badges: badges,
            achievements: achievements
        };

        const result = await UserRepository.save(newUser);
        res.status(201).json({success: result});
    } catch (error) {
        console.log("Internal Server Error: ", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const updateUser = async (req,res) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;

        const user = await UserRepository.findById(userId);
        if(!user) res.status(404).json("User not found");

        const result = await UserRepository.update(userId, updatedUser);
        res.status(200).json({success: result});

    } catch (error) {
        console.log("Internal Server Error: ", error);
        res.status(500).json("Internal Server Error");
    }
};

export const deleteUser = async (req,res) => {

    const UserRepository = getUserRepository();

    try {
        const userId = req.params.id;
        
        const user = await UserRepository.findById(userId);
        if(!user) res.status(404).json("User not found");

        const result = await UserRepository.delete(userId);
        res.status(200).json({success: result});

    } catch (error) {
        console.log("Internal Server Error: ", error);
        res.status(500).json("Internal Server Error");
    }
};