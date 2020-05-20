// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC89ef0f4a10979ea72755973c2fe8beeb';
const authToken = 'f23b8bad3b3d2d87fad4e6e7d5d9b24e';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Remember to vaccinate your child against Polio and TB right after birth.',
     from: '+12052362598',
     to: '+14235964294'
   })
  .then(message => console.log(message.sid));
