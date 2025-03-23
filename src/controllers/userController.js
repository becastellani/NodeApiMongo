import User from "../models/userModel.js";

export const showUser = async (req, res, next) => {
  const user = await User.findOne(req.params);

  res.ok({
    ...user._doc,
    _links: [
      { rel: "self", href: req.originalUrl, method: req.method },
      { rel: "list", href: req.baseUrl, method: "GET" },
      { rel: "update", href: `${req.baseUrl}/${req.params._id}`, method: "PUT" },
      { rel: "delete", href: `${req.baseUrl}/${req.params._id}`, method: "DELETE" },
    ],
  });
}

export const listUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query._page) || 1;
    const size = parseInt(req.query._size) || 10;
    const sort = req.query._sort || 'name'; 
    const order = req.query._order === 'desc' ? -1 : 1; 

    const offset = (page - 1) * size;

    const users = await User.find({})
      .skip(offset)
      .limit(size)
      .sort({ [sort]: order });

    const totalData = await User.countDocuments();
    const totalPages = Math.ceil(totalData / size);

    res.ok({
      users: users.map((user) => ({
        ...user._doc,
        _links: [
          { rel: "self", href: `${req.baseUrl}/${user._id}`, method: "GET" },
        ],
      })),
      _page: {
        current: page,
        total: totalPages,
        size: users.length,
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



export const createUser = async (req, res, next) => {
  await new User(req.body).save();

  res.created();
}

export const editUser = async (req, res, next) => {
  const user = await User.findOneAndUpdate(req.params, req.body, { new: true });

  res.ok({
    ...user._doc,
    _links: [
      { rel: "self", href: req.originalUrl, method: req.method },
      { rel: "list", href: req.baseUrl, method: "GET" },
      { rel: "update", href: `${req.baseUrl}/${req.params._id}`, method: "PUT" },
      { rel: "delete", href: `${req.baseUrl}/${req.params._id}`, method: "DELETE" },
    ],
  });
}

export const deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete(req.params._id);

  res.no_content();
}