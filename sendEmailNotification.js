const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
exports.sendEmailNotification = async (receivers) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER_EMAIL_ADDRESS, // generated ethereal user
      pass: process.env.SENDER_EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "sumitbopche01@gmail.com", // sender address
    to: receivers, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Vaccines available at following centers</b>", // html body
  });

  console.log("Message sent: %s");
  return true;
};
