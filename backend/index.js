const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const xss = require("xss-clean");
const sanitizeMongo = require("express-mongo-sanitize");
const helmet = require("helmet");

const databaseConnect = require("./config/db");
const app = express();

app.use(express.json());
app.use(cors());
app.use(xss());
app.use(sanitizeMongo());
app.use(helmet());

dotenv.config({ path: "./config/.env" });
databaseConnect();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});