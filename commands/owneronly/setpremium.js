const premiumuserSchema = require("../../schemas/premiumuserschema")

module.exports = {
  aliases: ['setprem'],
  description: 'Give a user bot premium',
  category: 'BotOwnerOnly',
  guildOnly: true,
  ownerOnly: true,
  cooldown: '5s',
  minArgs: 1,
  maxArgs: 1,
  callback: async ({ message, args, text, client, prefix, instance }) => {

    try{

        const user =  message.mentions.users.first() 
            await premiumuserSchema.findOneAndUpdate(
                {
                    _id: user.id,
                  },
                  {
                    _id: user.id,
                    username: user.username,
                  },
                  {
                    upsert: true,
                  }
            )

            user.send("Congratulations! You have become a premium user.")
            message.channel.send("Successfully added!")
    
    } catch (err) {
      catchErr(err)
    }

  }
}