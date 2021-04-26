module.exports = {
  aliases: ['sayit'],
  description: 'Make the bot say something',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: ({ message, args, text, client, prefix, instance }) => {

  let said = args.join(' ')
    if (!said) return message.channel.send(`What can I say?\nExample: **\`{PREFIX}say Hewwo World, OwO!\`**`);

  message.channel.send(said);

  }
}