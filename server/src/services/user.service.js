const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Google login - Create / Update user
 * @param {Object} profile
 * @returns {Promise<User>}
 */
const googleCreateOrUpdate = async (profile) => {
  const { name, email, picture, sub } = profile._json;
  const userProfilePayload = {
    name,
    picture,
    'services.google': {
      googleId: sub,
      googleFullData: profile,
    },
  };
  return User.findOneAndUpdate({ email }, userProfilePayload, {
    // maybe I need to check if email is verified too?
    setDefaultsOnInsert: true,
    upsert: true,
    new: true,
    useFindAndModify: false,
  });
};

/**
 * Firebase login (email/password, Google, Facebook, etc) -- Create or Update user
 * @param {Object} profile
 * @returns {Promise<User>}
 */
const firebaseCreateOrUpdate = async (userData) => {
  // console.log(userData);

  const { uid, email, email_verified, name, picture } = userData;

  const userProfilePayload = {
    name,
    picture,
    email,
    'services.firebase': {
      firebaseUID: uid,
      firebaseFullData: userData,
    },
  };

  // !!!!!  I found that by creating using this 'findOneAndUpdate' function we are bypassing all of the model checks - like, require-password, default-role-user, etc.  even when `runValidators` is true, it's not doing it.  So I think it might be better to extend this and the google function to first create the user (if email check doesn't find anything), and then update the user.  or do the update first, but if user not found, then run the create with the payload???

  try {
    return User.findOneAndUpdate({ email }, userProfilePayload, {
      runValidators: true, // NOT working
      // setDefaultsOnInsert: true,
      upsert: true,
      new: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(error);
    // i should just use the functions below instead.
  }
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return User.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  googleCreateOrUpdate,
  firebaseCreateOrUpdate,
};
