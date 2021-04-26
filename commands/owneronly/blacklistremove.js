const blacklist = require('../../schemas/blacklistschema');
const { Message } = require('discord.js');

module.exports = {
  aliases: ['blackremove', 'blackr', 'rblack'],
  description: 'To remove the blacklist from a user using the bot',
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
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                message.channel.send(`**${User.displayName}** has been removed from blacklist.`)
            } else {
               message.channel.send(`**${User.displayName}** is not blacklisted.`)
            }
           
        })

  }
}