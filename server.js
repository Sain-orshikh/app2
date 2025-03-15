import express from 'express';
import cors from 'cors';
import { initializeRepositories } from './repository.js';
import userRoutes from './routes/userRoutes.js';

const PORT = 9000;

const app = express();
app.use(express.json());
app.use(cors());

initializeRepositories().then(() => {
    
    console.log('Repositories have been initialized!');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    
    app.use('/users', userRoutes);

}).catch((error) => {
    
    console.error("Error during initialization:", error);

});
