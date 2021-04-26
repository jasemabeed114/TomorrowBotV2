const Discord = require("discord.js");
const nodemailer = require('nodemailer');

module.exports = {
  aliases: ['mail'],
  description: 'Send an email to anyone',
  category: 'Fun',
  guildOnly: true,
  globalCooldown: '1m',
  callback: ({ message, args, text, client, prefix, instance }) => {

message.channel.send("What email do you want to send a message too?").then(msg3 => {
    let urdadcasueyes = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
              .on('collect', c => {
                let email = c.content
 message.channel.send("Email content?").then(msg3 => {
 let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
           .on('collect', d => {
             let cont = d.content
             message.channel.send("Subject of the email??").then(msg3 => {
                let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', f => {
                  let sub = f.content
             
                    
var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'sourcreambot@yahoo.com',
    pass: 'jsuroumlfolkpxfj'
  }
});

var mailOptions = {
  from: 'sourcreambot@yahoo.com',
  to: (email),
  subject: (sub),
  text: (cont)
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    message.channel.send("Error sending message!")
  } else {
    console.log('Email sent: ' + info.response);
    message.channel.send("Email Sent!")
  }
});
                    
                }
                )
            })
                
             
       });
    })
 })
 })

  }
}