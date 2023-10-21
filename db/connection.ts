import dotenv from "dotenv";
dotenv.config({ path: '.env' });
import { Sequelize } from "sequelize";
export default new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USERNAME!,
    String(process.env.DB_PASSWORD),
    {
        port: Number(process.env.DB_PORT),
        dialect: "postgres",
        host: 'localhost'
    })