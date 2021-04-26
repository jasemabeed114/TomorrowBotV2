const blacklist = require('../../schemas/blacklistschema');
const { Message } = require('discord.js');

module.exports = {
  aliases: ['black'],
  description: 'To blacklist a user from using the bot',
  category: 'BotOwnerOnly',
  guildOnly: true,
  ownerOnly: true,
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`**${User.displayName}** has already been blacklisted!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(`${User.user.tag} has been added to blacklist.`)
            }
           
        })

  }
}