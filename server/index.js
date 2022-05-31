// import file .env
require("dotenv").config();

// import express
const express = require("express");
const app = express();

//import cors
const cors = require("cors");

app.use(express.json());
app.use(cors());

// deklarasi port
const port = 5000;

// Get routes endpoint api
const router = require("./src/routes");

//endpoint group & router
// get api
app.use("/api/v1/", router);
// deklarasi folder upload untuk penyimpanan gambar
app.use("/uploads", express.static("uploads"));

// listen port
app.listen(port, () => console.log(`Listening on port : ${port} `));
