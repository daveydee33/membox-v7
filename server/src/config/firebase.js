const admin = require('firebase-admin');

let serviceAccount;
if (process.env.NODE_ENV !== 'production') {
  serviceAccount = require('../../../secrets/google-credentials.json');
} else {
  serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
