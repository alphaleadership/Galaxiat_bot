module.exports = {

    end_of_support : function ()
    {
        end_of_support = "2020-08-08";
        return end_of_support;
    },
    visible : function ()
    {
        visible = true;
        return visible;
    },
    stable : function ()
    {
        stable = 0; // 0 : en dev / 1 : little bug / 2 : major bug / 3 : stable
        return stable;
    },
    lts : function()
    {
        lts = true;
        return lts;
    },
    branch : function ()
    {
        branch = "release";
        return branch;
    }
}