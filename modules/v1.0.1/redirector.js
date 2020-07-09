//////
const settings = require('../../settings.js');
const emoji = require('../../lang/emoji.js');
//////////////////////import owner modules//////
const owner = require('../main/owner.js');
//////////////////////import modules/////////////
const bot_infos = require('./bot_infos.js');
const guild_settings = require('./guild_settings.js');


module.exports = {
    find_command: function (bot, msg, args) {
        langue = "fr"
        lang = require('../../lang/' + langue + '.js');
        if (args[0] == "reload") {
            //console.log(settings.owner_id.includes(msg.author.id));
            if (settings.owner_id.includes(msg.author.id)) {
                owner.reload(bot, msg, args);
            } else {
                msg.channel.send(emoji.tickred + " " + lang.lang2);
            }
        }
        if (args[0] == "log") {
            //console.log(settings.owner_id.includes(msg.author.id));
            if (settings.owner_id.includes(msg.author.id)) {
                owner.log(bot, msg, args);
            } else {
                msg.channel.send(emoji.tickred + " " + lang.lang2);
            }
        }
        if (bot_infos.enable()) {
            if (args[0] == "help") {
                bot_infos.help(bot, msg, args);
            }
            if (args[0] == "ping") {
                bot_infos.ping(bot, msg);
            }

        }
        if (args[0] == "set")
        {
            if (guild_settings.enable()) {
                if (msg.member.hasPermission("ADMINISTRATOR")) {
                    if (args[1] == "lang") {
                        guild_settings.set_lang(bot, msg, args);
                    }
                    if (args[1] == "version") {
                        guild_settings.select_version(bot, msg, args);
                    }
                }
                else 
                {
                    msg.channel.send(emoji.tickred+lang.lang2+emoji.tickred);
                }
            }
        }
        
    }
}