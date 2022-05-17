import Products from '../models/productModel.js';

// filter, shorting and paginating...

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.body....

    const excludeFields = ['page', 'sort', 'limit'];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => '$' + match
    );

    // gte = greater than or equal
    // lt = Lesser than or equal
    // lt = lesser than
    // gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createAt');
    }
    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.page * 1 || 20;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

export const getProducts = async (req, res) => {
  try {
    const features = new APIfeatures(Products.find(), req.query)
      .filtering()
      .sorting()
      .paginating();

    const products = await features.query;

    res.json({
      status: 'success',
      result: products.length,
      products: products,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const createProduct = async (req, res) => {
  try {
    const {
      product_id,
      title,
      price,
      quantity,
      description,
      content,
      images,
      category,
    } = req.body;
    if (!images) return res.status(400).json({ msg: 'No image upload.' });

    const product = await Products.findOne({ product_id });
    if (product)
      return res.status(400).json({ msg: 'This product already exists.' });

    const newProduct = new Products({
      product_id,
      title: title.toLowerCase(),
      price,
      quantity,
      description,
      content,
      images,
      category,
    });

    await newProduct.save();

    res.json({ msg: 'Create a product successfully!' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Delete a product successfully!' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { title, price, quantity, description, content, images, category } =
      req.body;

    if (!images) return res.status(400).json({ msg: 'No image upload.' });

    await Products.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: title.toLowerCase(),
        price,
        quantity,
        description,
        content: Products,
        images,
        category,
      }
    );

    res.json({ msg: 'Update a product successfully!' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
