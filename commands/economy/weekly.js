const Discord = require('discord.js');

module.exports = {
  aliases: [''],
  description: 'Get your weekly amount of coins',
  category: 'Economy',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let add = await client.eco.weekly(message.author.id, false, 500);
        if (add.cooldown) return message.reply(`You already claimed your weekly coins. Come back after ${add.time.days} days, ${add.time.hours} hours, ${add.time.minutes} minutes & ${add.time.seconds} seconds.`);
        return message.reply(`you claimed ${add.amount} as your weekly coins and now you have total ${add.money} coins.`);

  }
}