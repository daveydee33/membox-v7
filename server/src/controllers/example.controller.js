const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { exampleService } = require('../services');

const createExample = catchAsync(async (req, res) => {
  const example = await exampleService.createExample(req.body);
  res.status(httpStatus.CREATED).send(example);
});

const getExamples = catchAsync(async (req, res) => {
  // const filter = pick(req.query, ['title', 'description', 'details']);
  const filter = pick(req.query, ['q']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await exampleService.queryExamples(filter, options);
  res.send(result);
});

const getExample = catchAsync(async (req, res) => {
  const example = await exampleService.getExampleById(req.params.exampleId);
  if (!example) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Example not found');
  }
  res.send(example);
});

const updateExample = catchAsync(async (req, res) => {
  const example = await exampleService.updateExampleById(req.params.exampleId, req.body);
  res.send(example);
});

const deleteExample = catchAsync(async (req, res) => {
  await exampleService.deleteExampleById(req.params.exampleId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createExample,
  getExamples,
  getExample,
  updateExample,
  deleteExample,
};
