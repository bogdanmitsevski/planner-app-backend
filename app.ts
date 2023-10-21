import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { sequelize } from './db/models';
import root from './routes/planner.router';
dotenv.config({ path: __dirname+'/.env' });
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
const start = async () => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        app.use('/api', root);
        app.listen(port, () => {
            console.log(`Server is working on PORT: ${port}`);
        })
    }
    catch (e) {
        console.log(e);
    }
}

start();