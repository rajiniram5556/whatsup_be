import express from "express";
import dotenv from "dotenv";
import morgan from"morgan";
import helmet from "helmet";

dotenv.config();
const app = express();

//morgan
if (process.env.NODE_ENV !== "production"){
app.use(morgan());
}

//Helmet

app.use(helmet());

app.get("/", (req, res)=>{

    res.send("hello form server");
});


export default app;