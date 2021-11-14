const admin = require('firebase-admin');

const serviceAccount = require('../../../secrets/google-credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
