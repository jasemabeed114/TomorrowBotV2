const Discord = require("discord.js");
const util = require('minecraft-server-util');

module.exports = {
  aliases: ['mc'],
  description: 'Get the info of a minecraft server',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

message.channel.send("ip?").then(msg3 => {
    let urdadcasueyes = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1}, {time: 10000})
              .on('collect', c => {
                let ips = c.content
message.channel.send("port? (the default port is 25565)").then(msg3 => {
 let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1}, {time: 10000})
           .on('collect', d => {
             let ports = d.content
                  
        util.status(ips, {port: parseInt(ports)}).then((response) =>{
            //console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('Mc server util by SourCream');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
                            
 });
 })
 })
 })

  }
}