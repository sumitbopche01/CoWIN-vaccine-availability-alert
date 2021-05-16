const nodemailer = require("nodemailer");
const { getEmailBody } = require("./emailBody");
const dotenv = require("dotenv").config();

// async..await is not allowed in global scope, must use a wrapper
exports.sendEmailNotification = async (messageData, userEmail) => {
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
    to: userEmail, // list of receivers
    subject: "Vaccine Available in your area ✔", // Subject line
    text: "Hi ", // plain text body
    html: getEmailBody(messageData),
  });

  console.log("Email sent");
  return true;
};
