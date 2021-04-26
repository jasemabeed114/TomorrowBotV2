const { MessageEmbed } = require('discord.js');
const kahootSpam = require('kahoot-spam');
const api = kahootSpam;

module.exports = {
  aliases: ['kspam'],
  description: 'Spam a kahoot live',
  category: 'BotOwnerOnly',
  guildOnly: true,
  ownerOnly: true,
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    console.log(`\x1b[32mSpamming Kahoot with the pin of ${args[0]}, with the name for the bots as: ${args[1]}!\x1b[0m`);

    const intializeEmbed = new MessageEmbed()
    .setColor(`#00FF00`)
    .setTitle(`Spamming`)
    .setDescription(`Spamming Kahoot with the pin of **${args[0]}**, with the name for the bots as: **${args[1]}**!`)
    .setFooter(`Made by SourCream`);
    message.channel.send(intializeEmbed);

    api.spam(args[0], args[1], args[2]).then(() => {
      console.log(`\x1b[32mCompleted!\x1b[0m`);
      
      const doneEmbed = new MessageEmbed()
      .setColor(`#00FF00`)
      .setTitle(`Completed`)
      .setDescription(`Successfully spammed.`)
      .setFooter(`Made by SourCream`);
      message.channel.send(doneEmbed);
    }).catch((err) => {
      console.log(`Whoops! An error occured. ${err}`);

      const errorEmbed = new MessageEmbed()
      .setColor(`#FF0000`)
      .setTitle(`Error`)
      .setDescription(`An error has occured while trying to spam the Kahoot. ${err}`)
      .setFooter(`Made by SourCream`);
      message.channel.send(errorEmbed);
    });

  }
}