//const { Database } = require("quickmongo");
//const db = new Database("mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { stripIndents } = require("common-tags");

module.exports = {
  aliases: ['tagi'],
  description: 'Get the info of tag from the bot (custom command)',
  category: 'Tags',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

  let tagname = args.join(" ");
    if (!tagname) return message.channel.send(`You must Specify a Tag Name to look-up.`);
   
  let tags = await db.fetch(`tags_${message.guild.id}-${tagname}`);
    if (!tags) return message.channel.send(`**Tag Not Found** 🔎\n\n*Names are Case Sensitive. Make sure its spelt correctly!*`);

  let content = tags.content;
  let createdby = tags.createdby;
  let createdbyid = tags.createdbyid;
  let name = tags.name;
  let date = tags.date;

    let embed = new MessageEmbed()
      .setTitle(`**Tag Info**`)
      .setThumbnail(`${message.guild.iconURL({dynamic: true, size: 2048})}`)
      .setColor(`#6497c1`)
      .setDescription(stripIndents`
      **\`${name}\`**
      ${content}

      **Created by »** ${createdby} **\`${createdbyid}\`**
      **Date »** ${date}
      `)
      .setFooter(`Tags are Guild Based, not Globally.`)

    message.channel.send(embed);

  }
}