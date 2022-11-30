require('dotenv').config();

const { env } = process;

const dev_firebase_config = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
};

const prod_firebase_config = {
  apiKey: env.PROD_API_KEY,
  authDomain: env.PROD_AUTH_DOMAIN,
  projectId: env.PROD_PROJECT_ID,
  storageBucket: env.PROD_STORAGE_BUCKET,
  messagingSenderId: env.PROD_MESSAGING_SENDER_ID,
  appId: env.PROD_APP_ID,
};

module.exports = {
  emailAuth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },

  emailFrom: env.EMAIL_FROM,

  tokenSecret: env.TOKEN_SECRET,

  firebaseConfig:
    env.NODE_ENV === 'production' ? prod_firebase_config : dev_firebase_config,

  baseURL: env.NODE_ENV === 'production' ? env.PROD_BASE_URL : env.DEV_BASE_URL,
};
