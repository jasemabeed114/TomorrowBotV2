const Discord = require('discord.js');

module.exports = {
  aliases: ['bal'],
  description: 'See your money balance',
  category: 'Economy',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        let user = message.mentions.members.first() || message.author;
        let money = await client.eco.fetchMoney(user.id);
        return message.channel.send(`${user} has ${money} coins.`);

  }
}