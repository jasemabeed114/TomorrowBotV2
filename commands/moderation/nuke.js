const {Message, MessageEmbed}= require('discord.js');

module.exports = {
  aliases: ['purged'],
  description: 'To delete a certain users messages in a channel',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply('I need manage channels permissions!');

message.channel.clone().then((ch) => {
    ch.setParent(message.channel.parent.id);
    ch.setPosition(message.channel.position);
    message.channel.delete();
    
    ch.send('This channel has been nuked!')
})

  }
}