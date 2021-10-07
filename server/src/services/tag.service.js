const httpStatus = require('http-status');
const { Item } = require('../models');
const ApiError = require('../utils/ApiError');

// /**
//  * Create an item
//  * @param {Object} itemBody
//  * @returns {Promise<User>}
//  */
// const createItem = async (itemBody) => {
//   return Item.create(itemBody);
// };

/**
 * Query for items
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTags = async (filter, options) => {
  // only get items who have tags
  const myFilter = {
    tags: {
      $exists: true,
      $type: 'array',
      $ne: [],
    },
  };

  // only return needed fields -- this is not working
  const myOptions = {
    // select: 'title tags', not working
    // aaa: 'bbb',
    limit: 99999,
  };

  const items = await Item.paginate(myFilter, myOptions);
  const tags = items.results.map((item) => item.tags);
  const allTags = tags.reduce(function (accumulator, currentValue, currentIndex, array) {
    accumulator.push(...currentValue);
    return accumulator;
  });
  const allTagsUniq = [...new Set(allTags)].sort();

  return allTagsUniq;
};

// /**
//  * Get item by id
//  * @param {ObjectId} id
//  * @returns {Promise<Item>}
//  */
// const getItemById = async (id) => {
//   return Item.findById(id);
// };

// // /**
// //  * Get user by email
// //  * @param {string} email
// //  * @returns {Promise<User>}
// //  */
// // const getUserByEmail = async (email) => {
// //   return User.findOne({ email });
// // };

// /**
//  * Update item by id
//  * @param {ObjectId} itemId
//  * @param {Object} updateBody
//  * @returns {Promise<Item>}
//  */
// const updateItemById = async (itemId, updateBody) => {
//   const item = await getItemById(itemId);
//   if (!item) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
//   }
//   // if (updateBody.email && (await Item.isEmailTaken(updateBody.email, itemId))) {
//   //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
//   // }
//   Object.assign(item, updateBody);
//   await item.save();
//   return item;
// };

// /**
//  * Delete item by id
//  * @param {ObjectId} itemId
//  * @returns {Promise<Item>}
//  */
// const deleteItemById = async (itemId) => {
//   const item = await getItemById(itemId);
//   if (!item) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
//   }
//   await item.remove();
//   return item;
// };

module.exports = {
  // createItem,
  queryTags,
  // getItemById,
  // getUserByEmail,
  // updateItemById,
  // deleteItemById,
};
