const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");

router.get("/register", user.register);
router.get("/login", user.login);

module.exports = router;