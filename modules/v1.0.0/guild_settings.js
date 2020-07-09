// set lang
// notification 
const core = require('../main/core.js');
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
            file = 
            core.write_json("");
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
                    stable = "stable";
                    stable_emote = emoji.online;
                }

                version_list = version_list + "\n" + stable_emote + version + "  : status =  " + stable + "  :  " + branchs[a];
                a++
            });
            const version_list = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':tools: Help :tools:')
            .setURL('https://galaxiat.com')
            .setAuthor(msg.author.username + "#"+msg.author.discriminator, msg.author.avatarURL, 'https://galaxiat.com')
            .setDescription('Some here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addField('Inline field title', 'Some value here', false)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

            //help_message = ":tools: Help :tools:";

            msg.channel.send(help_message);
            msg.channel.send(version_list)

        }
    },
    set_lang: function (bot, msg, args) {

    }
}