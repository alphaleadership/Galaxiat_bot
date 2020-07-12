const Discord = require('discord.js');
const fs = require('fs');
const settings = require('../../settings.js');
const cache = require('../../cache.js');
emoji = require("../../lang/emoji.js")
var mkdirp = require('mkdirp');
let date_ob = new Date();
module.exports = {
    check_role_pos: function (bot, guild, members) {
        console.log(guild.roles.cache);
        a = 0;
        guild.roles.cache.forEach(role => {
            if (guild.member(members.id).roles.highest.id == role.id) {
                return a;
            }
            a++
        });
    },
    check_who_boss: function (bot, guild, members1, members2) {
        if (members1.bot || members2.bot)
        {
            return 4;
        }
        if (members1.id != members2.id) {
            if (guild.owner.id == members1.id) {
                return 1;
            } else if (guild.owner.id == members2.id) {
                return 2;
            } else {
                members1_pos = this.check_role_pos(bot, guild, members1);
                members2_pos = this.check_role_pos(bot, guild, members2);
                if (members1_pos > members2_pos)
                {
                    return 1;
                }
                else if (members1_pos < members2_pos)
                {
                    return 2;
                }
                else if (members1_pos == members2_pos)
                {
                    return 0;
                }
                else 
                {
                    return 3;
                }
            }
        } else {
            return 5;
        }
    }
}