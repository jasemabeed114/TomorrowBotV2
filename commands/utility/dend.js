const Discord = require('discord.js');
const Giveaway = require('discord-giveaway');

module.exports = {
  aliases: ['dropdelete', 'deletedrop', 'deleted'],
  description: 'To delete a drop',
  category: 'Utility',
  guildOnly: true,
  requiredPermissions: ['MANAGE_MESSAGES'],
  cooldown: '5s',
  callback: async ({ message, text, client, prefix, instance }) => {

const DropCreator = new Giveaway.DropCreator(client, 'mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority');

const args = message.content.split(' ').slice(1);

if (!args) {
    return message.channel.send('Please provide the drop message id');
}

const deleted = await DropCreator.deleteDrop(message.guild.id, parseInt(args[0]));

if (!deleted) {
    return message.channel.send('Doesn\'t exist :/');
}

message.channel.send('Deleted the Drop');

  }
}