const express = require('express');
const auth = require('../../middlewares/auth');
const authFirebase = require('../../middlewares/authFirebase');
const validate = require('../../middlewares/validate');
const itemValidation = require('../../validations/item.validation');
const itemController = require('../../controllers/item.controller');

const router = express.Router();

router
  .route('/')
  // .post(auth('manageItems'), validate(itemValidation.createItem), itemController.createItem)
  .post(validate(itemValidation.createItem), itemController.createItem)
  .get(auth('getItems'), validate(itemValidation.getItems), itemController.getItems);

// TODO: re-add the auth() to each of these routes
router
  .route('/:itemId')
  .get(validate(itemValidation.getItem), itemController.getItem)
  // .patch(auth('manageItems'), validate(itemValidation.updateItem), itemController.updateItem)
  .patch(validate(itemValidation.updateItem), itemController.updateItem)
  // .delete(auth('manageItems'), validate(itemValidation.deleteItem), itemController.deleteItem);
  .delete(validate(itemValidation.deleteItem), itemController.deleteItem);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Items
 *   description:
 */

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create an item
 *     description:
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Item'
 *       "400":
 *         $ref: '#/components/responses/DuplicateItem'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all items
 *     description:
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Item'
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
