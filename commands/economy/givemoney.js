const Discord = require('discord.js');

module.exports = {
  aliases: ['givem'],
  description: 'Give your money to someone',
  category: 'Economy',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let user = message.mentions.members.first()

        let add = await client.eco.addMoney(user.id, args[1]);
        
        let sub = await client.eco.subtractMoney(message.author.id, args[1]);

        return message.reply(`you gave ${user} ${add.amount} and now you have a total of ${sub.money} coins.`);

  }
}