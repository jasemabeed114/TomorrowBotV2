const { Client, Message, MessageEmbed } = require("discord.js");
const db = require("../../schemas/globalschema")

module.exports = {
  aliases: ['rglobal', 'remg', 'removeg', 'unlink'],
  description: 'Remove a channel as the global chat',
  category: 'Configuration',
  guildOnly: true,
  requiredPermissions: ['ADMINISTRATOR'],
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

const query = { Guild: message.guild.id, Channel: message.channel.id, Activated: true }
db.findOne(
    query, 
    async(err, data) => {
    if(data) {
        await db.findOneAndDelete(query);
        return message.channel.send(`${message.channel} has been removed from the global chat!`
        );
    }
    
    message.channel.send(`${message.channel} is not listed as a global chat channel!`
    );
})

  }
}