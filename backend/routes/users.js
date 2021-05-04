const router = require("express").Router();
const User = require("../models/User");

router.route("/")
    .post((req, res, next) => {
        const { username, email, password } = req.body;
        const orQuery = [
            { username },
            { email }
        ];

        User.findOne({ $or: orQuery })
            .exec()
            .then(async result => {
                if (result) return res.status(400).json({ error: "User already exists" });

                let user = { username, email, password };

                await User.validate(user, ["name", "email", "password"]);
                user = await User.create(user);

                res.status(200).json(user);
            })
            .catch(next);
    });

router.route("/:id")
    .get(
        (req, res, next) => {
            const { id } = req.params;

            if (id.length !== 24) return next();

            User.findById(id)
                .exec()
                .then(result => {
                    if (!result) return next();

                    res.status(200).json(result);
                })
                .catch(next);
        },

        (req, res) => {
            res.status(400).json({ error: "User not found" });
        }
    );

module.exports = router;