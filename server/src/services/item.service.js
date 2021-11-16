const httpStatus = require('http-status');
const { Item } = require('../models');
const ApiError = require('../utils/ApiError');
const { userService } = require('.');

/**
 * Create an item
 * @param {Object} itemBody
 * @returns {Promise<User>}
 */
const createItem = async (itemBody) => {
  return Item.create(itemBody);
};

/**
 * Query for items
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} [filter.q] - For general string seaching of multiple DB fields
 * @returns {Promise<QueryResult>}
 */
const queryItems = async (filter, options) => {
  const regex = new RegExp(filter.q, 'gi');
  const regexFilter = { $or: [{ title: regex }, { description: regex }, { details: regex }] };
  const items = await Item.paginate(regexFilter, options);
  return items;
};

/**
 * Get item by id
 * @param {ObjectId} id
 * @returns {Promise<Item>}
 */
const getItemById = async (id) => {
  return Item.findById(id);
};

// /**
//  * Get user by email
//  * @param {string} email
//  * @returns {Promise<User>}
//  */
// const getUserByEmail = async (email) => {
//   return User.findOne({ email });
// };

/**
 * Update item by id
 * @param {ObjectId} itemId
 * @param {Object} updateBody
 * @returns {Promise<Item>}
 */
const updateItemById = async (itemId, updateBody) => {
  const item = await getItemById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  // if (updateBody.email && (await Item.isEmailTaken(updateBody.email, itemId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  Object.assign(item, updateBody);
  await item.save();
  return item;
};

/**
 * Delete item by id
 * @param {ObjectId} itemId
 * @returns {Promise<Item>}
 */
const deleteItemById = async (itemId) => {
  const item = await getItemById(itemId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  await item.remove();
  return item;
};

/**
 * Set item favorite for userId
 * @param {ObjectId} itemId
 * @param {ObjectId} userId
 * @returns {Promise<Item>}
 */
const setFavorite = async (itemId, userId) => {
  const item = await getItemById(itemId);
  const user = await userService.getUserById(userId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (!user.favorites.includes(itemId)) {
    await user.favorites.push(itemId);
    await user.save();
  }
  return user;
};

/**
 * Unset item favorite for userId
 * @param {ObjectId} itemId
 * @param {ObjectId} userId
 * @returns {Promise<Item>}
 */
const unsetFavorite = async (itemId, userId) => {
  const item = await getItemById(itemId);
  const user = await userService.getUserById(userId);
  if (!item) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (user.favorites.includes(itemId)) {
    const filtered = user.favorites.filter((fav) => fav.toString() !== itemId);
    user.favorites = filtered;
    await user.save();
  }
  return user;
};

module.exports = {
  createItem,
  queryItems,
  getItemById,
  // getUserByEmail,
  updateItemById,
  deleteItemById,
  setFavorite,
  unsetFavorite,
};
