const Discord = require("discord.js");
const sourcebin = require('sourcebin');

module.exports = {
  aliases: ['bin'],
  description: 'Uplaod code to sourcebin',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

	message.channel.send("What language is the code?").then(msg3 => {
    let urdadcasueyes = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
              .on('collect', c => {
                let cod = c.content
 message.channel.send("code content?").then(msg3 => {
 let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
           .on('collect', d => {
             let desc = d.content
             message.channel.send("file name?").then(msg3 => {
                let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', f => {
                  let footor = f.content
                  
    sourcebin.create([
    {
    name: (footor),
        content: (desc),
        languageId: (cod)
    }
])
                  //const embed = new Discord.MessageEmbed()
                  //.setTitle(`The sourcebin url is ${sourcebin.url}`)
                  //message.channel.send(embed);
                  .then(bin => message.channel.send(`The Sourcebin url is ${bin.url}`))
             }
                )
            })
                
             
       });
    })
 })
 })

  }
}