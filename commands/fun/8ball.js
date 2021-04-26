const { MessageEmbed } = require('discord.js');

module.exports = {
  aliases: ['8'],
  description: 'To get a random answer like an 8ball',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

    var arg = args.join(" ");
    if (!arg) return message.channel.send("You did not specify your question");

let responses = [
        "It is certain",
      "Without a doubt",
      "Reply hazy try again",
      "Better not tell you now",
      "Better not tell you now",
      "Yes definitely",
      "It is decidedly so",
      "As I see it, yes",
      "Ask again later",
      "Concentrate and ask again",
      "My sources say no",
      "Very doubtful",
      "My reply is no",
      "Cannot predict now",
      "Signs point to yes",
      "Outlook good",
      "Not in a million years",
    ];

    let response = 
    responses[Math.floor(Math.random() * responses.length)]

    const ballEmbed = new MessageEmbed()
    .setTitle(`:8ball: ${response}`)
    .setDescription(`Question: ${arg}`)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setColor('f54242');
    message.channel.send(ballEmbed)

  }
}