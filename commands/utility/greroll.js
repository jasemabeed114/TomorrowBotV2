const Discord = require('discord.js');

module.exports = {
  aliases: ['rerollgiveaway', 'giveawayreroll', 'rgiveaway'],
  description: 'Reroll an already ended giveaway',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  syntax: '<message id>',
  requiredPermissions: ['MANAGE_GUILD'],
  callback: async ({ message, text, client, prefix, instance }) => {

        const args = message.content.split(' ').slice(1);
        const rerolled = await client.giveaways.rerollGiveaway(args.join(' '));
        
        if (!rerolled) {
            return message.channel.send('This giveaway hasn\'t ended');
        }
        else {
            message.channel.send('Rerolled the giveaway');
        }

  }
}