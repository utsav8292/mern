const express = require("express");
const router = express.Router();
const services = require("../controllers/service-controller");
// const authMiddleware = require("../middlewares/auth-middleware");

router.route("/service").get(services);

module.exports = router;