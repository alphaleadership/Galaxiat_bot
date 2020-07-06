const Discord = require('discord.js');
const fs = require('fs');
const settings = require('../../settings.js');
const cache = require('../../cache.js');
var mkdirp = require('mkdirp');

module.exports = {

    create_dir: function (dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, 0766, function (err) {
                if (err) {
                    console.log(err);
                    // echo the result back
                    response.send("ERROR! Can't make the directory! \n");
                }
            });
        }
    },
    purge_json: function (file) {
        json = {};
        dat = JSON.stringify(json, null, 2);
        fs.writeFileSync(file, dat);
    },
    write_json: function (file, set, value) {
        if (this.check_exist(file)) {
            jsonraw = fs.readFileSync(file); // define json file
            json = JSON.parse(jsonraw); //convert raw to json node readeable
            //console.log(json);
        }
        else {
            json = {};
        }
        json[set] = value;

        dat = JSON.stringify(json, null, 2);
        fs.writeFileSync(file, dat);

    },
    read_json: function (file) {
        jsonraw = fs.readFileSync(file);
        json = JSON.parse(jsonraw);
        return json;

        //console.log(toread);
    },
    check_exist: function(file) {
        if (fs.existsSync(file)) {
            return true;
        } else {
            return false;
        }
    },
    create_log : function(type, log){
        //log, warn, error, debug, info
        // log = action enrgistré 
        // debug = je met pour voir ou ca merde 
        // info = je met une info ex : nb d'écriture
        // warn = erreur mais qui bloque pas
        // error = erreur qui bloque
        channel = cache.bot.channels.cache.get(settings.bot_log_channel_id);
        channel.send(type + ' : ' +log);
        //channel = cache.bot.channels[settings.bot_log_channel_id].send(type + ' : ' +log);
        console[type](log);
    }
}