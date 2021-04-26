const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  aliases: ['stp'],
  description: 'To stop the music and clear the queue',
  category: 'Music',
  guildOnly: true,
  cooldown: '5s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    const channel = message.member.voice.channel
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("There is nothing playing that I could stop for you.", message.channel);
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react("✅")

  }
}