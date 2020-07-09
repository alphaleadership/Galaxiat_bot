//const redirector = require("./modules/v1.0.0/redirector.js");


//edirector = require("./modules/v1.0.0/redirector.js");

//cache = require("./cache.js")
core = require("./modules/main/core.js");
cache = require('./cache.js');

//bot = index.bot;
cache.bot.on('message', msg => {
    if(msg.author.bot)
    {
        return;
    }
    guild_dir = './db/' + msg.guild.id;
    core.create_dir(guild_dir);
    version = '1.0.0';
    redirector = require('./modules/v' + version+'/redirector.js');
    args = msg.content.split(" ");
    try
    {
    redirector.find_command(bot, msg, args);
    }
    catch (e) {
        console.log("begin error report");
        core.create_log("error", e)
        console.log("ending error report ");
    }

    
});