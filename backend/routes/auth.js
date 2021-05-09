const router = require("express").Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .exec()
        .then(async result => {
            if (!result) return res.status(400).json({ error: "User does not exist" });

            const user = { email, password };

            try {
                await User.validate(user, ["email", "password"]);
            } catch (error) {
                return res.status(400).json({ error: error.errors });
            }

            if (!user.matchPassword(user.password)) return res.status(400).json({ error: "Invalid credentials" });

            const token = user.getToken();

            res.status(200)
                .cookie("token", token, { httpOnly: true })
                .json(token);
        })
        .catch(next);
});

module.exports = router;