const { MessageEmbed } = require('discord.js');

module.exports = {
  aliases: [''],
  description: '**Undeafened** everyone in the voice chat',
  category: 'AmongUs',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

        const role = message.guild.roles.cache.find((r) => r.name === 'amongus-moderator')
        //--------------------------------------------------------------------------------------------------------
        if (!role) return message.channel.send(`Among Us has not been setup, please run \`${prefix}setup\` to set it up.`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`This command can only be used by members that has ${role}, role.`).setColor('RED')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
          await member[1].voice.setDeaf(false);
        }
        message.channel.send(
          new MessageEmbed()
            .setTitle("Voting session")
            .setTimestamp()
            .setDescription("Who is the impostor?")
            .setColor("RANDOM")
            .setFooter('Created by SourCream#4448')
        );

  }
}