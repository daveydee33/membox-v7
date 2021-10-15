const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { collectionService } = require('../services');

const createCollection = catchAsync(async (req, res) => {
  const collection = await collectionService.createCollection(req.body);
  res.status(httpStatus.CREATED).send(collection);
});

const getCollections = catchAsync(async (req, res) => {
  // const filter = pick(req.query, ['title', 'description', 'details']);
  const filter = pick(req.query, ['q']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await collectionService.queryCollections(filter, options);
  res.send(result);
});

const getCollection = catchAsync(async (req, res) => {
  const collection = await collectionService.getCollectionById(req.params.collectionId);
  if (!collection) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Collection not found');
  }
  res.send(collection);
});

const updateCollection = catchAsync(async (req, res) => {
  const collection = await collectionService.updateCollectionById(req.params.collectionId, req.body);
  res.send(collection);
});

const deleteCollection = catchAsync(async (req, res) => {
  await collectionService.deleteCollectionById(req.params.collectionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCollection,
  getCollections,
  getCollection,
  updateCollection,
  deleteCollection,
};
