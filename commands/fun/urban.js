const nfetch = require('node-fetch'); //for urban disctionary api
const querystring = require('querystring');
const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;
const Discord = require('discord.js');

module.exports = {
  aliases: ['urbandictionary'],
  description: 'Search the urban dictionary',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

   // var arg = args.join(" ");
    //if (!arg) return message.channel.send("You did not specify your question");

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await nfetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list) return message.channel.send(`No results found for **${args.join(' ')}**.`);

		const [answer] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

		message.channel.send(embed);

  }
}