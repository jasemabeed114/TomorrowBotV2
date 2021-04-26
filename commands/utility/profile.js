const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');

module.exports = {
  aliases: ['id'],
  description: 'See your personal profile',
  category: 'Utility',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

    // Variables
    const mem = message.author
    const mentionedMember = message.mentions.members.first();

        // Database Fetch (Self) (Badges)
        const developer = await db.get(`users.${mem.id}.Developer`);
        const partner = await db.get(`users.${mem.id}.Partner`);
        const contributor = await db.get(`users.${mem.id}.Contributer`);
        const hunter = await db.get(`users.${mem.id}.BugHunter`);
        const staff = await db.get(`users.${mem.id}.Staff`);
        const boosters = await db.get(`users.${mem.id}.Boosters`);
//\n | All roles, ${message.author.roles.cache.map(r => `${r}`).join(' | ')
        // Variables
        const then = moment(message.author.createdAt);
        const time = then.from(moment());
        const ca = then.format("MMM Do, YYYY");

        const em = new Discord.MessageEmbed()
        em.setAuthor(message.author.username, message.author.displayAvatarURL())
        em.setTitle(`${message.author.username}'s Profile`)
        em.setDescription(`Displaying <@${message.author.id}>'s Profile`)
        em.addField('❯ <:discord:778200180205158410> | User Information', (`
          <:user:777889680879648769> | Username: ${message.author.tag}\n<:userid:777889681098407966> | User ID: ${message.author.id}\n<:arrow:777889681114267668> | Created: ${ca} (${time})\n | Account created at, ${message.author.createdAt}\n | Joined server at, ${message.author.joinedAt}\n | Last message, ${message.author.lastMessage.content}\n | Highest role, ${message.author.roles}}
      `))
        em.addField(`❯ | SourCream Bot Badges`, (`
      <:developer:798526185499525171> | Developer: ${developer || '❌'}\n<:Partnership:798526185466363904> | Partnership: ${partner || '❌'}\n<:Contributor:798526185549856779> | Contributor: ${contributor || '❌'}\n<:BugHunter:798526185310650419> | BugHunter: ${hunter || '❌'}\n<:StaffMembers:798526185482879026> | Staff: ${staff || '❌'}\n<:NitroBooster:798526185440411648> | Boosters: ${boosters || '❌'}
      `), true)
        if (!mentionedMember) return message.channel.send(em)

        // Database Fetch (Mentioned) (Badges)
        const mdeveloper = await db.get(`users.${mentionedMember.id}.Developer`);
        const mpartner = await db.get(`users.${mentionedMember.id}.Partner`);
        const mcontributor = await db.get(`users.${mentionedMember.id}.Contributer`);
        const mhunter = await db.get(`users.${mentionedMember.id}.BugHunter`);
        const mstaff = await db.get(`users.${mentionedMember.id}.Staff`);
        const mboosters = await db.get(`users.${mentionedMember.id}.Boosters`);

        // Variables
        const then1 = moment(mentionedMember.user.createdAt);
        const time1 = then1.from(moment());
        const ca1 = then1.format("MMM Do, YYYY");

        const emm = new Discord.MessageEmbed()
        emm.setAuthor(mentionedMember.user.username, mentionedMember.user.avatarURL())
        emm.setTitle(`${mentionedMember.user.username}'s Profile`)
        emm.setDescription(`Displaying <@${mentionedMember.id}>'s Profile`)
        emm.addField('❯ <:discord:778200180205158410> | User Information', (`
          <:user:777889680879648769> | Username: ${mentionedMember.user.tag}\n<:userid:777889681098407966> | User ID: ${mentionedMember.id}\n<:arrow:777889681114267668> | Created: ${ca1} (${time1})
      `))
        emm.addField(`❯ | SourCream Bot Badges`, (`
      <:developer:798526185499525171> | Developer: ${mdeveloper || '❌'}\n<:Partnership:798526185466363904> | Partnership: ${mpartner || '❌'}\n<:Contributor:798526185549856779> | Contributor: ${mcontributor || '❌'}\n<:BugHunter:798526185310650419> | BugHunter: ${mhunter || '❌'}\n<:StaffMembers:798526185482879026> | Staff: ${mstaff || '❌'}\n<:NitroBooster:798526185440411648> | Boosters: ${mboosters || '❌'}
      `), true)
              if (mentionedMember) return message.channel.send(emm)

  }
}