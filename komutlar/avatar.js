const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
			message.channel.send({embed: {
            color: 0xD97634,
            "image": {
            "url": message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL,
                }
        }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'kedileri gösterir.',
  usage: 'avatar'
};
