const {Router} = require("express");
const product = require("../controllers/product");
const router = Router();

router.get("/detail/:id", product.detail);

module.exports = router;