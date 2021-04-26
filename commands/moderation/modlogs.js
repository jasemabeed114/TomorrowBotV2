const punishments = require('../../schemas/warnschema');
const Discord = require("discord.js");

module.exports = {
  aliases: ['modlog'],
  description: 'See the modlogs of a certain user',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!toWarn) return message.channel.send('Please provide someone to lookup modlogs for.')

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You are not allowed to see modlogs!")
    }

    //if(message.author.id === toWarn.id) return message.channel.send('You cannot warn yourself!');

    //let reason = args.slice(1).join(" ")

    //if(!reason) return message.channel.send('NO REASON!')

    let data = await punishments.findOne({
        GuildID: message.guild.id,
        UserID: toWarn.id
    });

        message.channel.send(`Moderator: ${data.Punishments.find} \n\n Reason: ${data.Punishments.find} \n\n PunishType: ${data.Punishments.find}`);

    /*if(data) {
        data.Punishments.unshift({
            PunishType: 'Warn',
            Moderator: message.author.id,
            Reason: reason,
        });
        data.save();

        message.channel.send(`warned ${toWarn} for \`${reason}\``)
    } else if (!data) {
        let newData = new punishments({
            GuildID: message.guild.id,
            UserID: toWarn.id,
            Punishments: [{
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            }, ],
        });
        newData.save();

        message.channel.send(`warned ${toWarn} for \`${reason}\``)
    }*/

  }
}