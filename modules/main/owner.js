const { Emoji } = require('discord.js');

emoji = require('../../lang/emoji.js');

core = require('../main/core.js');
module.exports = {
    log: function (bot, msg, args) {
        core.create_log("info",args[2]);
        if (args[1] == "request") {
            if (args[2]) {
                file = __dirname+"/../../log/log_" + args[2] + ".json";
                if (core.check_exist(file)) {
                    core.upload_to_discord(msg.channel, file);
                }
                else
                {
                    msg.channel.send('eeee ' + emoji.parteners);
                }
            }
            else 
            {
                msg.channel.send('eee');
            }
        }
        else 
        {
            msg.channel.send('ee');
        }
    }
}