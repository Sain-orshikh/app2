import { AppDataSource } from './AppDataSource.js';
import { User } from './entities/User.js';

let UserRepository;

export const initializeRepositories = async () => {
    
    await AppDataSource.initialize();

    UserRepository = AppDataSource.getRepository(User);
};

export const getUserRepository = () => {
    if (!UserRepository) {
        console.log('Repository not initialized yet');
    }
    return UserRepository;
};
