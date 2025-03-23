import Product from "../models/productModel.js";

export const showProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne(req.params);
    const data = res.hateos_item(product);
    res.ok(data);
  } catch (err) {
    next(err);
  }
};

export const listProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query._page) || 1;
    const size = parseInt(req.query._size) || 10;
    const sort = req.query._sort || 'name'; 
    const order = req.query._order === 'desc' ? -1 : 1; 

    const offset = (page - 1) * size;

    const products = await Product.find({})
      .skip(offset)
      .limit(size)
      .sort({ [sort]: order }); 

    const totalData = await Product.countDocuments();
    const totalPages = Math.ceil(totalData / size);

    res.ok({
      products: products.map((product) => ({
        ...product._doc,
        _links: [
          { rel: "self", href: `${req.baseUrl}/${product._id}`, method: "GET" },
        ],
      })),
      _page: {
        current: page,
        total: totalPages,
        size: products.length,
      },
      _links: [
        { rel: "self", href: req.baseUrl, method: "GET" },
        { rel: "create", href: req.baseUrl, method: "POST" },
        { rel: "previous", href: page > 1 ? `${req.baseUrl}?_page=${page - 1}` : null, method: "GET" },
        { rel: "next", href: page < totalPages ? `${req.baseUrl}?_page=${page + 1}` : null, method: "GET" },
      ],
    });
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    await new Product(req.body).save();
    res.created();
  } catch (err) {
    next(err);
  }
};

export const editProduct = async (req, res, next) => {
  try {
    const product = await Product.findOneAndUpdate(req.params, req.body, { new: true });
    const data = res.hateos_item(product);
    res.ok(data);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params._id);
    res.no_content();
  } catch (err) {
    next(err);
  }
};