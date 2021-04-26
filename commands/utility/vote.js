const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
  aliases: [''],
  description: 'Vote for the bot on top.gg',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

  const embed = new MessageEmbed()
    .setColor('#e0e0d2')
    .setTitle('**SourCreams Global**')
    .setDescription(stripIndents`
    **[Vote](https://top.gg/bot/773238645967814657/vote) »** Please vote for the bot on Top.gg
    `)
    .setThumbnail('https://i.ibb.co/9ZXWfqb/global-icon-13.png')
    .setFooter('Developed by SourCream');

  message.channel.send({embed});

  }
}