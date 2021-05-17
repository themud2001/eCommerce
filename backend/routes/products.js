const router = require("express").Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        if (!Array.isArray(products) || !products.length) return res.status(404).json({ error: "No products found" });

        res.status(200).json({ products });
    } catch (error) {
        next(error);
    }
});

module.exports = router;