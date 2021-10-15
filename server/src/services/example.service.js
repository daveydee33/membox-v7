const httpStatus = require('http-status');
const { Example } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create an example
 * @param {Object} exampleBody
 * @returns {Promise<Example>}
 */
const createExample = async (exampleBody) => {
  return Example.create(exampleBody);
};

/**
 * Query for examples
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} [filter.q] - For general string seaching of multiple DB fields
 * @returns {Promise<QueryResult>}
 */
const queryExamples = async (filter, options) => {
  const regex = new RegExp(filter.q, 'gi');
  const regexFilter = { $or: [{ title: regex }, { description: regex }, { details: regex }] };
  const examples = await Example.paginate(regexFilter, options);
  return examples;
};

/**
 * Get example by id
 * @param {ObjectId} id
 * @returns {Promise<Example>}
 */
const getExampleById = async (id) => {
  return Example.findById(id);
};

/**
 * Update example by id
 * @param {ObjectId} exampleId
 * @param {Object} updateBody
 * @returns {Promise<Example>}
 */
const updateExampleById = async (exampleId, updateBody) => {
  const example = await getExampleById(exampleId);
  if (!example) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Example not found');
  }
  // if (updateBody.email && (await Example.isEmailTaken(updateBody.email, exampleId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  Object.assign(example, updateBody);
  await example.save();
  return example;
};

/**
 * Delete example by id
 * @param {ObjectId} exampleId
 * @returns {Promise<Example>}
 */
const deleteExampleById = async (exampleId) => {
  const example = await getExampleById(exampleId);
  if (!example) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Example not found');
  }
  await example.remove();
  return example;
};

module.exports = {
  createExample,
  queryExamples,
  getExampleById,
  updateExampleById,
  deleteExampleById,
};
