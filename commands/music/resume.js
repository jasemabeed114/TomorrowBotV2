const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  aliases: ['res'],
  description: 'To resume the paused music',
  category: 'Music',
  guildOnly: true,
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("YELLOW")
      .setAuthor("Music has been Resumed!", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);

  }
}