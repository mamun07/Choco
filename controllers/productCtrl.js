import Products from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    res.json({ msg: "Get Products" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const createProducts = async (req, res) => {
  try {
    res.json({ msg: "Create Products" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const deleteProducts = async (req, res) => {
  try {
    res.json({ msg: "Delete Products" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const updateProducts = async (req, res) => {
  try {
    res.json({ msg: "Update Products" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
