//const { Database } = require("quickmongo");
//const db = new Database("mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority");
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { stripIndents } = require('common-tags');

module.exports = {
  aliases: ['tagl'],
  description: 'Get the list of tags in the server from the bot (custom command)',
  category: 'Tags',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

  const resp = db.all().filter(data => data.ID.startsWith(`tags_${message.guild.id}`)).sort((a, b) => b.data - a.data);

  let content = "  ";

  resp.forEach(resp => { 
    let user = client.users.cache.find(m => m.id === resp.ID.split('_')[1])
      if (user === null || undefined) user = "Unknown#0000";

    content += `**\`${resp.data.name}\`** | **Owner »** ${resp.data.createdby}\n`;
  });  

  const embed = new MessageEmbed()
    .setTitle(`**${message.guild.name}'s Tags**`)
    .setThumbnail(`${message.guild.iconURL({dynamic: true, size: 2048})}`)
    .setDescription(stripIndents`${content || `**No Tags Created Yet :(**`}`)
    .setFooter(`Tags not in Order | Run _taginfo <tagname> for Info`)
    .setColor("#6497c1")

  message.channel.send(embed);

  }
}