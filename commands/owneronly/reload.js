module.exports = {
  aliases: ['rel'],
  description: 'To reload a command',
  category: 'BotOwnerOnly',
  guildOnly: true,
  ownerOnly: true,
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

if (!args[0]) return message.channel.send('You must input a category')
if (!args[1]) return message.channel.send('You must input a command name')

let category = args[0].toLowerCase();
let commandname = args[1].toLowerCase();

try {
    delete require.cache[require.resolve(`../../commands/${category}/${commandname}.js`)];
    client.commands.delete(commandname);
    
    const pull = require(`../../commands/${category}/${commandname}.js`);
    client.commands.set(commandname, pull);
    
    return message.channel.send(`Done reloading **${commandname}**`);
} catch (error) {
    return message.channel.send(`Error reloading **${commandname}**: ${error.message}`);
}

  }
}