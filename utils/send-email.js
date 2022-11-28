const nodemailer = require('nodemailer');
const getEmailBody = require('./get-email-body.js');
const { createJWTToken } = require('./get-verification-token');

const { emailAuth, emailFrom, baseURL } = require('../config');

module.exports = (fullname, email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: emailAuth,
  });

  const verificationToken = createJWTToken({ email, otp });

  const mailOptions = {
    from: emailFrom,
    to: email,
    subject: 'Great! Confirm your registration',
    html: getEmailBody(
      fullname,
      `${baseURL}/verify?token=${verificationToken}`
    ),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
