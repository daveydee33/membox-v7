const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { tagService } = require('../services');

// const createItem = catchAsync(async (req, res) => {
//   const item = await itemService.createItem(req.body);
//   res.status(httpStatus.CREATED).send(item);
// });

const getTags = catchAsync(async (req, res) => {
  // const filter = pick(req.query, ['title', 'description', 'details']);
  // const filter = pick(req.query, ['q']);
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  // const result = await itemService.queryItems(filter, options);
  const result = await tagService.queryTags();
  res.send(result);
});

// const getItem = catchAsync(async (req, res) => {
//   const item = await itemService.getItemById(req.params.itemId);
//   if (!item) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
//   }
//   res.send(item);
// });

// const updateItem = catchAsync(async (req, res) => {
//   const item = await itemService.updateItemById(req.params.itemId, req.body);
//   res.send(item);
// });

// const deleteItem = catchAsync(async (req, res) => {
//   await itemService.deleteItemById(req.params.itemId);
//   res.status(httpStatus.NO_CONTENT).send();
// });

module.exports = {
  // createItem,
  getTags,
  // getItem,
  // updateItem,
  // deleteItem,
};