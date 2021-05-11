const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ error: "User does not exist" });

        const isMatch = await user.matchPassword(password);

        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = user.getToken();
        const options = {
            httpOnly: true,
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRY * 24 * 60 * 60 * 1000
            )
        };

        res.status(200)
            .cookie("token", token, options)
            .json(token);
    } catch (error) {
        next(error);
    }

    /*User.findOne({ email })
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
        .catch(next);*/
});

router.post("/signup", async (req, res, next) => {
    let { username, email, password } = req.body;
    email = email.toLowerCase();

    try {
        let user = await User.findOne({
            $or: [
                { username: { $regex: new RegExp("^" + username + "$", "i") } },
                { email }
            ]
        });

        if (user) return res.status(400).json({ error: "User already exists" });

        try {
            await User.validate({ username, email, password }, ["username", "email", "password"]);
        } catch (error) {
            return res.status(400).json({ error: error.errors });
        }

        user = await User.create({ username, email, password });
        const token = user.getToken();
        const options = {
            httpOnly: true,
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRY * 24 * 60 * 60 * 1000
            )
        };

        res.status(200)
            .cookie("token", token, options)
            .json(token);
    } catch (error) {
        next(error);
    }

    /*User.findOne({
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
        .catch(next);*/
});

module.exports = router;