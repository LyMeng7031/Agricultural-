import { Router } from "express";
import Product from "../models/product";

const router = Router();

// ---------------------------
// GET ALL PRODUCTS
// ---------------------------
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); // fetch from MongoDB
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

// ---------------------------
// CREATE A PRODUCT
// ---------------------------
router.post("/", async (req, res) => {
  const { name, price, description, inStock } = req.body;

  try {
    const product = new Product({ name, price, description, inStock });
    await product.save();

    res.status(201).json({ message: "Product created successfully", product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

export default router;
