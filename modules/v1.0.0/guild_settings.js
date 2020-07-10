// set lang
// notification 
const Discord = require('discord.js');

const core = require('../main/core.js');
const emoji = require('../../lang/emoji.js');
const infos = require('../../infos.js');
module.exports = {
    enable: function () {
        enable = true;
        return enable;
    },
    select_version: function (bot, msg, args) {
        core.create_log("info", "set version requested")
        const version_select = require('../main/version_select.js');
        langue = this.read_lang(bot, msg, args);
        const lang = require("../../lang/"+langue+".js" )
        if (args[2]) {
            if (version_select.check_version(args[2]))
            {
                version_select.set_version(args[2], msg.guild.id);
                msg.channel.send(emoji.tickgreen + lang.lang6+emoji.tickgreen);
            }
            else {
                msg.channel.send(emoji.tickred + lang.lang5+emoji.tickred);
            }

        } else {
            var get = version_select.list_version();
            //console.log("hest",infos.versions, infos.branchs,infos.stables);
            var versions = get[0];
            var branchs = get[1];
            var stables = get[2];
            var lts = get[3];
            var end_of_supports = get[4];
            a = 0;
            version_list = "";
            versions.forEach(version =>
            {
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
                if (lts)
                {
                    long_term_support = " (lts)";
                }
                else 
                {
                    long_term_support = "";
                }
                
                version_list = version_list + "\n" + stable_emote +"``" +version  +"``"+long_term_support+"  \n status =  " + stable + " \n  " + branchs[a] +" expire : "+end_of_supports[a];
                a++
            });
            version_list = version_list + "\n" + emoji.online + "``lastest`` " + infos.lastest_version_stable ;
            file = __dirname+"/../../db/"+msg.guild.id+"/guild_settings.json";
            
            const version_lists = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':tools: versions :tools:')
            //.setURL('https://galaxiat.com')
            .setAuthor(bot.user.username + "#"+bot.user.discriminator, bot.user.avatarURL())
            //.setDescription('Some here')
            .addField('Versions', version_list, false)
            //.setTimestamp()
            .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());

            //help_message = ":tools: Help :tools:";

            msg.channel.send(version_lists);
            //msg.channel.send(version_list);

        }
    },
    set_lang: function (bot, msg, args) {
        core.create_log("info", "set lang requested")
        if(args[2])
        {
            if(infos.lang_avaliable.includes(args[2]))
            {
                core.write_json(__dirname+"/../../db/"+msg.guild.id+"/guild_settings.json", "lang", args[2]);
                langue = this.read_lang(bot, msg, args);
                lang = require('../../lang/'+langue+'.js');
                msg.channel.send(emoji.tickgreen + lang.lang8+emoji.tickgreen);
            }
            else 
            {
                msg.channel.send(emoji.tickred + lang.lang7+emoji.tickred);
            }
        }
        else
        {
            msg.channel.send(emoji.tickred + lang.lang7+emoji.tickred);
        }
    },
    read_lang:function(bot,msg, args)
    {
        return core.read_json(__dirname+"/../../db/"+msg.guild.id+"/guild_settings.json").lang;
    },
    set_prefix:function(bot,msg,args)
    {
        core.create_log("info", "set prefix requested")
        if(args[2])
        {
            core.write_json(__dirname+"/../../db/"+msg.guild.id+"/guild_settings.json", "prefix", args[2]);
            msg.channel.send(emoji.tickgreen + lang.lang11+emoji.tickgreen);
        }
        else
        {
            msg.channel.send(emoji.tickred + lang.lang10+emoji.tickred);
        }
    }
}