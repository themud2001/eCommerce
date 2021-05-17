const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const xss = require("xss-clean");
const sanitizeMongo = require("express-mongo-sanitize");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const databaseConnect = require("./config/db");
const app = express();

const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(xss());
app.use(sanitizeMongo());
app.use(helmet());
app.use(compression());
app.use(cookieParser());

dotenv.config({ path: "./config/.env" });
databaseConnect();

app.use("/auth", authRoute);
app.use("/products", productsRoute);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`The server is listening on port ${process.env.PORT}`);
});