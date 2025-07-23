const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body, attachments = []) => {
    try {
      let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        }
      });
  
      const mailOptions = {
        from: 'Guild UP | no_reply@gmail.com',
        to: email,
        subject: title,
        html: body,
        attachments: Array.isArray(attachments) ? attachments : []
      };
  
      let info = await transporter.sendMail(mailOptions);
      console.log(info);
      return info;
    } catch (error) {
      console.log(error.message);
    }
  };
  

module.exports = mailSender;
