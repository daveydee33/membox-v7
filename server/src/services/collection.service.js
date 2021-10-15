const httpStatus = require('http-status');
const { Collection } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create an collection
 * @param {Object} collectionBody
 * @returns {Promise<User>}
 */
const createCollection = async (collectionBody) => {
  return Collection.create(collectionBody);
};

/**
 * Query for collections
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} [filter.q] - For general string seaching of multiple DB fields
 * @returns {Promise<QueryResult>}
 */
const queryCollections = async (filter, options) => {
  const regex = new RegExp(filter.q, 'gi');
  const regexFilter = { $or: [{ title: regex }, { description: regex }, { details: regex }] };
  const collections = await Collection.paginate(regexFilter, options);
  return collections;
};

/**
 * Get collection by id
 * @param {ObjectId} id
 * @returns {Promise<Collection>}
 */
const getCollectionById = async (id) => {
  return Collection.findById(id);
};

/**
 * Update collection by id
 * @param {ObjectId} collectionId
 * @param {Object} updateBody
 * @returns {Promise<Collection>}
 */
const updateCollectionById = async (collectionId, updateBody) => {
  const collection = await getCollectionById(collectionId);
  if (!collection) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Collection not found');
  }
  // if (updateBody.email && (await Collection.isEmailTaken(updateBody.email, collectionId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  Object.assign(collection, updateBody);
  await collection.save();
  return collection;
};

/**
 * Delete collection by id
 * @param {ObjectId} collectionId
 * @returns {Promise<Collection>}
 */
const deleteCollectionById = async (collectionId) => {
  const collection = await getCollectionById(collectionId);
  if (!collection) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Collection not found');
  }
  await collection.remove();
  return collection;
};

module.exports = {
  createCollection,
  queryCollections,
  getCollectionById,
  updateCollectionById,
  deleteCollectionById,
};
