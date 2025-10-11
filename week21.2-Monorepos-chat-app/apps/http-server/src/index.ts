import express from "express";

const app = express();

app.get("/signup", (req, res) => {
    res.send("Signup endpoint");
})

app.post("/signin", (req, res) => {
    res.send("Signin endpoint");
})

app.get("/chat", (req, res) => {
res.send("Chat endpoint");
})

app.listen(3001)