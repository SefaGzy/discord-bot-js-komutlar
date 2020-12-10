const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message) => {
  name: 'avatar',
  description: 'kedileri gösterir.',
  usage: 'avatar',

message.channel.send({embed: {
            color: 0xD97634,
            "image": {
            "url": message.mentions.users.first() ? message.mentions.users.first().avatarURL() : message.author.avatarURL(),
                }
        }});
};
