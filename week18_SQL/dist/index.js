"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_4vHwdMKTBr3m@ep-solitary-hall-a8psmub3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id;`;
        const response = yield pgClient.query(insertQuery, [username, password, email]);
        const userId = response.rows[0].id;
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        const addressInsertResponse = yield pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        res.json({
            message: "You have successfully signed up",
        });
    }
    catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({
            error: "Failed to sign up. Please try again.",
        });
    }
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
