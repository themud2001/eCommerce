const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .exec()
        .then(async user => {
            if (!user) return res.status(400).json({ error: "User does not exist" });

            const isMatch = await user.matchPassword(password);

            if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

            const token = user.getToken();

            res.status(200)
                .cookie("token", token, { httpOnly: true })
                .json(token);
        })
        .catch(next);
});

router.post("/signup", (req, res, next) => {
    let { username, email, password } = req.body;
    email = email.toLowerCase();

    User.findOne({
        $or: [
            { username: { $regex: new RegExp("^" + username + "$", "i") } },
            { email }
        ]
    })
        .exec()
        .then(async result => {
            if (result) return res.status(400).json({ error: "User already exists" });

            try {
                await User.validate({ username, email, password }, ["username", "email", "password"]);
            } catch (error) {
                return res.status(400).json({ error: error.errors });
            }

            const user = await User.create({ username, email, password });
            const token = user.getToken();

            res.status(200)
                .cookie("token", token, { httpOnly: true })
                .json(token);
        })
        .catch(next);
});

module.exports = router;