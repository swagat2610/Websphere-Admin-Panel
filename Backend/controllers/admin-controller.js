const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id }, { password: 0 });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const updateUserById = async (req, res, next) => {
  try {
    const data = req.body;
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: data }
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    await Contact.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  getAllContacts,
  updateUserById,
  deleteContactById,
};
