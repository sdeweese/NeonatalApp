// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
<<<<<<< HEAD
const accountSid = 'AC89ef0f4a10979ea72755973c2fe8beeb';
const authToken = '5cc3e12fa8198931673c869e348145ae';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'OmwanaThrive gang',
     from: '+12052362598',
     to: '+16508636318'
   })
  .then(message => console.log(message.sid));
=======
const accountSid = "AC89ef0f4a10979ea72755973c2fe8beeb";
const authToken = "5cc3e12fa8198931673c869e348145ae";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "OmwanaThrive gang",
    from: "+12052362598",
    to: "+14089905334"
  })
  .then(message => console.log(message.sid));
>>>>>>> c5225bc9b88940ba3191c51f9bd3e16fb7ccbe2a