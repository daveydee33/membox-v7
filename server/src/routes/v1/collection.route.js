const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const collectionValidation = require('../../validations/collection.validation');
const collectionController = require('../../controllers/collection.controller');

const router = express.Router();

router
  .route('/')
  // .post(auth('manageCollections'), validate(collectionValidation.createCollection), collectionController.createCollection)
  .post(validate(collectionValidation.createCollection), collectionController.createCollection)
  .get(validate(collectionValidation.getCollections), collectionController.getCollections);

// TODO: re-add the auth() to each of these routes
router
  .route('/:collectionId')
  .get(validate(collectionValidation.getCollection), collectionController.getCollection)
  // .patch(auth('manageCollections'), validate(collectionValidation.updateCollection), collectionController.updateCollection)
  .patch(validate(collectionValidation.updateCollection), collectionController.updateCollection)
  // .delete(auth('manageCollections'), validate(collectionValidation.deleteCollection), collectionController.deleteCollection);
  .delete(validate(collectionValidation.deleteCollection), collectionController.deleteCollection);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Collections
 *   description:
 */

/**
 * @swagger
 * /collections:
 *   post:
 *     summary: Create an collection
 *     description:
 *     tags: [Collections]
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
 *                $ref: '#/components/schemas/Collection'
 *       "400":
 *         $ref: '#/components/responses/DuplicateCollection'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all collections
 *     description:
 *     tags: [Collections]
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
 *                   collections:
 *                     $ref: '#/components/schemas/Collection'
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
