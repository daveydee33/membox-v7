const admin = require('firebase-admin');

const serviceAccount = require('../../../secrets/membox-v7-firebase-firebase-adminsdk-yzi8r-91a05c5b5b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
