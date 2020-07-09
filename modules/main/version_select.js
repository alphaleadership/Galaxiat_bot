const path = require('path');
const fs = require('fs');


/////////////////////////reload
module.exports = {
    list_version: function () {
        const versions = [];
        const branchs = [];
        const stable = [];
        const lts = [];
        const lastest = [];
        a = 0;
        directorys = [path.join(__dirname, '../')];
        directorys.forEach(function (directory) {
            //console.log(directory)
            main_dir = directory;
            fs.readdirSync(directory).forEach(file => {
            
                    //console.log(file)
                    // Do whatever you want to do with the file
                    if (fs.statSync(directory + file).isDirectory()) {
                        //console.log("toto")
                        fs.readdirSync(directory + file).forEach(subfile => {
                            //handling error
                            
                            
                                //console.log(subfile);
                                if (subfile == "desc.js") {
                                    desc = require(directory + file + '/' + subfile);
                                    if (desc.visible()) {

                                        versions[a] = file.toString();
                                        branchs[a] = desc.branch();
                                        stable[a] = desc.stable();
                                        lts[a] = desc.lts();
                                        lastest[a] = desc.lastest();
                                        //console.log(versions, branchs, stable);
                                        a++

                                    }

                                    //console.log(' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!import 1');
                                }
                            
                        });

                    }

                
                
                //return versions, branchs, stable;

            });

        });
        console.log(versions, branchs, stable);
                return [
                    versions,
                    branchs,
                    stable,
                    lts,
                    lastest
                   ];
        //console.log("befinfo : " + versions, branchs, stable);
        //

    },
    check_version: function (version, guild_id) {
        versions = this.list_version();
        if (versions.includes(version)) {
            return true;
        }
        return false;
    },
    set_version: function(version, guild_id) {

    }
}