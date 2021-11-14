const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "gregottley.co.uk",
    port: 465,
    secure: true,
    auth: {
      user: "website@gregottley.co.uk",
      pass: "q[rhJ*fto{G&",
    },
});

module.exports = { transporter };