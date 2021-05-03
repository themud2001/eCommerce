const router = require("express").Router();
const User = require("../models/User");

router.route("/")
    .post((req, res, next) => {
        const { username, email, password } = req.body;

        User.findOne({
            $or: [
                { username },
                { email }
            ]
        }).then(result => {
            if(result) return res.status(400).json({ error: "User already exists" });

            res.status(200).json(result);
        }).catch(next);
    });

router.route("/:id")
    .get((req, res, next) => {
        const { id } = req.params;

        if (id.length !== 24) return next();

        User.findById(id).then(result => {
            if (error) return next(error);
            if (!result) return next();

            res.status(200).json(result);
        }).catch(next);
    }, (req, res) => {
        res.status(400).json({ error: "User not found" });
    });

module.exports = router;