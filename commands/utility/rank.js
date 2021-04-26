const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require("canvacord");

module.exports = {
  aliases: ['rk'],
  description: 'See your level in the guild',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        const target = message.mentions.users.first() || message.author;

        const user = await Levels.fetch(target.id, message.guild.id);
        
        const neededXp = Levels.xpFor(parseInt(user.level) + 1);
        
        if (!user) return message.reply('You dont have any xp! try to send some messages.')
        
        const rank = new canvacord.Rank()
            .setAvatar(target.displayAvatarURL({ dynamic: false, format: 'png' }))
            .setCurrentXP(user.xp)
            .setLevel(user.level)
            .setRequiredXP(neededXp)
            .setStatus(target.presence.status)
            .setProgressBar('#FFA500', "COLOR")
            .setUsername(target.username)
            .setDiscriminator(target.discriminator)
        rank.build()
            .then(data => {
                const attatchment = new Discord.MessageAttachment(data, 'funny.png')
                message.channel.send(attatchment);
            })
        
        //message.channel.send(`You are currently level **${user.level}**!`)

  }
}