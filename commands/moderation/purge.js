const {Message, MessageEmbed}= require('discord.js');

module.exports = {
  aliases: ['purged'],
  description: 'To delete a certain users messages in a channel',
  category: 'Moderation',
  guildOnly: true,
  cooldown: '10s',
  requiredPermissions: ['MANAGE_MESSAGES'],
  callback: async ({ message, args, text, client, prefix, instance }) => {

    const member = message.mentions.members.first();
    const messages = message.channel.messages.fetch();
    
    if (member) {
        
        const userMessages = (await messages).filter((m) => m.author.id === member.id)
        await message.channel.bulkDelete(userMessages);
        message.channel.send(`${member} messages have been cleared`)
        
    } else {
        
        if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 99')
        if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
        if(parseInt(args[0]) > 99) return message.channel.send('The max amount of messages that I can delete is 99')
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send('Deleted ' + args[0]  + " messages.")
        
    }

  }
}