const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const exampleValidation = require('../../validations/example.validation');
const exampleController = require('../../controllers/example.controller');

const router = express.Router();

router
  .route('/')
  // .post(auth('manageExamples'), validate(exampleValidation.createExample), exampleController.createExample)
  .post(validate(exampleValidation.createExample), exampleController.createExample)
  .get(validate(exampleValidation.getExamples), exampleController.getExamples);

// TODO: re-add the auth() to each of these routes
router
  .route('/:exampleId')
  .get(validate(exampleValidation.getExample), exampleController.getExample)
  // .patch(auth('manageExamples'), validate(exampleValidation.updateExample), exampleController.updateExample)
  .patch(validate(exampleValidation.updateExample), exampleController.updateExample)
  // .delete(auth('manageExamples'), validate(exampleValidation.deleteExample), exampleController.deleteExample);
  .delete(validate(exampleValidation.deleteExample), exampleController.deleteExample);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Examples
 *   description:
 */

/**
 * @swagger
 * /examples:
 *   post:
 *     summary: Create an example
 *     description:
 *     tags: [Examples]
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
 *                $ref: '#/components/schemas/Example'
 *       "400":
 *         $ref: '#/components/responses/DuplicateExample'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all examples
 *     description:
 *     tags: [Examples]
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
 *                   examples:
 *                     $ref: '#/components/schemas/Example'
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
