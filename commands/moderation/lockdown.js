const Discord = require("discord.js");

module.exports = {
  aliases: ['lockserver'],
  description: 'Lockdown all of the channels in the server',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('You can\'t use this command!')
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    VIEW_CHANNEL: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('Locked all channels');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    VIEW_CHANNEL: true
                }).then(() => {
                    channel.setName(channel.name.replace('🔒', ''))
                })
            })
            return message.channel.send('Unlocked all channels')
        }

  }
}