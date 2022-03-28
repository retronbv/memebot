const { Client, Intents } = require('discord.js');
const beeptools = require("beeptools")
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.on('ready', async () => {
    client.guilds.cache.forEach(guild => {
      guild.commands.cache.forEach(command=>{
        guild.commands.delete(command.id)
        console.log(`Deleted command ${command.name} (${command.id})`)
      })
    });
  client.guilds.cache.forEach(guild => {
    beeptools.RegisterSlash(process.env.TOKEN, guild.id, client.application.id, __dirname + "/commands")
  });
  console.log("done updating slash")
});
console.log("e")
client.login(process.env.TOKEN)
