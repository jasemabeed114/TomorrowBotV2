const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  aliases: ['remb', 'removeb', 'rbadge'],
  description: 'Remove a users badge from their profile',
  category: 'BotOwnerOnly',
  ownerOnly: true,
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    // Variables
      const mentionedMember = message.mentions.members.first()
      let badgeName = (args[1])

    // Input Checking
    const errinput = new Discord.MessageEmbed()
      .setDescription('Error! Please specify a member!')
      .setColor('RED')
    if (!mentionedMember) return message.channel.send(errinput)

    const errinput2 = new Discord.MessageEmbed()
      .setDescription('Error! Please specify a badge to remove!')
      .setColor('RED')
    if (!badgeName) return message.channel.send(errinput2)

    // Executing

    if (badgeName == 'Developer') {
      await db.set(`users.${mentionedMember.id}.Developer`, '❌')
      const devSuc = new Discord.MessageEmbed()
        .setDescription('Successfully removed the **Developer** Badge from the mentioned user!')
        .setColor('BLUE')
        message.channel.send(devSuc)
    } else if (badgeName == 'Partnership') {
      await db.set(`users.${mentionedMember.id}.Partner`, '❌')
      const partSuc = new Discord.MessageEmbed()
        .setDescription('Successfully removed the **Partnership** Badge from the mentioned user!')
        .setColor('BLUE')
        message.channel.send(partSuc)
    } else if (badgeName == 'Contributor') {
      await db.set(`users.${mentionedMember.id}.Contributer`, '❌')
      const contriSuc = new Discord.MessageEmbed()
        .setDescription('Successfully removed the **Contributor** Badge from the mentioned user!')
        .setColor('BLUE')
        message.channel.send(contriSuc)
    } else if (badgeName == 'BugHunter') {
      await db.set(`users.${mentionedMember.id}.BugHunter`, '❌')
      const hunSuc = new Discord.MessageEmbed()
        .setDescription('Successfully removed the **Bug Hunter** Badge from the mentioned user!')
        .setColor('BLUE')
        message.channel.send(hunSuc)
    } else if (badgeName == 'Staff') {
      await db.set(`users.${mentionedMember.id}.Staff`, '❌')
      const staSuc = new Discord.MessageEmbed()
        .setDescription('Successfully removed the **Staff** Badge from the mentioned user!')
        .setColor('BLUE')
        message.channel.send(staSuc)
    } else if (badgeName == 'Boosters') {
      await db.set(`users.${mentionedMember.id}.Boosters`, '❌')
      const booSuc = new Discord.MessageEmbed()
        .setDescription('Successfully removed the **Boosters** Badge from the mentioned user!')
        .setColor('BLUE')
        message.channel.send(booSuc)
    } else {
      message.channel.send('Error! That badge does not exist! Please try again!')
    }

  }
}