const Discord = require("discord.js");

module.exports = {
  aliases: ['slowtime', 'timeslow', 'smode'],
  description: 'Set the slowmode time of a channel',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '10s',
  requiredPermissions: ['MANAGE_GUILD'],
  callback: ({ message, text, client, prefix, instance }) => {

const messageArray = message.content.split(' ');
const args = messageArray.slice(1);

message.channel.setRateLimitPerUser(args[0])
message.channel.send(`Slowmode is now: ${args[0]}s`)

  }
}