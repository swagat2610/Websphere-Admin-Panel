const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, adminMiddleware, getUserById);
router.patch(
  "/users/update/:id",
  authMiddleware,
  adminMiddleware,
  updateUserById
);
router.delete(
  "/users/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteUserById
);
router.get("/contacts", authMiddleware, adminMiddleware, getAllContacts);
router.delete("/contacts/delete/:id", authMiddleware, adminMiddleware, deleteContactById);

module.exports = router;
