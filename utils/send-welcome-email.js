const nodemailer = require('nodemailer');
const getWelcomeEmailBody = require('./get-welcome-email-body');

const { emailAuth, emailFrom } = require('../config');

module.exports = (fullname, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: emailAuth,
  });

  const mailOptions = {
    from: emailFrom,
    to: email,
    subject: 'Welcome to the Jos WebDev Meetup',
    html: getWelcomeEmailBody(fullname),
    attachments: [
      {
        filename: 'Jos-DevCon-Agenda.pdf',
        path: 'utils/Jos-DevCon-Agenda.pdf',
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
