const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("Hey");
    res.end();
});

module.exports = router;