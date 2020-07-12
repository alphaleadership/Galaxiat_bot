//////
const settings = require('../../settings.js');
const emoji = require('../../lang/emoji.js');
//////////////////////import owner modules//////
const owner = require('../main/owner.js');
//////////////////////import modules/////////////
const bot_infos = require('./bot_infos.js');
const guild_settings = require('./guild_settings.js');
const help = require('./help.js');
const moderation = require('./moderation.js');


module.exports = {
    find_command: function (bot, msg, args) {
        langue = core.read_json(__dirname + "/../../db/" + msg.guild.id + "/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        file = __dirname + "/../../db/" + msg.guild.id + "/guild_settings.json";
        prefix = core.read_json(file).prefix;


        if (args[0] == prefix + "reload") {
            //console.log(settings.owner_id.includes(msg.author.id));
            if (settings.owner_id.includes(msg.author.id)) {
                owner.reload(bot, msg, args);
            } else {
                msg.channel.send(emoji.tickred + " " + lang.lang2);
            }
        }
        if (args[0] == prefix + "log") {
            //console.log(settings.owner_id.includes(msg.author.id));
            if (settings.owner_id.includes(msg.author.id)) {
                owner.log(bot, msg, args);
            } else {
                msg.channel.send(emoji.tickred + " " + lang.lang2);
            }
        }
        if (help.enable()) {
            if (args[0] == prefix + "help") {
                help.help(bot, msg, args)
            }
        }
        if (bot_infos.enable()) {

            if (args[0] == prefix + "ping") {
                bot_infos.ping(bot, msg);
            }

        }
        if (moderation.enable()) {
            if (args[0] == prefix + "warn") {
                if (msg.member.hasPermission("KICK_MEMBERS")) {
                    //console.log(settings.owner_id.includes(msg.author.id));
                    moderation.warn(bot, msg, args);
                } else {
                    msg.channel.send(emoji.tickred + lang.lang2 + emoji.tickred);
                }
            }
            if (args[0] == prefix + "kick") {
                if (msg.member.hasPermission("KICK_MEMBERS")) {
                    //console.log(settings.owner_id.includes(msg.author.id));
                    moderation.kick(bot, msg, args);
                } else {
                    msg.channel.send(emoji.tickred + lang.lang2 + emoji.tickred);
                }
            }
            if (args[0] == prefix + "delmod") {
                if (msg.member.hasPermission("KICK_MEMBERS")) {
                    //console.log(settings.owner_id.includes(msg.author.id));
                    moderation.rm_mod_log(bot, msg, args);
                } else {
                    msg.channel.send(emoji.tickred + lang.lang2 + emoji.tickred);
                }
            }
            if(args[0] == prefix + "listmod")
            {
                moderation.list_mod_log(bot, msg, args);
            }
        }
        if (args[0] == prefix + "set") {
            if (guild_settings.enable()) {
                if (msg.member.hasPermission("ADMINISTRATOR")) {
                    if (args[1] == "lang") {
                        guild_settings.set_lang(bot, msg, args);
                    }
                    if (args[1] == "version") {
                        guild_settings.select_version(bot, msg, args);
                    }
                    if (args[1] == "prefix") {
                        guild_settings.set_prefix(bot, msg, args);
                    }
                } else {
                    msg.channel.send(emoji.tickred + lang.lang2 + emoji.tickred);
                }
            }
        }

    }
}