const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  aliases: ['dis'],
  description: 'image manip to make a distracted boyfriend meme',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

const mention = new MessageEmbed()
        .setTitle("You need to mention 2 users.")
        .setColor("#c98aff")
        .setTimestamp()
        const no = new MessageEmbed()
        .setTitle("There can\'t be 3 womans")
        .setColor("#c98aff")
        .setTimestamp()
        const itsano = new MessageEmbed()
        .setTitle("There can\'t be 3 womans and 2 mens.")
        .setColor("#c98aff")
        .setTimestamp()
        const user1 = message.mentions.members.size<1
        const notagain = message.mentions.members.size===3
        const nah = message.mentions.members.size>3
     if (user1) return message.channel.send(mention)
     if (notagain) return message.channel.send(no)
     if (nah) return message.channel.send(itsano)
     
     if (message.mentions.members.size===2) {
        let aut = message.author || message.aut;
        let avatar1 = aut.displayAvatarURL({dynamic: false})
        let member = message.mentions.members.first() || message.member;
        let avatar2 = member.user.displayAvatarURL({dynamic: false})
        let member2 = message.mentions.members.last() || message.member2;
        let avatar3 = member2.user.displayAvatarURL({dynamic: false})
        let link = await fetch(`https://vacefron.nl/api/distractedbf?boyfriend=${avatar1}&woman=${avatar2}&girlfriend=${avatar3}`)
        let embed = new MessageEmbed()
        .setImage(link.url)
        .setColor("#c98aff")
        .setTimestamp()

        message.channel.send(embed)
        .catch(e => {
            console.log(e)
            return message.channel.send("Something went wrong!")
            })
        }

  }
}