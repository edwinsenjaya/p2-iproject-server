const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

async function sendMail(email, subject, text, html) {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "extracnodemailer@gmail.com",
        pass: "edwin123.",
      },
    })
  );

  let info = await transporter.sendMail({
    from: "ExTrac App", // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });

  console.log("Email sent");
}

module.exports = sendMail;
