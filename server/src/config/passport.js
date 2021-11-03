const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const { User } = require('../models');
// const { googleCreateOrUpdate } = require('../services/user.service');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

const googleOptions = {
  clientID: config.google.clientId,
  clientSecret: config.google.clientSecret,
  callbackURL: '/v1/auth/google/callback',
};

const googleVerify = async function (accessToken, refreshToken, profile, cb) {
  // const user = await googleCreateOrUpdate(profile);
  // just return the profile for now, i'll do the DB lookup in the service instead.
  return cb(undefined, profile);
};

const googleStrategy = new GoogleStrategy(googleOptions, googleVerify);

module.exports = {
  jwtStrategy,
  googleStrategy,
};
