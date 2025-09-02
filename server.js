import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";


// ROUTES
import authRoutes from "./api/routes/auth.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))


const ConnectionString = process.env.DB_CONNECTION_STRING;

if (ConnectionString) {
    mongoose.connect(ConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB connected");
        app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
    }).catch(err => console.log(err))
} else {
    console.error("bad getway");
}

app.use('/api', authRoutes);