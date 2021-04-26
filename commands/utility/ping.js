// File name: "ping.js"
// Folder "./commands"
const db = require("quick.db");

module.exports = {
  aliases: ['p'],
  description: 'To get the ping of the bot',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  minArgs: 0,
  maxArgs: 0,
  callback: ({ message, args, text, client, prefix, instance }) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
    
    let save = db.fetch(`playlist_${user.id}`)
    message.reply(save)
  }
}