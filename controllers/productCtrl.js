import Products from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { product_id, title, price, description, content, images, category } =
      req.body;
    if (!images) return res.status(400).json({ msg: "No image upload." });

    const product = await Products.findOne({ product_id });
    if (product)
      return res.status(400).json({ msg: "This product already exists." });

    const newProduct = new Products({
      product_id,
      title: title.toLowerCase(),
      price,
      description,
      content,
      images,
      category,
    });

    await newProduct.save();

    res.json({ msg: "Create a product successfully!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    res.json({ msg: "Delete Products" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    res.json({ msg: "Update Products" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
