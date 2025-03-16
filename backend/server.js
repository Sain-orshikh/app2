import express from 'express';
import { initializeRepositories } from './repository.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import {v2 as cloudinary} from 'cloudinary';

const PORT = 9000;

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
}); 

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.json({limit: "5mb"})); //to parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data

initializeRepositories().then(() => {
    
    console.log('Repositories have been initialized!');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    
    app.use('/users', userRoutes);

}).catch((error) => {
    
    console.error("Error during initialization:", error);

});
