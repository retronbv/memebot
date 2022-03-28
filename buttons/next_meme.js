const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const fetch = require("node-fetch");
const memer = require("../common/meme.js")
const memebtns = require("../common/memebtns.js")
const membeds = require("../common/membeds.js")
async function run(inter) {
  memer.generate().then(async (meme)=>{
    //console.log(meme)
    await inter.update({embeds:[membeds.generate(inter,meme)],components:[memebtns.generate(meme,"btn_nxt_meme")]})
  })
}

command = run
module.exports = command
