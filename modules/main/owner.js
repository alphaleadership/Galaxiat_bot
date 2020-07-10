const delay = require('delay');



emoji = require('../../lang/emoji.js');

core = require('../main/core.js');
module.exports = {
    reload :function (bot, msg, args)
    {
        delete require.cache[require.resolve('../../reload.js')];
        //msg.channel.send(emoji.tickgreen + "reload done"+emoji.tickgreen);
        require('../../reload.js');
        core.create_log("info","reload done");
        msg.channel.send(emoji.tickgreen + "reload done"+emoji.tickgreen);
    },
    log: function (bot, msg, args) {
        langue = core.read_json(__dirname+"/../../db/"+msg.guild.id+"/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        //core.create_log("info",args[2]);
        if (args[1] == "request") {
            if (args[2]) {
                file = __dirname + "/../../log/log_" + args[2] + ".json";
                if (core.check_exist(file)) {
                    core.upload_to_discord(msg.channel, file);
                } else if (args[2] == "allfile") {
                    file = __dirname + "/../../log/log_all.json";
                    if (core.check_exist(file)) {
                        core.upload_to_discord(msg.channel, file);
                    }
                    
                    delay(1000);
                    file = __dirname + "/../../log/log_log.json";
                    if (core.check_exist(file)) {
                        core.upload_to_discord(msg.channel, file);
                    }
                    delay(1000);
                    file = __dirname + "/../../log/log_debug.json";
                    if (core.check_exist(file)) {
                        core.upload_to_discord(msg.channel, file);
                    }
                    delay(1000);
                    file = __dirname + "/../../log/log_info.json";
                    if (core.check_exist(file)) {
                        core.upload_to_discord(msg.channel, file);
                    }
                    delay(1000);
                    file = __dirname + "/../../log/log_warn.json";
                    if (core.check_exist(file)) {
                        core.upload_to_discord(msg.channel, file);
                    }
                    delay(1000);
                    file = __dirname + "/../../log/log_error.json";
                    if (core.check_exist(file)) {
                        core.upload_to_discord(msg.channel, file);
                    }
                } else {
                    msg.channel.send(emoji.tickred + " " + lang.lang1 + " " + emoji.tickred);
                }
            }  else {
                msg.channel.send(emoji.tickred + " " + lang.lang3 + " " + emoji.tickred);
            }
            core.create_log("info","logs request done");
        } else if (args[1] == "purge") {
            if (args[2]) {
                file = __dirname + "/../../log/log_" + args[2] + ".json";
                if (core.check_exist(file)) {
                    core.purge_json(file);
                } else if (args[2] == "allfile") {
                    file = __dirname + "/../../log/log_all.json";
                    if (core.check_exist(file)) {
                        core.purge_json(file);
                    }
                    file = __dirname + "/../../log/log_log.json";
                    if (core.check_exist(file)) {
                        core.purge_json(file);
                    }
                    file = __dirname + "/../../log/log_debug.json";
                    if (core.check_exist(file)) {
                        core.purge_json(file);
                    }
                    file = __dirname + "/../../log/log_info.json";
                    if (core.check_exist(file)) {
                        core.purge_json(file);
                    }
                    file = __dirname + "/../../log/log_warn.json";
                    if (core.check_exist(file)) {
                        core.purge_json(file);
                    }
                    file = __dirname + "/../../log/log_error.json";
                    if (core.check_exist(file)) {
                        core.purge_json(file);
                    }

                } else {
                    msg.channel.send(emoji.tickred + " " + lang.lang1 + " " + emoji.tickred);
                }
            } else {
                msg.channel.send(emoji.tickred + " " + lang.lang3 + " " + emoji.tickred);
            }
            core.create_log("info","logs purge done");
        } else if (args[1] == "delete") {
            if (args[2]) {
                file = __dirname + "/../../log/log_" + args[2] + ".json";
                if (core.check_exist(file)) {
                    core.upload_to_discord(msg.channel, file);
                } else if (args[2] == "allfile") {
                    file = __dirname + "/../../log/log_all.json";
                    if (core.check_exist(file)) {
                        core.delete_file(file);
                    }
                    file = __dirname + "/../../log/log_log.json";
                    if (core.check_exist(file)) {
                        core.delete_file(file);
                    }
                    file = __dirname + "/../../log/log_debug.json";
                    if (core.check_exist(file)) {
                        core.delete_file(file);
                    }
                    file = __dirname + "/../../log/log_info.json";
                    if (core.check_exist(file)) {
                        core.delete_file(file);
                    }
                    file = __dirname + "/../../log/log_warn.json";
                    if (core.check_exist(file)) {
                        core.delete_file(file);
                    }
                    file = __dirname + "/../../log/log_error.json";
                    if (core.check_exist(file)) {
                        core.delete_file(file);
                    }

                }else {
                    msg.channel.send(emoji.tickred + " " + lang.lang1 + " " + emoji.tickred);
                }
            } else {
                msg.channel.send(emoji.tickred + " " + lang.lang3 + " " + emoji.tickred);
            }
            core.create_log("info","logs delete done");
        } else {
            msg.channel.send(emoji.tickred + " " + lang.lang4 + " " + emoji.tickred);
        }
    }
}