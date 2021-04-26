const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  aliases: ['doc', 'documentation'],
  description: 'Search the discord.js docs',
  category: 'Utility',
  guildOnly: true,
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

       const searchQuery = args.join(" ");
       const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(searchQuery)}`;

       fetch(url)
       .then((res)=> res.json())
       .then((embed)=>{
           if(embed && !embed.error){
               message.channel.send({embed})
           }else { 
               message.reply(`
               I don't know about you but ${searchQuery} isn't a valid doc.
               `)
           };
       })
       .catch((e)=>{
           message.reply('Woops, there\'s been an error. Check console for details.');
       });

  }
}