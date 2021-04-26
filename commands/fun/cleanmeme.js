const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random // Import the package...
const subreddits = [
    "cleanmemes",
    // You can add as many as you wish...
]

module.exports = {
  aliases: ['cmeme', 'cleanmemes', 'cmemes'],
  description: 'Get clean memes from reddit',
  category: 'Fun',
  guildOnly: true,
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

  let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)] // Generates a random subreddit from the array...
somethingRandom.getMeme(randomSubReddit).then(res => {
    const embed = new MessageEmbed()
    .setTitle(res.title)
    .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
    .setImage(res.img)
    .setFooter(`👍 ${res.upvotes} | 💬 ${res.comments}`)
    .setAuthor(`From ${res.author}`)
    .setColor('RANDOM')
    message.channel.send(embed)
    console.log(res)
}).catch(e => message.channel.send('API Error.'))

  }
}