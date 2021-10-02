const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");

router.get("/register", user.register);
router.get("/login", user.login);
router.get("/contact", user.comtact);

module.exports = router;