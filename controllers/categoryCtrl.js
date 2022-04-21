import Categorys from "../models/categoryModel.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Categorys.find();
    res.json(categories);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const creatCategory = async (req, res) => {
  try {
    res.json("Check admin success");
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
