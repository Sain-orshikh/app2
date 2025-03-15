import { DataSource } from "typeorm";
import { User } from "./entities/User.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test123",
    database: "app2",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});