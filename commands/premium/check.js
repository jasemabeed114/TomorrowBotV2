const premiumuserSchema = require("../../schemas/premiumuserschema")

module.exports = {
  aliases: ['check'],
  description: 'To check if you have bot premium',
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
              message.channel.send('You have premium!')
            } else message.reply("You are not a premium user!")
    
    } catch (err) {

    }


  }
}