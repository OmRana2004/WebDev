import express from "express";

const app = express()

app.use(express.json());

const USERS: { username: string, password: string}[] = []
    const TODOS: { title: string, description : string, completed: boolean}[] = []

    app.post("/signup", (req, res) => {
        const { username, password } = req.body;
        USERS.push({username, password});
        res.status(201).send("User created")
    });

    app.post("/login", (req, res) => {
        const { username, password } = req.body;
        const user = USERS.find((user) => user.username === username && user.password === password);
        if (!user) {
           return res.status(401).send("User not found")
        }
        res.status(200).send("login success")
    });

    app.post("/todo", (req, res) => {
        const { title, description, completed } = req.body;
         TODOS.push({ title, description, completed});
         res.status(201).send("Todo created")
    })

    app.get("/todos", (req, res) => {
        if (TODOS.length === 0) {
            return res.status(401).send("Nothing to get")
        }
        return res.status(200).json(TODOS);
    })



app.listen(3000, () => {
    console.log("server is running on port 3000");
})