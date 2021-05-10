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

module.exports = router;