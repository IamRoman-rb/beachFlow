const {Router} = require("express");
const product = require("../controllers/product");
const router = Router();

router.get("/detail/:category/:id", product.detail);
router.get("/cart", product.cart)

module.exports = router;