const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const path = require('path');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy, googleStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'connect-src': ["'self'", 'https://noembed.com', 'https://lla-audio.s3.amazonaws.com', 'https://*.googleapis.com'],
      'media-src': [
        "'self'",
        'https://noembed.com',
        'https://lla-audio.s3.amazonaws.com',
        'https://*.googleusercontent.com',
      ],
      'script-src': ["'self'", 'https://apis.google.com'],
      'default-src': ["'self'", 'https://membox-v7-firebase.firebaseapp.com'],
      'img-src': ["'self'", 'https://*.googleusercontent.com', '*'], // setting * to allow images for all sources (because I'm using card images form a variety of sources)
    },
  })
);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());

passport.use('jwt', jwtStrategy);
passport.use('google', googleStrategy);

app.get('/success', (req, res) => res.send(`successful login. <a href="/v1/auth/google">/v1/auth/google</a>`));

app.get('/fail', (req, res) => res.send('login failed'));

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

// v1 api routes
app.use('/v1', routes);

// React App
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));
  app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../../client/build/index.html')));
}

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
