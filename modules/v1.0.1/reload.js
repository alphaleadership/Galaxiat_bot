const path = require('path');
const fs = require('fs');
/////////////////////////reload
directorys = [path.join(__dirname, '../../lang/'), path.join(__dirname, '../'), path.join(__dirname, './')];
directorys.forEach(function (directory) {
    fs.readdir(directory, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            if (fs.statSync(directory + file).isFile()) {
                delete require.cache[require.resolve(directory + file)];
                console.log(directory + file + ' reloaded 1');
            } else {
                console.log(directory + file);
                fs.readdir(directory + file, function (err, subfiles) {
                    //handling error
                    console.log("reloaded 2");
                    if (err) {
                        return console.log('Unable to scan directory: ' + err);
                    }
                    //listing all files using forEach
                    subfiles.forEach(function (subfiles) {
                        console.log("reloaded 3");
                        // Do whatever you want to do with the file
                        //directory + file + subfiles
                        delete require.cache[require.resolve(directory + file+"/" + subfiles)];
                        console.log(directory + file+ "/"+subfiles+ ' reloaded 2');
                    });
                });
            }
        });
    });
});

