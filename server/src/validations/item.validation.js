const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createItem = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().allow(''),
    details: Joi.string().allow(''),
    tags: Joi.array().items(Joi.string()),
  }),
};

const getItems = {
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

const getItem = {
  params: Joi.object().keys({
    itemId: Joi.string().custom(objectId),
  }),
};

const updateItem = {
  params: Joi.object().keys({
    itemId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      description: Joi.string().allow(''),
      details: Joi.string().allow(''),
      tags: Joi.array().items(Joi.string()),
      examples: Joi.array().items(
        Joi.object().keys({
          title: Joi.string().allow(''),
          description: Joi.string().allow(''),
        })
      ),
    })
    .min(1),
};

const deleteItem = {
  params: Joi.object().keys({
    itemId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
};
