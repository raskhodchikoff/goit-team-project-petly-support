const express = require("express");
const { user: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");
const { updatedUserSchema } = require("../../schemas/");

const router = express.Router();

router.put("/update", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar), validation(updatedUserSchema), ctrlWrapper(ctrl.updateUser));
router.get("/get", auth, ctrlWrapper(ctrl.getUser));

module.exports = router;
