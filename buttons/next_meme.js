const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const fetch = require("node-fetch");
const memer = require("../common/meme.js")
const memebtns = require("../common/memebtns.js")
const membeds = require("../common/membeds.js")
async function run(inter) {
  while (true) {
    meme = await memer.generate()
    if (meme.nsfw === false) {
      msg = {embeds:[membeds.generate(inter,meme)],components:[memebtns.generate(meme,"btn_nxt_meme")]}
      await inter.update(msg);
      break;
    } else {
      console.log("boi nsfw "+meme.nsfw)
    }
  }
}

command = run
module.exports = command
