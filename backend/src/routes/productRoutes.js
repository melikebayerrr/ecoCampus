
const router = require("express").Router();
const controller = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");

router.get("/", controller.getAll);
router.post("/", auth, controller.create);

module.exports = router;
