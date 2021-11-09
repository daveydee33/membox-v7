const admin = require('../config/firebase');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../config/roles');
const logger = require('../config/logger');

// decode token - get user data and add it to req.user
const authFirebase =
  (...requiredRights) =>
  async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
      const decodedValue = await admin.auth().verifyIdToken(token);
      if (decodedValue) {
        req.user = decodedValue; // Now the server verified that is accurate user data because it came from Firebase directly to our server

        // need to lookup user in MongoDB first, and find the matching user profile

        // TODO: look them up in DB then check his role/rights

        // if (requiredRights.length) {
        //   const userRights = roleRights.get(user.role);
        //   const hasRequiredRights = requiredRights.every((requiredRight) => userRights.includes(requiredRight));
        //   if (!hasRequiredRights && req.params.userId !== user.id) {
        //     return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
        //   }
        // }

        return next();
      }
      return res.json({ message: 'Firebase, Not Authorized' });
    } catch (e) {
      next(e);
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Firebase error.');
    }
  };

module.exports = authFirebase;

// TODO
// call Firebase, extract user data,
// look up user in DB
// check if user has access rights or not
// ?? what to return in either case?
// handling errors?

// if user has access Right - call  `next()`
// if user doesn't, call            `next(err)`

/*
The original auth.js middleware with passport

check if JWT is valid
call verifier
  req.user = user
  check required rights
    call next()



- receive param requiredRights
  ?- creates a promise
  ?- returns the promise
- decode user
- call verify(requiredRights)
  - if mongo error ... log/return error
  - if auth error ... log/return error
  - req.user = user;
  - check required rights

- if !decode
  call next(err)
- if decode AND verify,
  call next()


*/
