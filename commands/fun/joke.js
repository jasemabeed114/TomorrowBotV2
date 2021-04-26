const Discord = require("discord.js");
const giveMeAJoke = require('give-me-a-joke');

module.exports = {
  aliases: ['funny', 'jk'],
  description: 'To get a random dad joke',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

giveMeAJoke.getRandomDadJoke(function(joke){
      message.channel.send(joke);
    });

  }
}