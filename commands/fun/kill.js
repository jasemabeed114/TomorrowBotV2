const {Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
  aliases: ['shoot'],
  description: 'Pretend to kill someone',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

    const target = message.mentions.users.first()
        const DyingWays = ['Scooter ankle R.I.P','Putting a toaster in the bath','promising ur son robux','insulting gurenge that idiot','watching gacha','watching a netflix adaptation','insulting e']
        const dyingIndex = Math.floor(Math.random()* DyingWays.length);
        message.channel.send(`${target} died by ${DyingWays[dyingIndex]} `)

  }
}