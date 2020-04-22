// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); //should be pre-defined as a variable in the environment already

const fs = require("fs");

pathToAttachment = `${__dirname}/temp.jpg`; //file name of the attachment goes here
attachment = fs.readFileSync(pathToAttachment).toString("base64");

const msg = {
  to: 'sdeweese@scu.edu',
  from: 'omwanathrive@gmail.com',
  subject: 'Twilio SendGrid Test with Attachment!!!',
  text: 'Testing the base code for Twilio SendGrid! Along with attachment hopefully :) (if ur seeing this, it worked!) pls enjoy this meme i like hehe',
  attachments: [
    {
      content: attachment,
      filename: "temp.jpg",
      type: "image/jpg",
      disposition: "attachment"
    }
  ]
};
sgMail.send(msg).catch(err => {
    console.log(err);
});