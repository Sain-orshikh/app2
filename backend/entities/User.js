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
        profileImg: {
            type: "varchar",
            nullable: true
        },
        bio: {
            type: "text",
            nullable: true
        }
    }
});

