const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  aliases: ['nick'],
  description: 'Change someones nickname',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '5s',
  requiredPermissions: ['MANAGE_NICKNAMES'],
  callback: ({ message, text, args, client, prefix, instance }) => {

    const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");

    const argument = args.slice(1).join(" ");

    if (!argument) return message.reply("Please specify a nickname!");

    try {
      member.setNickname(argument);
    } catch (err) {
      console.log(err);
      message.reply(
        "I do not have permission to set " + member.toString() + " nickname!"
      );
    }

  }
}