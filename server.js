const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.post("/api/form", (req, res, next) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </u>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: 'bessygmartinez83@gmail.com',
                pass: process.env.GMAIL_PASS
            }
        })

        transporter.verify((error, success) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take messages");
            }
        });

        let mailOptions = {
            from: req.body.email,
            to: "bessygmartinez83@gmail.com",
            replyTo: req.body.email,
            subject: "New Message from Portfolio Form",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
            res.json({
                msg: "fail"
            })
            } else {
                res.json({
                    msg: "success"
                })
            }

            console.log('Message sent: %s', info.messageId)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
        
        transporter.close();
});



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});