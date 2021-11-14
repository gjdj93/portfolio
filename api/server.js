const express = require("express");
const path = require("path");
const app = express();
const port = 3070;
const { transporter }  = require('./sendmail')

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/email", (req, res) => {
  
  transporter.verify(function (error, success) {
    if (error) {
      console.log("error", error);
    } else {
      console.log("success", success); 
      let message = {
        from: "website@gregottley.co.uk",
        to: "greg.ottley@outlook.com",
        envelope: {
          from: "Greg <website@gregottley.co.uk>",
          to: "greg.ottley@outlook.com",
        },
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
  console.log("req", req);
  console.log("res", res);
});

app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.get("/resume", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
  console.log("Server listening on port %s", port);
});
