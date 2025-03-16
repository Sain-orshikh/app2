import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        username: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
        picture: {
            type: "varchar",
            nullable: true
        },
        bio: {
            type: "text",
            nullable: true
        },
        badges: {
            type: "simple-array",
            nullable: true
        },
        achievements: {
            type: "simple-array",
            nullable: true
        },
    }
});

