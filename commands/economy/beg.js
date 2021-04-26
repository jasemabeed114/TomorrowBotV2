const Discord = require('discord.js');

module.exports = {
  aliases: [''],
  description: 'Beg for money',
  category: 'Economy',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let add = await client.eco.beg(message.author.id, false, 500);
        if (add.cooldown) return message.reply(`You have already begged. Come back after ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`);
        return message.reply(`you claimed ${add.amount} when you begged.`);

  }
}