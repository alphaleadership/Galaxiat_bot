const bot_infos = require('./bot_infos.js');
module.exports = {
    find_command: function (bot, msg, args) {
        if (bot_infos.enable()) {
            if (args[0] == "help")
           {
                bot_infos.help(bot, msg, args);
            }
            if (args[0] == "ping") {
                bot_infos.ping(bot, msg);
            }
            
       }
    }
}