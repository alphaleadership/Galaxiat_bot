core = require('../main/core.js');
module.exports = {
    log: function (bot, msg, args) {
        if (args[1] == "request") {
            if (args[2]) {
                file = "../../log_" + args[2] + ".json";
                if (core.check_exist(file)) {
                    core.upload_to_discord(msg.channel, file)
                }
            }
        }
        else 
        {
            msg.send('');
        }
    }
}