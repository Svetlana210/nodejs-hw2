const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, EMAIL_FROM } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_FROM };
  await transport.sendMail(email);
  return true;
};

// const email = {
//   to: "hawak94804@meidecn.com",
//   from: "sveta.len123@meta.ua",
//   subject: "Test email",
//   html: `<p>Test email<p/>`,
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("email send success"))
//   .catch((error) => console.log(error.message));
module.exports = sendEmail;
