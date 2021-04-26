const { MessageEmbed } = require('discord.js');

module.exports = {
  aliases: [''],
  description: 'Setup the server to work with the amongus commands',
  category: 'AmongUs',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
        //--------------------------------------------------------------------------------------------------------
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You need ` MANAGE_MESSAGES ` permission to use this command.')
        if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send('I need ` ADMINISTRATOR ` permissions to continue.')
        if(!role) {
        let auRole = await message.guild.roles.create({
            data: {
              name: 'amongus-moderator'
            }
          })
          message.channel.send(new MessageEmbed()
            .setTitle('AmongUs Setup Completed')
            .setDescription('Command List -> https://github.com/reconlx/amongus-discord-bot/').setColor('GREEN')
          )
        } else {
            message.channel.send('` Among-Us Role ` has already been created!')
        }

  }
}