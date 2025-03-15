import { getUserRepository } from '../repository.js';

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
        const newUser = req.body;
        const result = await UserRepository.save(newUser);
        res.status(201).json({success: result});
    } catch (error) {
        console.log("Internal Server Error: ", error);
        res.status(500).json("Internal Server Error");
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