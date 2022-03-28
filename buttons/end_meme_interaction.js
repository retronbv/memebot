const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const fetch = require("node-fetch");
const memer = require("../common/meme.js")
const memebtns = require("../common/memebtns.js")
async function run(inter) {
  memer.generate().then(async (meme)=>{
    await inter.update({embeds:inter.message.embeds,components:[memebtns.generate(meme,"btn_end_inter")]})
  })
}

command = run
module.exports = command
