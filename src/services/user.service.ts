import prisma from "../config/db";

export async function GetAllUserService() {
    const users = await prisma.users.findMany();
    if (!users) throw new Error("No Users Yet");
    return users;
}

export async function GetContactService() {
    const contact = await prisma.contacts.findMany();
    if (!contact) throw new Error("No contact yet");
    return contact;
}