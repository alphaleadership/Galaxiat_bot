const Discord = require('discord.js');
const fs = require('fs');
var mkdirp = require('mkdirp');
const emoji = require('../../lang/emoji.js');
const core = require('../main/core.js')
const version_select = require('../main/version_select.js');
const security = require('../main/security.js')
module.exports = {
    enable: function (command) {
        if (!command) {
            enable = true;
            return enable;
        }
    },
    warn: function (bot, msg, args) {
        langue = core.read_json(__dirname + "/../../db/" + msg.guild.id + "/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        console.log(args.length)
        if (args.length > 2) {
            guild_id = msg.guild.id;
            moderator_id = msg.author.id;
            type = "warn";
            offender = core.getUserFromMention(bot, args[1]);
            boss = security.check_who_boss(bot, msg.guild, msg.author, offender);
            if (boss == 1) {


                args.splice(0, 1);
                args.splice(0, 1);
                offence = "";
                args.forEach(arg => {
                    offence = offence + arg + " "
                })
                core.add_moderation_log(guild_id, offender.id, type, moderator_id, offence)

                const warn = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(emoji.alert + 'warn' + emoji.alert)
                    //.setURL('https://galaxiat.com')
                    .setAuthor(offender.username + "#" + offender.discriminator, offender.avatarURL())
                    //.setDescription('Some here')
                    .addField(lang.lang12 + ' :', '<@' + moderator_id + '>', false)
                    .addField(lang.lang13 + ': ', offence, false)
                    //.addField('2'+guild_settings_enable + 'guild settings', lang.help2, false)
                    //.setTimestamp()

                    //.addField("support servers", invite.url, false)
                    .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());
                msg.channel.send(warn);
            } else if (boss == 2 || boss == 0) {
                msg.channel.send(emoji.tickred + lang.lang2 + emoji.tickred);
            } else if (boss == 5) {
                msg.channel.send(emoji.tickred + lang.lang16 + emoji.tickred);
            } else if (boss == 4) {
                msg.channel.send(emoji.tickred + lang.lang17 + emoji.tickred);
            } else if (boss == 3) {
                msg.channel.send(emoji.tickred + lang.error + emoji.tickred);
            }

        } else if (args[1]) {
            msg.channel.send(emoji.tickred + lang.lang14 + emoji.tickred);
        } else {
            msg.channel.send(emoji.tickred + lang.lang15 + emoji.tickred);
        }
    },
    list_mod_log: function (bot, msg, args) {
        langue = core.read_json(__dirname + "/../../db/" + msg.guild.id + "/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        if (!args[1]) {
            args[1] = "<@" + msg.author.id + ">"
        }
        offender = core.getUserFromMention(bot, args[1]);
        mod_logs = core.list_moderation_log(msg.guild.id, offender.id)
        list = [];
        a = 1;
        b = 0;
        list[b] = "";
        mod_logs.forEach(mod_log => {
            if (list[b].length > 255 - mod_log.length) {
                b++
                list[b] = "";
            }
            if (list[b].length <= 255 - mod_log.length) {
                list[b] = list[b] + a + " : " + mod_log[0] + " <@" + mod_log[1] + ">" + " " + mod_log[2] + "\n"
                a++
            }
        })
        if(list[b] == "")
        {
            list[b] = lang.empty;
        }

        const list_msg = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(emoji.alert + 'warn' + emoji.alert)
            //.setURL('https://galaxiat.com')
            .setAuthor(offender.username + "#" + offender.discriminator, offender.avatarURL())
        //
        b = 0
        list.forEach(list_msgpart => {
            b++
            list_msg.addField("List " + b + ":" , list_msgpart)
        })

        //.setDescription(list1)
        //.addField(lang.lang13 + ': ', offence, false)
        //.addField('2'+guild_settings_enable + 'guild settings', lang.help2, false)
        //.setTimestamp()

        //.addField("support servers", invite.url, false)
        list_msg.setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());
        msg.channel.send(list_msg);
    },
    rm_mod_log: function (bot, msg, args) {
        langue = core.read_json(__dirname + "/../../db/" + msg.guild.id + "/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        if (!args[1]) {
            msg.channel.send(emoji.tickred + lang.lang15 + emoji.tickred);
            return;
        }
        if (!args[2]) {
            args[2] = args[1]
            args[1] = "<@" + msg.author.id + ">"
        }
        //console.log(core.getUserFromMention(bot,args[1]))
        if (args[2] == "all") {
            if (core.purge_moderation_log(msg.guild.id, core.getUserFromMention(bot, args[1]).id)) {
                msg.channel.send(emoji.tickgreen + lang.lang18 + emoji.tickgreen);
                return;
            } else {
                msg.channel.send(emoji.tickred + lang.error + emoji.tickred);
            }
        } else {
            if (core.rm_moderation_log(msg.guild.id, core.getUserFromMention(bot, args[1]).id, args[2])) {
                msg.channel.send(emoji.tickgreen + lang.lang18 + emoji.tickgreen);
                return;
            } else {
                msg.channel.send(emoji.tickred + lang.error + emoji.tickred);
            }
        }


    },
    kick: function (bot, msg, args) {
        langue = core.read_json(__dirname + "/../../db/" + msg.guild.id + "/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        console.log(args.length)
        if (args.length == 2)
        {
            args[2] = " "
        }
        if (args.length > 2) {
            guild_id = msg.guild.id;
            moderator_id = msg.author.id;
            type = "kick";
            offender = core.getUserFromMention(bot, args[1]);
            boss = security.check_who_boss(bot, msg.guild, msg.author, offender);
            whaticando = security.check_who_boss(bot, msg.guild, msg.bot, offender);
            if (boss == 1) {


                args.splice(0, 1);
                args.splice(0, 1);
                offence = "";
                args.forEach(arg => {
                    offence = offence + arg + " "
                })
                core.add_moderation_log(guild_id, offender.id, type, moderator_id, offence)

                const kick = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(emoji.alert + 'warn' + emoji.alert)
                    //.setURL('https://galaxiat.com')
                    .setAuthor(offender.username + "#" + offender.discriminator, offender.avatarURL())
                    //.setDescription('Some here')
                    .addField(lang.lang12 + ' :', '<@' + moderator_id + '>', false)
                    .addField(lang.lang13 + ': ', offence, false)
                    //.addField('2'+guild_settings_enable + 'guild settings', lang.help2, false)
                    //.setTimestamp()

                    //.addField("support servers", invite.url, false)
                    .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());
                msg.channel.send(kick);
                offender.kick()
            } else if (boss == 2 || boss == 0) {
                msg.channel.send(emoji.tickred + lang.lang2 + emoji.tickred);
            } else if (boss == 5) {
                msg.channel.send(emoji.tickred + lang.lang16 + emoji.tickred);
            } else if (boss == 4) {
                msg.channel.send(emoji.tickred + lang.lang17 + emoji.tickred);
            } else if (boss == 3) {
                msg.channel.send(emoji.tickred + lang.error + emoji.tickred);
            }

        } else {
            msg.channel.send(emoji.tickred + lang.lang15 + emoji.tickred);
        }
    },

}