const User = require('../models/users')

exports.getAll = async (req, res, next) => {
  try {
    const userList = await User.findAll();
    return res.status(200).json(userList);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const USER_MODEL = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      document: req.body.document,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email
    };
    const user = await User.create(USER_MODEL);
    console.log('User created');
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.deleteOne = async (req, res, next) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.updateOne = async (req, res, next) => {
  try {
    const USER_MODEL = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      document: req.body.document,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email
    };
    const user = await User.update(USER_MODEL, { where: { id: req.params.id } });
    console.log('User created');
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}