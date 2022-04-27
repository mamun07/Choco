import Products from "../models/productModel.js";

// filter, shorting and paginating...

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString };

    // console.log({ before: queryObj });

    const excludeFields = ["page", "short", "limit"];
    excludeFields.forEach((el) => delete queryObj[el]);

    // console.log({ after: queryObj });

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    // console.log({ queryStr });

    // gte = greater than or equal
    // lt = Lesser than or equal
    // lt = lesser than
    // gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }

  sorting() {
    // if (this.queryString.sort) {
    //   const sortBy = this.queryString.sort.split(",").join(" ");
    //   this.query = this.query.sort(sortBy);
    // } else {
    //   this.query = this.query.sort("-createAt");
    // }
    return this;
  }

  paginating() {
    return this;
  }
}

export const getProducts = async (req, res) => {
  try {
    const features = new APIfeatures(Products.find(), req.query).filtering();

    const products = await features.query;

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
    await Products.findByIdAndDelete(req.params.id);
    res.json({ msg: "Delete a product successfully!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { title, price, description, content, images, category } = req.body;

    if (!images) return res.status(400).json({ msg: "No image upload." });

    await Products.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: title.toLowerCase(),
        price,
        description,
        content: Products,
        images,
        category,
      }
    );

    res.json({ msg: "Update a product successfully!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
