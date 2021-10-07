const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const tagValidation = require('../../validations/tag.validation');
const tagController = require('../../controllers/tag.controller');

const router = express.Router();

// TODO: re-add the auth() to each of these routes
router
  .route('/')
  // .post(auth('manageItems'), validate(itemValidation.createItem), itemController.createItem)
  // .post(validate(itemValidation.createItem), itemController.createItem)
  .get(validate(tagValidation.getTags), tagController.getTags);

// router
//   .route('/:itemId')
//   .get(validate(itemValidation.getItem), itemController.getItem)
//   // .patch(auth('manageItems'), validate(itemValidation.updateItem), itemController.updateItem)
//   .patch(validate(itemValidation.updateItem), itemController.updateItem)
//   // .delete(auth('manageItems'), validate(itemValidation.deleteItem), itemController.deleteItem);
//   .delete(validate(itemValidation.deleteItem), itemController.deleteItem);

module.exports = router;
