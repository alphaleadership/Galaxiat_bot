const settings = require('../../settings.js');
//////////////////////import owner modules//////
const owner = require('../main/owner.js');
//////////////////////import modules/////////////
const bot_infos = require('./bot_infos.js');
module.exports = {
    find_command: function (bot, msg, args) {
        if (msg.author.id == settings.owner_id) {
            if (args[0] == "log") {
                
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
    }
}