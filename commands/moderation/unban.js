const Discord = require("discord.js");

module.exports = {
  aliases: ['unbanned'],
  description: 'To unban a user',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, text, client, prefix, instance }) => {


    //args system that is very required!!!!
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

        let toBan = await client.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        message.guild.members.unban(toBan, reason)

        message.channel.send(`${toBan} has been unbanned from the server!`)

  }
}