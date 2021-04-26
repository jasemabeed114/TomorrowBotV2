const Discord = require('discord.js');


module.exports = {
  aliases: ['setm'],
  description: 'Set the money of someone',
  category: 'BotOwnerOnly',
  guildOnly: true,
  ownerOnly: true,
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let user = message.mentions.members.first()

        let add = await client.eco.setMoney(user.id, false, args[1]);

        return message.reply(`you gave ${user} ${add.amount} and now they have a total of ${add.money} coins.`);

  }
}