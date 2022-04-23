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
    // if user have role = 1 (this is admin)......
    // Only admin can create, delete and update category.......
    const { name } = req.body;
    const category = await Categorys.findOne({ name });
    if (category)
      return res.status(400).json({ msg: "This category already exist." });

    const newCategory = new Categorys({ name });

    await newCategory.save();

    res.json("Check admin working successfully !");
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Categorys.findByIdAndDelete(req.params.id);

    res.json({ msg: "Deleted a category." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await Categorys.findByIdAndUpdate({ _id: req.params.id }, { name });

    res.json({ msg: "Updated a category." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
