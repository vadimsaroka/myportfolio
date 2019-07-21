const express = require("express");
const next = require("next");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const compression = require("compression");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const API_PORT = process.env.PORT || 3000;

const server = express();
server.use(compression());

//BodyParser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

app
  .prepare()
  .then(() => {
    server.get("/details/:id", (req, res) => {
      const actualPage = "/details";
      const queryParams = { link: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.post("/contact", (req, res) => {
      const date = new Date();
      const output = `
      <p>You have a new contact request ${date.toLocaleDateString()}</p>
      <h3>Contact details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3
      <p>${req.body.message}</p>
    `;

      //Nodemailer set up
      async function main() {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service: "Mail.ru",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
          }
        });

        // setup email data with unicode symbols
        let mailOptions = {
          from: process.env.EMAIL, // sender address
          to: process.env.EMAIL2, // list of receivers
          subject: "Message✔", // Subject line
          text: "Sending Email using Node.js", // plain text body
          html: output // html body
        };

        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        transporter.verify(function(error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Server is ready to take our messages");
          }
        });
      }

      main().catch(console.error);
    });

    server.listen(API_PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${API_PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
