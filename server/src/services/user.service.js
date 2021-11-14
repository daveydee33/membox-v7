const httpStatus = require('http-status');
const _merge = require('lodash/merge');
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
      googleFullData: JSON.stringify(profile),
    },
  };
  const user = await User.findOne({ email });
  if (!user) {
    return createUser(userProfilePayload);
  }
  const mergedWithExisting = _merge(user, userProfilePayload);
  return updateUserById(user._id, mergedWithExisting);
};

/**
 * Firebase login (email/password, Google, Facebook, etc) -- Create or Update user
 * @param {Object} userData
 * @returns {Promise<User>}
 */
const firebaseCreateOrUpdate = async (userData) => {
  const { uid, email, email_verified, name, picture } = userData;

  const userProfilePayload = {
    firebaseUID: uid,
    name,
    picture,
    email,
    isEmailVerified: email_verified,
    services: {
      firebase: {
        firebaseUID: uid,
        firebaseFullData: JSON.stringify(userData),
      },
    },
  };

  // NOTE: Don't create/update records using  'findOneAndUpdate()' is bypassing all of the Model checks - like, setting default values, require values, etc.
  // even when `runValidators: true` it's not doing it.
  // So I switched to this if/then/else option: create the user (if email check doesn't find anything), and then update the user.
  // and this worked better, and I could also use the .save() hook I which increments the version counter.
  // So, DON"T use this method - because it doesn't work properly.
  // return User.findOneAndUpdate({ email }, userProfilePayload, {
  //   setDefaultsOnInsert: true,
  //   upsert: true,
  //   new: true,
  //   useFindAndModify: false,
  // });

  const user = await User.findOne({ firebaseUID: uid });
  if (!user) {
    const newUser = await createUser(userProfilePayload);
    return newUser;
  }
  const updatedUserData = { ...user, ...userProfilePayload };
  const modifiedUser = await updateUserById(user._id, updatedUserData);
  return modifiedUser;
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
