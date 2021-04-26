const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'REACTION', 'USER'],
})

const { GiveawayCreator } = require('discord-giveaway');
const Creator = new GiveawayCreator(client, 'mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority');

const blacklist = require('./schemas/blacklistschema');

client.giveaways = Creator; // Access the Creator from anywhere.

client.queue = new Map()

const { EconomyManager } = require('quick.eco');
const eco = new EconomyManager({
    adapter: 'mongo',
    adapterOptions: {
        collection: 'money', // => Collection Name
        uri: 'mongodb+srv://Bot:BW2xngybtdkWx1a5@sourcream-bot.id5b8.mongodb.net/SourCreamBot?retryWrites=true&w=majority' // => Mongodb uri
    }
});

client.eco = eco;

client.on ('ready', () => {
  // See the "Language Support" section of this documentation
  // An empty string = ignored
  const messagesPath = ''

  // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath,
    showWarns: true, // Show start up warnings
    dbOptions
  })
    // Set your MongoDB connection path
    .setMongoPath(process.env.MONGO_URI)
    // Set the default prefix for your bot, it is ! by default
    .setDefaultPrefix('_')
    // Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
    .setColor(0xff0000)
    .setBotOwner(['461959539114246175'])
    .setDisplayName('SourCreams Global')
    // Set the category emoji by using it's settings:
    .setCategorySettings([
      {
        name: 'Fun',
        emoji: '🎮'
      },
      {
        name: 'Economy',
        emoji: '💸'
      },
      {
        name: 'Utility',
        emoji: '🗄️'
      },
      {
        name: 'Moderation',
        emoji: '💻'
      },
      {
        name: 'BotOwnerOnly',
        emoji: '🔒',
        hidden: true
      },
      {
        name: 'Premium',
        emoji: '🤑'
      },
      {
        name: 'Music',
        emoji: '🎵'
      },
      {
        name: 'Tags',
        emoji: '🏷️'
      },
      {
        name: 'AmongUs',
        emoji: '🕹️'
      },
      {
        // You can change the default emojis as well
        name: 'Configuration',
        emoji: '🚧',
        // You can also hide a category from the help menu
        // Admins bypass this
        hidden: true
      }
    ])
    
    let statuses = [
        `${client.guilds.cache.size} servers!`,
        `{prefix}help`,
        `over ${client.users.cache.size} users!`,
        `Vote on top.gg {prefix}vote`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"});

    }, 60000)
    
})

client.login(process.env.TOKEN)