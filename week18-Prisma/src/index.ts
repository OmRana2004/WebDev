import { PrismaClient } from '@prisma/client';

const clint = new PrismaClient();

async function createUser() {
  const user = await clint.user.findFirst({
    where: {
        id: 1,
    }
})

    console.log(user); 
}
createUser();

