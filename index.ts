require("dotenv").config();

import express, { Express, Request, Response } from 'express'
import PandaDb from './db/PandaDb'
import userRouter from  './routes/userRoutes'
import listRouter from  './routes/listRoutes'

PandaDb.connectDb()

const app: Express = express();

app.use(express.json());
app.use(userRouter)
app.use(listRouter)

app.listen(process.env.PORT, () => {
    console.log(`Back running on port: ${ process.env.PORT}`);
});

