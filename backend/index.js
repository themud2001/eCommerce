const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const xss = require("xss-clean");
const sanitizeMongo = require("express-mongo-sanitize");
const helmet = require("helmet");
const compression = require("compression");

const databaseConnect = require("./config/db");
const app = express();

const usersRoute = require("./routes/users");

app.use(express.json());
app.use(cors());
app.use(xss());
app.use(sanitizeMongo());
app.use(helmet());
app.use(compression());

dotenv.config({ path: "./config/.env" });
databaseConnect();

app.use("/users", usersRoute);

app.use((err, req, res, next) => {
    if(res.headersSent) {
        console.error("Yes"); next(err);
    }

    console.error("HAHAHA", err);
    res.status(err.statusCode || 500).json({ error: "An error occurred" });
});

app.listen(process.env.PORT, () => {
    console.log(`The server is listening on port ${process.env.PORT}`);
});