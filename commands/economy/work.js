const Discord = require('discord.js');

module.exports = {
  aliases: [''],
  description: 'Work to get money',
  category: 'Economy',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let add = await client.eco.work(message.author.id, false, 500);
        if (add.cooldown) return message.reply(`You have already worked. Come back after ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`);
        return message.reply(`you worked and got ${add.amount} as your coins.`);

  }
}