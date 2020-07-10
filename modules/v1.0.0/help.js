const Discord = require('discord.js');
const fs = require('fs');
var mkdirp = require('mkdirp');
const emoji = require('../../lang/emoji.js');
const bot_infos = require('./bot_infos.js');
const guild_settings = require('./guild_settings.js');
const settings = require('../../settings.js');
const version_select = require('../main/version_select.js')
module.exports = {
    enable: function (command) {
        if (!command) {
            enable = true;
            return enable;
        }
    },
    help: function (bot, msg, args) {
        core.create_log("info", "help requested")
        langue = core.read_json(__dirname+"/../../db/"+msg.guild.id+"/guild_settings.json").lang;
        lang = require('../../lang/' + langue + '.js');
        ///check enabled modules
        if (bot_infos.enable())
        {
            bot_infos_enable = emoji.online;
        }
        else 
        {
            bot_infos_enable = emoji.offline;
        }
        if (guild_settings.enable())
        {
            guild_settings_enable = emoji.online;
        }
        else
        {
            guild_settings_enable = emoji.offline;
        }
        //invite =  core.create_invite(bot, settings.support_servers_channel_id)
        //console.log(invite.url)
        
        //help_message = ":tools: Help :tools:";
        let invite = channel.createInvite({maxAge: 0,},)
        .then(invite => {
            const help_message = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':tools: help :tools:')
            //.setURL('https://galaxiat.com')
            .setAuthor(bot.user.username + "#"+bot.user.discriminator, bot.user.avatarURL())
            //.setDescription('Some here')
            .addField('Modules :','help [module]' , false)
            .addField(bot_infos_enable+'bot infos',lang.help1 , false)
            .addField(guild_settings_enable+'guild settings',lang.help2 , false)
            //.setTimestamp()
            
            .addField("support servers", invite.url, false)
            .setFooter(version_select.read_version(msg.guild.id), bot.user.avatarURL());
            
            msg.channel.send(help_message)})
        
    }
    
}