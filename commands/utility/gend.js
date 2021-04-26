const Discord = require('discord.js');

module.exports = {
  aliases: ['endgiveaway', 'giveawayend', 'egiveaway'],
  description: 'End an already running giveaway',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  syntax: '<message id>',
  requiredPermissions: ['MANAGE_GUILD'],
  callback: async ({ message, text, client, prefix, instance }) => {

        const args = message.content.split(' ').slice(1);
        const ended = await client.giveaways.endGiveaway(args.join(' '));
        
        if (!ended) {
            return message.channel.send('This giveaway has already ended');
        }
        else {
            message.channel.send('Ended the giveaway');
        }

  }
}