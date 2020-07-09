// set lang
// notification 
core = require('../main/core.js');
const emoji = require('../../lang/emoji.js');

module.exports = {
    enable: function () {
        enable = true;
        return enable;
    },
    select_version: function (bot, msg, args) {
        const version_select = require('../main/version_select.js');
        langue = "fr";

        if (args[3]) {

        } else {
            var infos = version_select.list_version();
            //console.log("hest",infos.versions, infos.branchs,infos.stables);
            var versions = infos[0];
            var branchs = infos[1];
            var stables = infos[2];
            a = 0;
            console.log(versions,branchs, stable);
            version_list = "";
            versions.forEach(version =>
            {
                console.log(versions[a],branchs[a], stable[a]);
                if (stables[a] == "0") {
                    stable = "dev version";
                    stable_emote = emoji.offline;

                } else if (stables[a] == "1") {
                    stable = "little bug";
                    stable_emote = emoji.idle;
                } else if (stables[a] == "2") {
                    stable = "major bug";
                    stable_emote = emoji.dnd;
                } else if (stables[a] == "3") {
                    stable = "release";
                    stable_emote = emoji.online;
                }

                version_list = version_list + "\n" + stable_emote + version + "  :  " + stable + "  :  " + branchs[a];
                a++
            });
            msg.channel.send(version_list)

        }
    },
    set_lang: function (bot, msg, args) {

    }
}