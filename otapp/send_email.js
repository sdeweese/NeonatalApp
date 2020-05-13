// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); //should be pre-defined as a variable in the environment already

const fs = require("fs");

pathToAttachment = `${__dirname}/attachment.json`; //file name of the attachment goes here
attachment = fs.readFileSync(pathToAttachment).toString("base64");

//Get current time (to send automated backup email every day)
//var hours = new Date().getHours(); //To get the Current Hours
//var min = new Date().getMinutes(); //To get the Current Minutes
//var sec = new Date().getSeconds(); //To get the Current Seconds

const msg = {
  to: 'tlee5@scu.edu',
  from: 'omwanathrive@gmail.com',
  subject: 'Twilio SendGrid Test with Attachment and Scheduling',
  text: 'Testing the base code for Twilio SendGrid with attachment and scheduling',
  attachments: [
    {
      content: attachment,
      filename: "attachment.json",
      type: "application/json",
      disposition: "attachment"
    }
  ],
};

sgMail.send(msg).catch(err => {
    console.log(err);
});
