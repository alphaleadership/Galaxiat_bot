//const redirector = require("./modules/v1.0.0/redirector.js");

//cache = require("./cache.js")
core = require("./modules/main/core.js");
cache = require('./cache.js');

//bot = index.bot;
cache.bot.on('message', msg => {
    guild_dir = './db/' + msg.guild.id;
    core.create_dir(guild_dir);
    version = '1.0.0';
    redirector = require('./modules/v' + version+'/redirector.js');
    redirector.find_command(bot, msg);
});