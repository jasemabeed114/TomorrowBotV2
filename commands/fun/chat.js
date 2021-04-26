const { TAMAKOAPI } = require("tamako-api");
const tamako = new TAMAKOAPI({
 username: 'SourCream',
 id: '33c6771e3dfc4f534cf2aca802c70928',
 secret: 'fd05e21d7599236733265d5bd8ddd3b5'
});

module.exports = {
  aliases: ['chatbot', 'c'],
  description: 'Talk to the bot',
  category: 'Fun',
  guildOnly: true,
  cooldown: '5s',
  callback: ({ message, args, text, client, prefix, instance }) => {

    var arg = args.join(" ");
    if (!arg) return message.channel.send("You did not specify what you want to say");

//tamako.chatbot(arg, name='SourCream Bot', gender='male', dev='SourCream#4448');

tamako.chatbot(arg).then((response) => {
   message.reply(response);
});

tamako.on("error", error => {
   console.log(error);
});

  }
}