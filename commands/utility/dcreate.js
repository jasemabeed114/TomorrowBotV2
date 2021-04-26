const Discord = require('discord.js');
const Giveaway = require('discord-giveaway');

module.exports = {
  aliases: ['dropcreate', 'createdrop', 'created'],
  description: 'To create a drop',
  category: 'Utility',
  guildOnly: true,
  requiredPermissions: ['MANAGE_MESSAGES'],
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

const DropCreator = new Giveaway.DropCreator(client, 'mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority');

message.channel.send("Prize?").then(msg3 => {
    let urdadcasueyes = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1}, {time: 20000})
              .on('collect', c => {
                let prize = c.content
 message.channel.send("Giveaway Channel? (channel id)").then(msg3 => {
 let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1}, {time: 20000})
           .on('collect', d => {
             let chan = d.content
message.channel.send("Hosted by? (user id)").then(msg3 => {
                let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1}, {time: 20000})
                .on('collect', f => {
                  let host = f.content
                  
//const channel = message.mentions.channels.first();
const newDrop = DropCreator.createDrop({
    prize: prize,
    guildId: message.guild.id,
    channelId: chan,
    createdBy: host
});

//message.channel.send(`Created a drop in ${chan}. The prize is **${newDrop.prize}**`);
                  
                  const embed = new Discord.MessageEmbed()
                  .setTitle(`Created Drop!`)
                  .setDescription(`
                  Prize: ${prize}
                  Channel: ${chan}
                  Hosted By: ${host}`)
                  .setColor(`7289da`)
                  .setFooter(`You can find your drop here ${chan}`)
                  message.channel.send(embed);
                  
                  
                  
                })
                })
       });
    })
 })
 })

  }
}