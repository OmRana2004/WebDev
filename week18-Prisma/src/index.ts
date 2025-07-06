import { PrismaClient } from '@prisma/client';

const clint = new PrismaClient();


async function createUser() {
    await clint.user.create({
    data: {
        username: "omRana",
        password: "123456",
        age: 20,
        city: "Uttarkashi",
    }
})
}
createUser();

