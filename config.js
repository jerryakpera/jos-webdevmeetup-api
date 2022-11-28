require('dotenv').config();

const { env } = process;

module.exports = {
  emailAuth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },

  emailFrom: env.EMAIL_FROM,

  tokenSecret: env.TOKEN_SECRET,

  firebaseConfig: {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDER_ID,
    appId: env.APP_ID,
  },

  baseURL: env.NODE_ENV === 'production' ? env.PROD_BASE_URL : env.DEV_BASE_URL,
};
