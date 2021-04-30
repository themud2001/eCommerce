const express = require("express");
const dotenv = require("dotenv");
const databaseConnect = require("./config/db");

const app = express();

dotenv.config({ path: "./config/.env" });
databaseConnect();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});