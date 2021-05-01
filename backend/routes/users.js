const router = require("express").Router();
const User = require("../models/User");

router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    if(isNaN(id)) {
        return res.status(400).json({ error: "Invalid user ID" });
    }

    User.findOne({ id }, (error, result) => {
        next(new Error("Hey"));

        res.status(200).json(result);
    });
});

module.exports = router;