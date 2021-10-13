const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createExample = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().allow(''),
    details: Joi.string().allow(''),
    // tags: Joi.array().examples(Joi.string()),
    // examples: Joi.array().examples(
    //   Joi.object().keys({
    //     title: Joi.string().allow(''),
    //     description: Joi.string().allow(''),
    //   })
    // ),
  }),
};

const getExamples = {
  query: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    details: Joi.string(),
    sortBy: Joi.string(),
    q: Joi.string().allow(''),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getExample = {
  params: Joi.object().keys({
    exampleId: Joi.string().custom(objectId),
  }),
};

const updateExample = {
  params: Joi.object().keys({
    exampleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().required(),
      description: Joi.string().allow(''),
      details: Joi.string().allow(''),
      // tags: Joi.array().examples(Joi.string()),
      // examples: Joi.array().examples(
      //   Joi.object().keys({
      //     title: Joi.string().allow(''),
      //     description: Joi.string().allow(''),
      //   })
      // ),
    })
    .min(1),
};

const deleteExample = {
  params: Joi.object().keys({
    exampleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createExample,
  getExamples,
  getExample,
  updateExample,
  deleteExample,
};
