const router = require("express").Router();
const User = require("../models/User");

router.route("/:id")
    .get((req, res, next) => {
        const { id } = req.params;

        if(id.length !== 24) return next();

        User.findById(id, (error, result) => {
            if(error) return next(error);
            if(!result) return next();

            res.status(200).json(result);
        });
    }, (req, res) => {
        res.status(400).json({ error: "User not found" });
    });

module.exports = router;