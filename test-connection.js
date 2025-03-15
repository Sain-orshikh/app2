import { AppDataSource } from "./AppDataSource.js";

AppDataSource.initialize()
    .then(() => console.log("Connected to PostgreSQL via TypeORM"))
    .catch((err) => console.error("Database connection failed:", err));
