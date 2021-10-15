const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const itemRoute = require('./item.route');
const tagRoute = require('./tag.route');
const collectionRoute = require('./collection.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/items',
    route: itemRoute,
  },
  {
    path: '/tags',
    route: tagRoute,
  },
  {
    path: '/collections',
    route: collectionRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
