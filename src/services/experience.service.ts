import prisma from "../config/db";

export async function GetExperiencesService() {
    const experiences = await prisma.experiences.findMany();
    if (!experiences) throw new Error("No experiences yet");
    return experiences;
}