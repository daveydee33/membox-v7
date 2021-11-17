const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { itemService } = require('../services');

const createItem = catchAsync(async (req, res) => {
  const item = await itemService.createItem(req.body);
  res.status(httpStatus.CREATED).send(item);
});

const getItems = catchAsync(async (req, res) => {
  // const filter = pick(req.query, ['title', 'description', 'details']);
  const filter = pick(req.query, ['q']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await itemService.queryItems(filter, options);
  res.send(result);
});

const getItem = catchAsync(async (req, res) => {
  const item = await itemService.getItemById(req.params.itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  res.send(item);
});

const updateItem = catchAsync(async (req, res) => {
  const item = await itemService.updateItemById(req.params.itemId, req.body);
  res.send(item);
});

const deleteItem = catchAsync(async (req, res) => {
  await itemService.deleteItemById(req.params.itemId);
  res.status(httpStatus.NO_CONTENT).send();
});

const setFavorite = catchAsync(async (req, res) => {
  const item = await itemService.setFavorite(req.params.itemId, req.user.id);
  res.send(item);
});

const unsetFavorite = catchAsync(async (req, res) => {
  const item = await itemService.unsetFavorite(req.params.itemId, req.user.id);
  res.send(item);
});

module.exports = {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
  setFavorite,
  unsetFavorite,
};
