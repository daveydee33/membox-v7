const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCollection = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().allow(''),
    details: Joi.string().allow(''),
    // tags: Joi.array().items(Joi.string()),
    items: Joi.array().items(Joi.string()).unique(),
  }),
};

const getCollections = {
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

const getCollection = {
  params: Joi.object().keys({
    collectionId: Joi.string().custom(objectId),
  }),
};

const updateCollection = {
  params: Joi.object().keys({
    collectionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().required(),
      description: Joi.string().allow(''),
      details: Joi.string().allow(''),
      // tags: Joi.array().items(Joi.string()),
      items: Joi.array().items(Joi.string()).unique(),
    })
    .min(1),
};

const deleteCollection = {
  params: Joi.object().keys({
    collectionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCollection,
  getCollections,
  getCollection,
  updateCollection,
  deleteCollection,
};
