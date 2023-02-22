const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { newUserSchema, loginUserSchema } = require("../../schemas/");

const router = express.Router();

router.post("/signup", validation(newUserSchema), ctrlWrapper(ctrl.signup));
router.post("/signin", validation(loginUserSchema), ctrlWrapper(ctrl.signin));
router.post("/signout", auth, ctrlWrapper(ctrl.signout));

module.exports = router;
