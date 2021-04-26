const { MessageEmbed } = require('discord.js');

module.exports = {
  aliases: [''],
  description: 'Command is used when the game has **started** and it will deafen users in the call',
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
            await member[1].voice.setDeaf(true);
        }
        message.channel.send(
            new MessageEmbed()
                .setTitle("The Game Starts!")
                .setDescription(
                    "All users in the voice channel has been deafened, nobody can hear nobody.\nPlay smart :)))))))."
                )
                .setColor("GREEN")
                .setThumbnail("https://i.imgur.com/vKF42bH.png")
                .setFooter("creator : SourCream#4448")
                .setTimestamp()
        );

  }
}