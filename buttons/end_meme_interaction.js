const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const fetch = require("node-fetch");
const memer = require("../common/meme.js")
const memebtns = require("../common/memebtns.js")
async function run(inter) {
  //console.log()
  await inter.update({embeds:inter.message.embeds,components:[memebtns.generate({postLink:inter.message.components[0].components[2].url},"btn_end_inter")]})
}

command = run
module.exports = command
