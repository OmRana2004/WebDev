const express = require ('express');
const jwt = require ('jsonwebtoken');

const JWT_SECRET = "omran";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", (req, res)=> {
    const { username, password } = req.body;
    users.push({
        username,
        password,
    })
    res.json({message: "You are signed up"})
})

app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    const user = users.find (u => u.username === username && u.password === password);

    if(user){
        const token = jwt.sign (username, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.json({
            message: "Invalid credentials"
        });
    }
})

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodedData = jwt.verify (token, JWT_SECRET);
    res.json({
        message: "om rana",
        username: decodedData.username  
    })
})

app.listen(3000, () => {console.log("Server is running on port 3000")})