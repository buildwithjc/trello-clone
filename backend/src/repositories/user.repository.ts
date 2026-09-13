import { db } from "../prisma/db.js";

export async function findUserById(id: number) {
    return db.orm.public.User.first({
        id
    });
}

export async function createUser(
    email: string,
    username?: string,
    name?: string
) {
    return db.orm.public.User.create({
        email,
        username,
        name
    });
}