const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
    if (req.cookies.token) {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        req.user = await User.findOne({ username: decoded.username }, "-password");
    }
};