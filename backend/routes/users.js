const router = require("express").Router();
const User = require("../models/User");

router.route("/")
    .post((req, res, next) => {
        const { username, email, password } = req.body;
        const orQuery = [
            { username },
            { email }
        ];

        // if(username.trim() === "" || email.trim() === "" || password.trim() === "") return res.status(400).json({ error: "Invalid input"});

        User.findOne({ $or: orQuery })
            .exec()
            .then(result => {
                if(result) return res.status(400).json({ error: "User already exists" });
                
                User.create({ username, email, password })
                    .then(user => res.status(200).json(user))
                    .catch(next);
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