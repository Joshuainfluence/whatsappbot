const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan the QR code above with your WhatsApp');
});

client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hi') {
        message.reply('Hello! Connected to INFLUENCE bot🤖');
    } else if (message.body.toLowerCase().includes('help')) {
        message.reply('Available commands: hi, help');
    }
     else if (message.body.toLowerCase().includes('website')) {
        message.reply('What kind of website do you need');
    }

    else if (message.body.toLowerCase().includes('love')) {
        message.reply('Sorry, no feelings');
    }
     else if (message.body.toLowerCase().includes('woman')) {
        message.reply('Sorry, no feelings');
    }

     else if (message.body.toLowerCase().includes('girl')) {
        message.reply('Sorry, no feelings');
    }

    else if (message.body.toLowerCase().includes('ass')) {
        message.reply('Forbidden word found');
    }

        else if (message.body.toLowerCase().includes('fuck')) {
        message.reply('Forbidden word found');
    }
});

client.initialize();
