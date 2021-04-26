const { Client, Message, MessageEmbed } = require("discord.js");
const db = require("../../schemas/globalschema")

module.exports = {
  aliases: ['lglobal', 'glist', 'globall', 'listg'],
  description: 'See a list of the channels in the global chat',
  category: 'Configuration',
  guildOnly: true,
  requiredPermissions: ['ADMINISTRATOR'],
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

db.find({ Activated: true }, async(err, data) => {
    if (!data) return;
    const map = data
    .map(({ Guild, Channel, Author }) => {
        return `${client.channels.cache.get(Channel)} in ${client.guilds.cache.get(Guild).name} added by ${client.users.cache.get(Author)}`;
    })
    .join("\n");
    
    const embed = new MessageEmbed()
        .setTitle('List of global chat channels!')
        .setDescription(map)
        .setColor("RANDOM");
        
    message.channel.send(embed);
});

  }
}