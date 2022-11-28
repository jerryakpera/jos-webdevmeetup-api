const router = require('express').Router();
const sendEmail = require('../utils/send-email');
const sendWelcomeEmail = require('../utils/send-welcome-email');

const { getUser, updateUser } = require('../utils/user-utils');
const { verifyToken } = require('../utils/get-verification-token');

/* GET  */
router.get('/', async (req, res, next) => {
  return res.send('OK!');
});

/* Verify  */
router.get('/verify', async (req, res, next) => {
  try {
    const { token } = req.query;

    const decodedToken = verifyToken(token);
    if (!decodedToken) {
      return res.send('The link has expired');
    }

    const { email } = decodedToken;

    const user = await getUser(email);
    const { fullname } = user;

    await updateUser(email, { verified: true });

    await sendWelcomeEmail(fullname, email);

    return res.send(
      'Verification successful. Please check your email for details about the event'
    );
  } catch (err) {
    return res.send('We couldnt verify your email. Please try again');
  }
});

/* Send email */
router.post('/email', async (req, res, next) => {
  const { fullname, email } = req.body;

  try {
    await sendEmail(fullname, email);

    res.send('Email sent successfully!');
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      message: 'Something went wrong',
    });
  }
});

router.get('/test', (req, res) => {
  return res.send('OK');
});

module.exports = router;
