const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  aliases: ['breport', 'reportb', 'rbug', 'bugr'],
  description: 'Report a bug with the bot!',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

const owner = client.users.cache.get("461959539114246175");

const query = args.join(" ");
if (!query) return message.reply("Please specify a bug");

const reportEmbed = new MessageEmbed()
    .setTitle('New BUG!')
    .addField('Author', message.author.toString(), true)
    .addField('Guild', message.guild.name, true)
    .addField('Report', query)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp();
    
    owner.send(reportEmbed);

  }
}