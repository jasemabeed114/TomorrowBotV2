module.exports = {
  aliases: ['flip'],
  description: 'Flip a coin against the bot',
  category: 'Fun',
  guildOnly: true,
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

const pileface = Math.floor(Math.random() * 2 + 0)
if (pileface === 0) {
message.channel.send("You just got : **Sword** !")
return message.channel.send("🎉**You won**🎉 **Bravos to you friend** !")
} else {
message.channel.send("You just got : **Stick** !")
return message.channel.send("**💥You Lost, 🎉The bot won🎉** !")
}

  }
}