//const redirector = require("./modules/v1.0.0/redirector.js");




//edirector = require("./modules/v1.0.0/redirector.js");

//cache = require("./cache.js")
const core = require("./modules/main/core.js");
const version_select = require("./modules/main/version_select.js");
cache = require('./cache.js');
const infos = require('./infos.js');
const settings = require('./settings.js');
const emoji = require('./lang/emoji.js');
//bot = index.bot;
cache.bot.on('message', msg => {
    if (msg.author.bot) {
        return;
    }
    if (msg.guild == null) {
        return;
    }
    guild_dir = './db/' + msg.guild.id;
    core.create_dir(guild_dir);

    file = __dirname + "/db/" + msg.guild.id + "/guild_settings.json";
    if (!core.check_exist(file)) {
        core.write_json(file, "version", infos.lastest_version_stable);
        core.write_json(file, "lang", settings.lang_default);
        core.write_json(file, "prefix", settings.prefix_default);
    }
    else {
        if (core.read_json(file).version == null)
        {
            core.write_json(file, "version", infos.lastest_version_stable);
        }
        if (core.read_json(file).lang == null)
        {
            core.write_json(file, "lang", settings.lang_default);
        }
        if (core.read_json(file).prefix == null)
        {
            core.write_json(file, "prefix", settings.prefix_default);
        }
    }
    langue = core.read_json(__dirname + "/db/" + msg.guild.id + "/guild_settings.json").lang;
    lang = require('./lang/' + langue + '.js');
    version = version_select.read_version(msg.guild.id)
    desc = require('./modules/' + version + '/desc.js');


    if (desc.end_of_support() < core.get_little_date() && !core.read_json(file)[version]) {
        channel = msg.guild.owner.send(emoji.alert + lang.lang9 + emoji.alert);
        core.write_json(file, version, true);

    }
    console.log(desc.end_of_support() < core.get_little_date())
    console.log(desc.end_of_support())
    console.log(core.get_little_date())
    redirector = require('./modules/' + version + '/redirector.js');
    args = msg.content.split(" ");
    try {
        redirector.find_command(cache.bot, msg, args);
    } catch (e) {
        console.log("begin error report");
        core.create_log("error", e)
        console.log("ending error report ");
    }


});