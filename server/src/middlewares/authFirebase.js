const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');
const logger = require('../config/logger');
const admin = require('../config/firebase');

// decode token - get user data and add it to req.user
const authFirebase =
  (...requiredRights) =>
  async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log(`token!! :)`, token);
    // console.log(`zzz required Rights`, requiredRights);
    try {
      const decodedValue = await admin.auth().verifyIdToken(token);
      if (decodedValue) {
        req.user = decodedValue; // Now the server verified that is accurate user data because it came from Firebase directly to our server
        return next();
      }
      return res.json({ message: 'Firebase, Not Authorized' });
    } catch (e) {
      next(e);
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Firebase error.');
    }
  };

module.exports = authFirebase;
