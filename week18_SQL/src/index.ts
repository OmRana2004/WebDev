import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_4vHwdMKTBr3m@ep-solitary-hall-a8psmub3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");

pgClient.connect();
    
app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3);`

        const response = await pgClient.query(insertQuery, [username, password, email]);
        res.json({
            message: "You have successfully signed up",
    })
    } catch (error) {
        console.error("Error inserting data:", error);
         res.status(500).json({
      error: "Failed to sign up. Please try again.",
         });
    }
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})



