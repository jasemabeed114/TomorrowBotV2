const { Client, Message, MessageEmbed } = require("discord.js");
const db = require("../../schemas/globalschema")

module.exports = {
  aliases: ['sglobal', 'setg', 'link'],
  description: 'Set a channel as the global chat',
  category: 'Configuration',
  guildOnly: true,
  requiredPermissions: ['ADMINISTRATOR'],
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

db.findOne({ Guild: message.guild.id, Channel: message.channel.id, Activated: true }, async(err, data) => {
    if(data) return message.channel.send('Channel has already been listed as an global chat channel'
    );
    
    data = new db({
        Guild: message.guild.id,
        Channel: message.channel.id,
        Author: message.author.id,
        Activated: true,
    })
    
    data.save();
    
    message.channel.send(`${message.channel} has been added to the global chat!`
    );
})

  }
}