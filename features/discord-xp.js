const Discord = require('discord.js');
const Levels = require('discord-xp');

Levels.setURL("mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority");

module.exports = (client, instance) => {
  client.on('message', async (message) => {

    
    if (!message.guild) return;
    if (message.author.bot) return;

    //const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //const command = args.shift().toLowerCase();

    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`You leveled up to ${user.level}! Keep it going!`);
    }
    
    
  })
}

module.exports.config = {
  displayName: 'xp-module', // Can be changed any time
  dbName: 'XP', // Should be unique and NEVER be changed once set
  loadDBFirst: true, // Wait for the database connection to be present
}