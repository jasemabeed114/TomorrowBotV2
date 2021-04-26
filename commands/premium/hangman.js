const premiumuserSchema = require("../../schemas/premiumuserschema")
const { hangman } = require('reconlx');

module.exports = {
  aliases: ['hman'],
  description: 'To play hangman',
  category: 'Premium',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    try{
            const id = await premiumuserSchema.find({
                _id: message.author.id,
            })

            console.log(id)

            if(id.length === 1) {
              //do stuff here
              
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You need manage messages permission.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Please specify a channel')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
              
              //message.channel.send('You have premium!')
            } else message.reply("You are not a premium user!")
    
    } catch (err) {

    }


  }
}