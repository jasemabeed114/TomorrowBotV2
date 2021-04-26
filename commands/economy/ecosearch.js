const Discord = require('discord.js');

module.exports = {
  aliases: ['esearch'],
  description: 'Search for coins',
  category: 'Economy',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let add = await client.eco.search(message.author.id, false, 500);
        if (add.cooldown) return message.reply(`You have already searched. Come back after ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`);
        return message.reply(`you claimed ${add.amount} when you searched and now you have a total of ${add.money} coins.`);

  }
}