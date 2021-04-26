const Discord = require("discord.js");
const giveMeAJoke = require('give-me-a-joke');

module.exports = {
  aliases: ['norris', 'chuck'],
  description: 'Get a random Chuck Norris joke',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

giveMeAJoke.getRandomCNJoke (function(joke) {
    message.channel.send(joke);
});

  }
}