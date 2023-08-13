const fs = require('fs');
const path = require('path');
const sendMail = require('./gmail');

const main = async () => {
    const options = {
      from: 'akhamgilbert@gmail.com',
      to: 'gocoin21@gmail.com',
      subject: 'Gmail api test',
      text: 'Sending a mail from gmail api using nodejs',
      html: '<h1>Sending a mail from gmail api using nodejs</h1>',
    };
    const messageId = await sendMail(options);
    return messageId;


}
main()
.then((messageId) => console.log('Message sent successfully:',messageId))
.catch((err) => console.error(err));