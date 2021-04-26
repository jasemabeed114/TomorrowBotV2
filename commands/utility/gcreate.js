const Discord = require('discord.js');

module.exports = {
  aliases: ['creategiveaway', 'giveawaycreate', 'cgiveaway'],
  description: 'Create a giveaway',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  requiredPermissions: ['MANAGE_GUILD'],
  callback: ({ message, args, text, client, prefix, instance }) => {

message.channel.send("Prize?").then(msg3 => {
    let urdadcasueyes = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1}, {time: 20000})
              .on('collect', c => {
                let prize = c.content
 message.channel.send("Giveaway Channel? (channel id)").then(msg3 => {
 let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1}, {time: 20000})
           .on('collect', d => {
             let chan = d.content
             message.channel.send("Duration? (goes by minutes)").then(msg3 => {
                let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1}, {time: 20000})
                .on('collect', f => {
                  let dur = f.content
message.channel.send("Number of winners?").then(msg3 => {
                let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1}, {time: 20000})
                .on('collect', f => {
                  let num = f.content
message.channel.send("Hosted by? (user id)").then(msg3 => {
                let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1}, {time: 20000})
                .on('collect', f => {
                  let host = f.content
                  
        const channel = message.mentions.channels.first();
        client.giveaways.startGiveaway({
            prize: prize,
            channelId: chan,
            guildId: message.guild.id,
            duration: dur * 60000, // 1 Minute
            winners: num, // 1 winner
            hostedBy: host
        });
                  
                  const embed = new Discord.MessageEmbed()
                  .setTitle(`Created Giveaway!`)
                  .setDescription(`
                  Prize: ${prize}
                  Channel: ${chan}
                  Duration: ${dur}m
                  Winners: ${num}
                  Hosted By: ${host}`)
                  .setColor(`7289da`)
                  .setFooter(`You can find your giveaway here ${chan}`)
                  message.channel.send(embed);
                  
                  
                  
                })
                })
                })
})
             }
                )
            

})
                
             
       });
    })
 })
 })

  }
}