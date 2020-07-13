const Discord = require('discord.js');
const fs = require('fs');
var mkdirp = require('mkdirp');
const emoji = require('../../lang/emoji.js');
const bot_infos = require('./bot_infos.js');
const guild_settings = require('./guild_settings.js');
const settings = require('../../settings.js');
const version_select = require('../main/version_select.js')
const moderation = require('./moderation.js')
module.exports = {
    enable: function (command) {
        if (!command) {
            enable = true;
            return enable;
        }
    },
    help: function (bot, msg, args) {
        file = __dirname + "/../../db/" + msg.guild.id + "/guild_settings.json";
        prefix = core.read_json(file).prefix;
        core.create_log("info", "help requested")
        langue = core.read_json(__dirname + "/../../db/" + msg.guild.id + "/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        ///check enabled modules
        if (!args[1]) {
            if (bot_infos.enable()) {
                bot_infos_enable = emoji.online;
            } else {
                bot_infos_enable = emoji.offline;
            }
            if (guild_settings.enable()) {
                guild_settings_enable = emoji.online;
            } else {
                guild_settings_enable = emoji.offline;
            }
            if (moderation.enable())
            {
                moderation_enable = emoji.online;
            } else {
                moderation_enable = emoji.offline;
            }
            
            //invite =  core.create_invite(bot, settings.support_servers_channel_id)
            //console.log(invite.url)

            //help_message = ":tools: Help :tools:";
            let invite = channel.createInvite({
                    maxAge: 0,
                }, )
                .then(invite => {
                    const help_message = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(':tools: help :tools:')
                        //.setURL('https://galaxiat.com')
                        .setAuthor(bot.user.username + "#" + bot.user.discriminator, bot.user.avatarURL())
                        //.setDescription('Some here')
                        .addField('Modules :', prefix+'help [moduleid] :ex '+prefix+'help 1', false)
                        .addField('1'+bot_infos_enable + 'bot infos', lang.help1, false)
                        .addField('2'+guild_settings_enable + 'guild settings', lang.help2, false)
                        .addField('3'+moderation_enable + 'guild settings', lang.help7, false)
                        //.setTimestamp()

                        .addField("support servers", invite.url, false)
                        .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());

                    msg.channel.send(help_message)
                })
        }
        else if (args[1] == "1") {
            if (bot_infos.enable()) {
                bot_infos_enable = emoji.online;
            } else {
                bot_infos_enable = emoji.offline + lang.disable_module;
            }
            //invite =  core.create_invite(bot, settings.support_servers_channel_id)
            //console.log(invite.url)

            //help_message = ":tools: Help :tools:";
            let invite = channel.createInvite({
                    maxAge: 0,
                }, )
                .then(invite => {
                    const help_message = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(':tools: help :tools:')
                        //.setURL('https://galaxiat.com')
                        .setAuthor(bot.user.username + "#" + bot.user.discriminator, bot.user.avatarURL())
                        //.setDescription('Some here')
                        .addField('Bot infos :', bot_infos_enable, false)
                        .addField(prefix + 'ping', lang.help3, false)
                        //.addField(prefix + '', lang.help2, false)
                        //.setTimestamp()

                        .addField("support servers", invite.url, false)
                        .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());

                    msg.channel.send(help_message)
                })
        }
        else if (args[1] == "2") {
            if (guild_settings.enable()) {
                guild_settings_enable = emoji.online;
            } else {
                guild_settings_enable = emoji.offline + lang.disable_module;
            }
            //invite =  core.create_invite(bot, settings.support_servers_channel_id)
            //console.log(invite.url)

            //help_message = ":tools: Help :tools:";
            let invite = channel.createInvite({
                    maxAge: 0,
                }, )
                .then(invite => {
                    const help_message = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(':tools: help :tools:')
                        //.setURL('https://galaxiat.com')
                        .setAuthor(bot.user.username + "#" + bot.user.discriminator, bot.user.avatarURL())
                        //.setDescription('Some here')
                        .addField('Guild settings :', bot_infos_enable, false)
                        .addField(prefix + 'set prefix [prefix]', lang.help4, false)
                        .addField(prefix + 'set lang [lang]', lang.help5, false)
                        .addField(prefix + 'set version [version]', lang.help6, false)
                        //.addField(prefix + '', lang.help2, false)
                        //.setTimestamp()

                        .addField("support servers", invite.url, false)
                        .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());

                    msg.channel.send(help_message)
                })
        }
        else if (args[1] == "3") {
            if (guild_settings.enable()) {
                guild_settings_enable = emoji.online;
            } else {
                guild_settings_enable = emoji.offline + lang.disable_module;
            }
            //invite =  core.create_invite(bot, settings.support_servers_channel_id)
            //console.log(invite.url)

            //help_message = ":tools: Help :tools:";
            let invite = channel.createInvite({
                    maxAge: 0,
                }, )
                .then(invite => {
                    const help_message = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(':tools: help :tools:')
                        //.setURL('https://galaxiat.com')
                        .setAuthor(bot.user.username + "#" + bot.user.discriminator, bot.user.avatarURL())
                        //.setDescription('Some here')
                        .addField('Guild settings :', bot_infos_enable, false)
                        .addField(prefix + 'warn [user mention] [reason]', lang.help8, false)
                        .addField(prefix + 'kick [user mention] (reason)', lang.help9, false)
                        .addField(prefix + 'listmod (user mention)', lang.help10, false)
                        .addField(prefix + 'delmod (user mention) [id from listmod/ all]', lang.help11, false)
                        //.addField(prefix + '', lang.help2, false)
                        //.setTimestamp()

                        .addField("support servers", invite.url, false)
                        .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());

                    msg.channel.send(help_message)
                })
        }
        
    }

}