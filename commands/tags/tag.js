//const { Database } = require("quickmongo");
//const db = new Database("mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority");
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  aliases: ['tg'],
  description: 'Get a tag from the bot (custom command)',
  category: 'Tags',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

  let tagname = args.join(" ");
    if (!tagname) return message.channel.send(`**Specify a Tag Name**\n*Note: Case Sensitive Tag Names!*`);
   
  let tags = await db.fetch(`tags_${message.guild.id}-${tagname}`);
    if (!tags) return message.channel.send(`**Tag Not Found** 🔎\n\n*Names are Case Sensitive. Make sure its spelt correctly!*`);

  let content = tags.content;

    message.channel.send(`${content}`)

  }
}