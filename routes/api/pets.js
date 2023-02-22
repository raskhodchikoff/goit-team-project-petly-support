const router = require("express").Router();

const { pets: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");
const { newPetSchema, updatePetShema } = require("../../schemas");

router.post(
  "/add",
  auth,
  upload.single("photo"),
  validation(newPetSchema),
  ctrlWrapper(ctrl.addPet)
);
router.put(
  "/update/:id",
  auth,
  upload.single("photo"),
  validation(updatePetShema),
  ctrlWrapper(ctrl.updatePet)
);
router.delete("/remove/:id", auth, ctrlWrapper(ctrl.removePet));

module.exports = router;
