const { version, MessageEmbed } = require("discord.js");
const moment = require("moment");
const { stripIndents } = require("common-tags");
require("moment-duration-format");

module.exports = {
  aliases: ['stat', 'botstats'],
  description: 'Get usage info for the bot',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

   const duration = moment.duration(client.uptime).format(" D [days], H [hours], m [minutes], s [seconds]");
  
        const embedStats = new MessageEmbed()
            .setTitle("**SourCreams Global Stats**")
            .setColor("e0e0d2")
            .setThumbnail(`https://i.ibb.co/9ZXWfqb/global-icon-13.png`)
            .setDescription(stripIndents`
            📊 __**Statistics**__
            **Users »** ${client.users.cache.size}
            **Servers »** ${client.guilds.cache.size}
            **Channels »** ${client.channels.cache.size}
            **Emojis »** ${client.emojis.cache.size}
            **Uptime »** ${duration}\n**Ping (Latency) »** \`${Math.round(client.ws.ping)} ms\`

            💡 __**Bot Module Versions**__
            **Discord.js »** \`v${version}\`
            **Node.js »** \`${process.version}\`
            **Databases »** \`v7.1.1\`

            🖥 __**Usage**__
            **Memory Usage »** ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
            **CPU Usage »** ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%
            **Node CPU Usage »** ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%

            **[Dev Website](https://sourcreambot.xyz)** | **[Invite](https://discord.com/api/oauth2/authorize?client_id=773238645967814657&permissions=8&scope=bot)** | **[Support Server](https://discord.gg/9nCn6y6s2p)** | **[Vote on top.gg](https://top.gg/bot/773238645967814657/vote)**
            `)
            .setFooter(`To learn more about SourCreams Global, run ${prefix}about for special information`)

        message.channel.send(embedStats);

  }
}