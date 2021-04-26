const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  aliases: ['resetnickname', 'nicknamereset', 'nickreset'],
  description: 'Reset someones nickname',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '5s',
  requiredPermissions: ['MANAGE_NICKNAMES'],
  callback: ({ message, text, args, client, prefix, instance }) => {

    const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }

  }
}