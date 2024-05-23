require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 9090;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extends: true}));
app.use(cors());

app.get("/api/test", async (req, res)=>{
    return res.status(200).json({message: "Test sucess"});
})

app.listen(port, ()=>{
    console.log("Backend started, Good luck!");
})