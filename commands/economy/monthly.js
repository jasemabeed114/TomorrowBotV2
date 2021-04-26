const Discord = require('discord.js');

module.exports = {
  aliases: [''],
  description: 'Get monthly coins',
  category: 'Economy',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let add = await client.eco.monthly(message.author.id, false, 500);
        if (add.cooldown) return message.reply(`You have already claimed your monthly coins. Come back after ${add.time.days} days, ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`);
        return message.reply(`you claimed ${add.amount} as your monthly coins and now you have a total of ${add.money} coins.`);

  }
}