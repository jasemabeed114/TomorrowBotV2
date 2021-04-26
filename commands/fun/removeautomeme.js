const db = require('quick.db');

module.exports = {
  aliases: ['rameme', 'rmvautomeme', 'rautomeme'],
  description: 'Remove auto meme from a channel',
  category: 'Fun',
  guildOnly: true,
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send('You dont have permission to use this command!')

        const guild = message.guild.id;
        if(await db.has(`automeme-${guild}`)) {
            await db.delete(`automeme-${guild}`)
        } else return message.channel.send('There is no data stored.')

        message.channel.send('Automeme has been turned off!')

  }
}