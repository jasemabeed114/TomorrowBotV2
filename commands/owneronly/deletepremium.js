const premiumuserSchema = require("../../schemas/premiumuserschema")

module.exports = {
  aliases: ['delprem'],
  description: 'Delete a users bot premium',
  category: 'BotOwnerOnly',
  guildOnly: true,
  ownerOnly: true,
  cooldown: '5s',
  minArgs: 1,
  maxArgs: 1,
  callback: async ({ message, args, text, client, prefix, instance }) => {

    try{

        const user =  message.mentions.users.first() 
            await premiumuserSchema.deleteOne(
                {
                    _id: user.id,
              },

            
            )

            message.channel.send(user.username + " removed from the list of premium users")
    
    } catch (err) {
      
    }

  }
}