const { MessageEmbed } = require('discord.js');

module.exports = {
  aliases: ['av'],
  description: 'Get the avatar of a user',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

  const user = message.mentions.users.first() || bot.users.cache.get(args[0]) ||  message.author;
  
  const embed = new MessageEmbed()
    .setTitle(`**${user.username}#${user.discriminator}'s avatar**`) 
    .setColor("#e0e0d2")
    .setImage(user.displayAvatarURL({dynamic: true, size: 2048})) 
  
  message.channel.send(embed);

  }
}