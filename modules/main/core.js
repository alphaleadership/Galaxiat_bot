const Discord = require('discord.js');
const fs = require('fs');
const settings = require('../../settings.js');
const cache = require('../../cache.js');
emoji = require("../../lang/emoji.js")
var mkdirp = require('mkdirp');
let date_ob = new Date();
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
    delete_file: function (file) {
        if (this.check_exist(file)) {
            fs.unlinkSync(file);
            //console.log(json);
        }
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
    upload_to_discord: function(channel, file)
    {
        const attachment = new Discord.MessageAttachment(file);
        // Send the attachment in the message channel
        channel.send(emoji.loading+"uploading"+emoji.loading)
           .then((msg) => {
            channel.send(attachment);
            msg.edit(emoji.tickgreen+"uploading"+emoji.tickgreen);
            }, 1000);  
        
    },
    get_little_date :function()
    {
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
    
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
        // current year
        let year = date_ob.getFullYear();
        return year + "-" + month + "-" + date;
    },
    get_date : function()
    {
        let date_ob = new Date();

        // current date
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // current hours
        let hours = date_ob.getHours();

        // current minutes
        let minutes = date_ob.getMinutes();

        // current seconds
        let seconds = date_ob.getSeconds();

        let miliseconds = date_ob.getMilliseconds();
        // prints date in YYYY-MM-DD format
        //console.log(year + "-" + month + "-" + date);

        // prints date & time in YYYY-MM-DD HH:MM:SS format
        //console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds +":"+ miliseconds);

        // prints time in HH:MM format
        //console.log(hours + ":" + minutes);
        return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds +":"+ miliseconds;
    },
    getUserFromMention : function(bot, mention) {
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
    
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return bot.users.cache.get(mention);
        }
    },
    add_moderation_log : function(guild_id, offender_id,type, moderator_id,offence)
    {
        file = __dirname+"/../../db/"+guild_id+"/guild_mod_log.json";
        if (this.check_exist(file))
        {
            if (this.read_json(file)[offender_id])
            {
                //length = this.read_json(file)[offender_id].length()
                //console.log(this.read_json(file)[offender_id])
                array = this.read_json(file)[offender_id]
                //length = array.length;
                array.push([type,moderator_id, offence]);
                //console.log(array);
                this.write_json(file, offender_id,array)

            }
            else
            {
                this.write_json(file, offender_id, [[type, moderator_id, offence]])
            }
        }
        else
        {
            this.write_json(file, offender_id,[[type, moderator_id, offence]])
        }
        
    },
    purge_moderation_log : function(guild_id, offender_id)
    {
        file = __dirname+"/../../db/"+guild_id+"/guild_mod_log.json";
        if (this.check_exist(file))
        {
            if (this.read_json(file)[offender_id])
            {
                //length = this.read_json(file)[offender_id].length()
                //console.log(this.read_json(file)[offender_id])
                //array = this.read_json(file)[offender_id]
                //length = array.length;
                array = ([]);
                //console.log(array);
                this.write_json(file, offender_id,array)
                return true;

            }
            else
            {
                this.write_json(file, offender_id, [])
                return true;
            }
        }
        else
        {
            this.write_json(file, offender_id,[])
            return true;
        }
        
    },
    rm_moderation_log : function(guild_id, offender_id, id)
    {
        file = __dirname+"/../../db/"+guild_id+"/guild_mod_log.json";
        if (this.check_exist(file))
        {
            if (this.read_json(file)[offender_id])
            {
                //length = this.read_json(file)[offender_id].length()
                //console.log(this.read_json(file)[offender_id])
                try
                {
                id = id -1;
                array = this.read_json(file)[offender_id]
                //length = array.length;
                //array.push([moderator_id, offence]);
                array.splice(id, 1);
                //console.log(array);
                this.write_json(file, offender_id,array)
                return true;
                }
                catch(e){
                    this.create_log("error", e)
                    return false
                }
            }
            else 
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    },
    list_moderation_log : function(guild_id, offender_id)
    {
        file = __dirname+"/../../db/"+guild_id+"/guild_mod_log.json";
        if (this.check_exist(file))
        {
            if (this.read_json(file)[offender_id])
            {
                //length = this.read_json(file)[offender_id].length()
                //console.log(this.read_json(file)[offender_id])
                array = this.read_json(file)[offender_id]
                //length = array.length;
                //array.push([moderator_id, offence]);
                return array;
            }
            else 
            {
                return false;
            }
        }
        else
        {
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
        this.write_json(__dirname+"/../../log/log_ALL.json",this.get_date(), type +" : "+ log);
        this.write_json(__dirname+"/../../log/log_"+type+".json", this.get_date(), ''+log);
    }
}