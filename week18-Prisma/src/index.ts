import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const clint = new PrismaClient();

app.get("/users", async (req, res) => {
    const users = await clint.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id", async (req, res)=> {
    const id = req.params.id;

  const user = await clint.user.findFirst({
    where: {
        id: parseInt(id),
    },
    select: {
        todos: true,
        username: true,
        password: true,
    }
});
    res.json({
        user
    })
})

app.listen(3000);

async function getUser() {
    const user = await clint.user.findFirst({
        where: {
            id: 1,
        },
        
    });
    console.log(user);
}
getUser();

