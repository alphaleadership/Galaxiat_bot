const Discord = require('discord.js');
const fs = require('fs');
var mkdirp = require('mkdirp');
module.exports = {
    enable: function (command) {
        if (!command) {
            enable = true;
            return enable;
        }
    },
    help: function (bot, msg, args) {
        const help_message = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':tools: Help :tools:')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addField('Inline field title', 'Some value here', false)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        //help_message = ":tools: Help :tools:";

        msg.channel.send(help_message);
    },
    //var ping = Date.now() - msg.createdTimestamp;
    ping: function (bot, msg) {
        ping = cache.bot.ws.ping;
        msg.reply('pong \n ' + ping);
        core.create_log('log', 'ping requested');
        if (ping < 100) {
            type = "info";
            quality = "very good : ";
        } else if (ping < 200) {
            type = "info";
            quality = "good : ";
        } else if (ping < 500) {
            type = "info";
            quality = "medium";
        } else if (ping < 1000) {
            type = "warn";
            quality = "bad :";
        } else if (ping < 2000) {
            type = "warn";
            quality = "very bad : ";
        } else {
            type = "error";
            quality = "warn !!! realy bad response time : ";
        }
        ping = ping + " ms";
        core.create_log(type, quality + ping);
    }
}