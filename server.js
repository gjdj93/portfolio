const express = require("express");
const cors = require('cors');
const path = require("path");
const app = express();
const port = 3070;
const { transporter }  = require('./sendmail')
require('dotenv').config();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/email", (req, res) => {
  
  transporter.verify(function (error, success) {
    if (error) {
      console.log("error", error);
    } else {
      console.log("success", success); 
      let message = {
        from: process.env.EMAIL_FROM_ADDRESS,
        to: "greg.ottley@outlook.com",
        subject: "Nodemailer test",
        text: "Hello, this is a test sending email",
        html: "<p>Hello, this is a test sending email</p>",
      };
      transporter.sendMail(message, (error, info) => {
          if (error) {
              return console.log('error', error);
          }
          console.log('message sent: %s', info.messageId);
      })
    }
  });
  res.send("send an email");
});

app.post("/send-mail", (req, res) => {
  const { name, phone, email, subject, message } = req.body;
  transporter.verify(function (error) {
    if (error) {
      res.send({"status": 500, "message": "Message failed"});
    } else {
      let mailToSend = {
        from: process.env.EMAIL_FROM_ADDRESS,
        to: "hello@gregottley.co.uk",
        subject: `Message from ${name} - ${subject}`,
        text: `You have received a message from ${name} via the website. Phone Number: ${phone} Email Address: ${email} Subject: ${subject} Message: ${message}`,
        html: `<p>You have received a message from ${name} via the website.</p><p>Phone Number: ${phone}<br/>Email Address: ${email}<br/>Subject: ${subject}</p><p>Message: ${message}</p>`,
      };
      transporter.sendMail(mailToSend, (error, info) => {
          if (error) {
              res.send({"status": 500, "message": "Message failed"});
              return console.log('error', error);
          }
          console.log('message sent: %s', info.messageId);
          res.send({"status": 200, "message": "Message sent successfully"});
      })
    }
  });
});

app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
  console.log("Server listening on port %s", port);
});
