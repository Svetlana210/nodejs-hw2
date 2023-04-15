const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/contact");
const { authenticate } = require("../../middlewares");

// const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addBook);

router.delete("/:contactId", authenticate, ctrl.deleteContactById);

router.put(
  "/:contactId",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.addFavorite
);

module.exports = router;
