const core = require('../modules/main/core.js')
test = 2
if (test == 0)
{
    guild_id = "guild_id";
    moderator_id = "author_id";
    offender_id = "offender_id";
    offence = "message sss";
    type = "warn"
    core.add_moderation_log(guild_id, offender_id, type,moderator_id, offence)
}
if (test == 1)
{
    guild_id = "guild_id";
    offender_id = "offender_id";
    id = 2;
    core.rm_moderation_log(guild_id, offender_id, id)
}
if (test == 2)
{
    guild_id = "guild_id";
    offender_id = "offender_id";
    lists = core.list_moderation_log(guild_id, offender_id)
    lists.forEach(list => {
        console.log(list[0], list[1], list[2])
    }
        );
    
}
