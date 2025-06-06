import { Client } from "pg";

const pgClint = new Client("postgresql://neondb_owner:npg_4vHwdMKTBr3m@ep-solitary-hall-a8psmub3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");

async function main() {
    await pgClint.connect();
    const response = await pgClint.query("UPDATE users SET username= 'Hanuman' WHERE id=2");
    console.log(response.rows);
}

main()

