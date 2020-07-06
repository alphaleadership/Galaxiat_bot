////////////////begin dependency///////////////

///////////////end dependency////////////

module.exports = {
    create_dir : function (dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, 0766, function (err) {
                if (err) {
                    console.log(err);
                    // echo the result back
                    response.send("ERROR! Can't make the directory! \n");
                }
            });
        }
    }
}