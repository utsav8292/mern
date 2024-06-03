const express = require("express");
const router= express.Router();
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const subAdminMiddleware = require("../middlewares/subadmin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware,subAdminMiddleware, adminController.getAllUsers);

router
  .route("/users/:id")
  .get(authMiddleware,adminMiddleware,subAdminMiddleware,adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware,subAdminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware,subAdminMiddleware, adminController.deleteUserById);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware,subAdminMiddleware,adminController.deleteContactById);

router
  .route("/contacts")
  .get(authMiddleware, subAdminMiddleware, adminController.getAllContacts);

module.exports=router;