const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
    if (!req.cookies.token) return res.status(401).json({ error: "Unauthenticated" });

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

        try {
            req.user = await User.findOne({ username: decoded.username }, "-password");
        } catch (error) {
            return res.status(500).json({ error: "An error occurred" })
        }
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }

    next();
};