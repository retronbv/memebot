const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const beeptools = require("beeptools")
beeptools.KeepAlive()
client.on('ready', async () => {
  client.user.setActivity('funny memes | '+client.guilds.cache.size+" servers", { type: 'WATCHING' });
    client.guilds.cache.forEach(guild => {
      guild.commands.cache.forEach(command=>{
        guild.commands.delete(command.id)
        console.log(`Deleted command ${command.name} (${command.id})`)
      })
    });
  client.guilds.cache.forEach(guild => {
    beeptools.RegisterSlash(process.env.TOKEN, guild.id, client.application.id, __dirname + "/commands")
  });
  console.log("im in :)")
});

client.on("guildCreate", guild => {
  client.guilds.cache.forEach(guild => {
      guild.commands.cache.forEach(command=>{
        guild.commands.delete(command.id)
        console.log(`Deleted command ${command.name} (${command.id})`)
      })
    });
  client.guilds.cache.forEach(guild => {
    beeptools.RegisterSlash(process.env.TOKEN, guild.id, client.application.id, __dirname + "/commands")
  });
  client.user.setActivity('funny memes | '+client.guilds.cache.size+" servers", { type: 'WATCHING' });
});

client.on('interactionCreate', async interaction => {
  if (interaction.isCommand()) {
    /*
    client.guilds.cache.forEach(guild => {
      beeptools.RegisterSlash(process.env.TOKEN, guild.id, client.application.id, __dirname + "/commands")
    });
    */
  }

  if (interaction.isButton()) {
    var cmd = require(__dirname + '/buttons/' + interaction.customId + '.js');
    cmd(interaction);
  }
  if (interaction.isCommand()) {
    var cmd = require(__dirname + '/commands/' + interaction.commandName + '.js').run;
    cmd(interaction);
  };
});
//client.on("error",console.log).on("warn",console.log).on("debug",console.log)
client.login(process.env.TOKEN).catch(console.error)
