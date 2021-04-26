const { MessageEmbed } = require("discord.js");

module.exports = {
  aliases: ['cleared', 'cc'],
  description: 'Clear a channel of a certain number of messages',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    const number = args.join(' ')

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            const no = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`<a:error:793709920104480769> You dont have any permissions to execute this command!`)
            .setColor(`#131313`)
            message.channel.send(no)

        } else {
            if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                const naw = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`<a:error:793709920104480769> I can not clear this chat without the \`Manage Messages\` permission!`)
                .setColor(`#131313`)
                message.channel.send(naw)
            } else {
                if(!number) {
                    const naw = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                    .setDescription(`<a:error:793709920104480769> Please enter a number!`)
                    .setColor(`#131313`)
                    message.channel.send(naw)
                } else {
                if(isNaN(number)) {
                        const notanumber = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`<a:error:793709920104480769> This is not a valid number!`)
                        .setColor(`#131313`)
                        message.channel.send(notanumber)
                } else {
                    if(number > 100) {
                        const ripchatlmao = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`<a:error:793709920104480769> Please enter a number from 1 - 100!`)
                        .setColor(`#131313`)
                        message.channel.send(ripchatlmao)
                    } else {
                        if(number < 1) {
                            const megobruhnow = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`<a:error:793709920104480769> Please enter a number higher than 0!`)
                        .setColor(`#131313`)
                        message.channel.send(megobruhnow)
                        } else {
                        const awaits = await message.channel.bulkDelete(number)
                        const done = new MessageEmbed()
                        .setTitle('Success!')
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`<a:success:793761111576018944> Deleted ${awaits.size} messages in from this channel!`)
                        .setFooter(`Requested by: ${message.author.username}`)
                        .setColor(`#131313`)
                        message.channel.send(done).then(sent => sent.delete({ timeout: 10000 }))
                    }
                }
            }         
        }
    }
    }

  }
}