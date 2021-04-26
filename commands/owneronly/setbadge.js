const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  aliases: ['setb', 'sbadge'],
  description: 'Give a user a badge for their profile',
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
      .setDescription('Error! Please specify a badge to give!')
      .setColor('RED')
    if (!badgeName) return message.channel.send(errinput2)

    // Executing

    if (badgeName == 'Developer') {
      await db.set(`users.${mentionedMember.id}.Developer`, '✅')
      const devSuc = new Discord.MessageEmbed()
        .setDescription('Successfully granted the **Developer** Badge to the mentioned user!')
        .setColor('BLUE')
        message.channel.send(devSuc)
    } else if (badgeName == 'Partner') {
      await db.set(`users.${mentionedMember.id}.Partner`, '✅')
      const partSuc = new Discord.MessageEmbed()
        .setDescription('Successfully granted the **Partnership** Badge to the mentioned user!')
        .setColor('BLUE')
        message.channel.send(partSuc)
    } else if (badgeName == 'Contributor') {
      await db.set(`users.${mentionedMember.id}.Contributer`, '✅')
      const contriSuc = new Discord.MessageEmbed()
        .setDescription('Successfully granted the **Contributor** Badge to the mentioned user!')
        .setColor('BLUE')
        message.channel.send(contriSuc)
    } else if (badgeName == 'BugHunter') {
      await db.set(`users.${mentionedMember.id}.BugHunter`, '✅')
      const hunSuc = new Discord.MessageEmbed()
        .setDescription('Successfully granted the **FusionGaius Bug Hunter** Badge to the mentioned user!')
        .setColor('BLUE')
        message.channel.send(hunSuc)
    } else if (badgeName == 'Staff') {
      await db.set(`users.${mentionedMember.id}.Staff`, '✅')
      const staSuc = new Discord.MessageEmbed()
        .setDescription('Successfully granted the **Staff** Badge to the mentioned user!')
        .setColor('BLUE')
        message.channel.send(staSuc)
    } else if (badgeName == 'Boosters') {
      await db.set(`users.${mentionedMember.id}.Boosters`, '✅')
      const booSuc = new Discord.MessageEmbed()
        .setDescription('Successfully granted the **Boosters** Badge to the mentioned user!')
        .setColor('BLUE')
        message.channel.send(booSuc)
    } else {
      message.channel.send('Error! That badge does not exist! Please try again!')
    }

  }
}