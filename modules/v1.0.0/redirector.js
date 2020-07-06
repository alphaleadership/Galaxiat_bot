const bot_info = require('./bot_infos.js');
module.exports = {
    find_command: function (bot, msg) {
        if (bot_info.enable) {
            if (msg.content == "ping") {
                bot_info.ping(bot, msg)
            }
        }
    }
}