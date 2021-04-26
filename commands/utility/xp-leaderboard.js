const Discord = require('discord.js');
const Levels = require('discord-xp');

module.exports = {
  aliases: ['xplb', 'xpleaderboard'],
  description: 'See the xp leaderboard for the guild',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
 
if (rawLeaderboard.length < 1) return message.reply("Nobody's in leaderboard yet.");
 
const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
 
const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.
 
const embed = new Discord.MessageEmbed()
.setAuthor("Leaderboard")
.setColor("BLURPLE");
lb.forEach(u => {
            embed.addField(`\n${lb.join("\n\n")}`);
        });
 return message.channel.send(embed);

  }
}