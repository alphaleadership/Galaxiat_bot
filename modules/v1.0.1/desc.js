module.exports = {

    version : function ()
    {
        version = "1.0.1";
        return version;
    },
    visible : function ()
    {
        visible = true;
        return visible;
    },
    stable : function ()
    {
        stable = 1; // 0 : en dev / 1 : little bug / 2 : major bug / 3 : stable
        return stable;
    },
    lts : function()
    {
        lts = true;
        return lts;
    },
    lastest : function()
    {
        lastest = true;
        return lastest;
    },
    branch : function ()
    {
        branch = "release";
        return branch;
    }
}