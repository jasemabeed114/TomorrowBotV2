const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const fs = require('fs');

const fetch = require('node-fetch');

module.exports = {
  aliases: ['ys', 'ysay', 'sudo'],
  description: 'make someone say something with a webhook',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

       const searchQuery = args.join(" ");

        if (!searchQuery) return message.reply('Mention someone you chuch!')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)

        message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(args.slice(1).join(' '))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })

  }
}