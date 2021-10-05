const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createItem = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    details: Joi.string(),
  }),
};

const getItems = {
  query: Joi.object().keys({
    title: Joi.string(),
    descripiton: Joi.string(),
    details: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

// const getUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

// const updateUser = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       email: Joi.string().email(),
//       password: Joi.string().custom(password),
//       name: Joi.string(),
//     })
//     .min(1),
// };

// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
  createItem,
  getItems,
};
