const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENTID, // ClientID
    process.env.GMAIL_CLIENTSECRET, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESHTOKEN
});

const accessToken = oauth2Client.getAccessToken()

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
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                type: 'OAuth2',
                user: 'bessygmartinez83@gmail.com',
                clientId: process.env.GMAIL_CLIENTID,
                clientSecret: process.env.GMAIL_CLIENTSECRET,
                refreshToken: process.env.GMAIL_REFRESHTOKEN,
                accessToken: accessToken
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
                console.log("error")
            res.json({
                msg: "fail",
                err: err
            })
            } else {
                console.log("successful")
                res.json({
                    msg: "success"
                })
            }
        })
        
        transporter.close();
});



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});