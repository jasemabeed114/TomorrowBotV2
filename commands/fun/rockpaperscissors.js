const Discord = require("discord.js");

module.exports = {
  aliases: ['rps'],
  description: 'Play rock, paper, scissors with the bot',
  category: 'Fun',
  guildOnly: true,
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

    const messageArray = message.content.split(' ');
        const arg2 = messageArray.slice(1);;
        let search = arg2.slice(0).join(' ');

        if (!search) return message.channel.send('You must send a valid option! `i.e`**Rock, Paper, Scissors.**')

        const options = [
            "rock :shell: ",
            "paper :newspaper2:",
            "scissors :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        if (search === 'rock') {
            message.channel.send(`My choice was ${option}!`)
        }else if (search === 'paper') {
            message.channel.send(`My choice was ${option}!`)
                }else if (search === 'scissors') {
            message.channel.send(`My choice was ${option}!`)
        }else {
            message.channel.send(`**"${search}**" is not a valid Option! You must send a valid option! \`i.e\`**Rock, Paper, Scissors.** `)
        }

  }
}