const premiumuserSchema = require("../../schemas/premiumuserschema")
const { tictactoe } = require('reconlx');

module.exports = {
  aliases: ['ttt'],
  description: 'To play tic tac toe with someone',
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
              
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
              
              //message.channel.send('You have premium!')
            } else message.reply("You are not a premium user!")
    
    } catch (err) {

    }


  }
}