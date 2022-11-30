const nodemailer = require('nodemailer');

const { emailAuth, emailFrom } = require('../config');

module.exports = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: emailAuth,
  });

  const mailOptions = {
    from: emailFrom,
    to: 'jta11developer@gmail.com',
    subject: 'Someone registered',
    html: '<p>Someone new registered</p>',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
