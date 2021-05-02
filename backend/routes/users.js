const router = require("express").Router();
const { ObjectId } = require("mongoose").Types;
const User = require("../models/User");

router.route("/:id")
    .get((req, res, next) => {
        const { id } = req.params;

        if(id.length !== 12) return next();

        User.findById(ObjectId(id), (error, result) => {
            if(error) return next(error);
            if(!result) return next();

            res.status(200).json(result);
        });
    }, (req, res) => {
        res.status(400).json({ error: "User not found" });
    });

module.exports = router;