# Command implemented 
## infos 
[arg] = required

(arg) = optional

## v1.0.0
module name :
+ moderation
    + ``warn [user mention] [raison]`` : warn a user
    + ``delmod (user mention) [nb to delete / all]`` : delete the mod log
    + ``listmod (user mention) : list the user warn``
    + ``kick [user mention] (raison)`` : kick a user
+ owner 
    + ``reload`` : reload the bot (only working if not heart.js change)
    + ``log [action] (args)``
        + ``[request] (type of log / all)`` : upload the log
        + ``[purge] (type of log / all)`` : purge the log
        + ``[delete] (type of log / all)`` : delete the log
+ bot info
    + ``ping`` : return the ping 
+ guild settings 
    + ``set [setting]``
        + ``[lang] [fr / en]`` : change the lang of the guild
        + ``[version] [version avaliable]`` : change the version of the bot
        + ``[prefix] [prefix to use]`` : change the prefix of the bot
+ help : 
    + ``help [module]`` : display the help message

```