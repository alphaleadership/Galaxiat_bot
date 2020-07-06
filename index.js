/////////////begin import dependency//////////////
//require("./modules/main/dependency.js");
const core = require('./modules/main/core.js');
const Discord = require('discord.js');
const fs = require('fs');
cache = require('./cache.js');
var mkdirp = require('mkdirp');

require('dotenv').config();
//////////////end import dependency////////////

//////////////begin define varibles/////////////////
cache.bot = new Discord.Client();
DISCORD_TOKEN = process.env.DISCORD_TOKEN;





/////////////end define variables///////////////////

////////////begin heart//////////////////////////

cache.bot.on('ready', () => {
    console.log(`Logged in as ${cache.bot.user.tag}!`);
    require('./heart.js');
    

    //core.write_json("./cache.json", "bot", bot);
});

////////////end heart//////////////////////////

////////////////////begin start bot////////////////

try {
    console.log('discord_bot_starting');
    cache.bot.login(DISCORD_TOKEN);
} catch (e) {
    console.log("begin error report");
    console.log(e);
    console.log("ending error report ");
}

////////////////////end start bot////////////////