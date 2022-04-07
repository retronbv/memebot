const { Builders } = require("beeptools")
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const memebtns = require("../common/memebtns.js");
const membeds = require("../common/membeds.js");
const memer = require("../common/meme.js");
const fetch = require("node-fetch");
async function help(inter) {
  await inter.deferReply();
  while (true) {
    meme = await memer.generate()
    if (meme.nsfw === false) {
      msg = {embeds:[membeds.generate(inter,meme)],components:[memebtns.generate(meme,"slsh_cmd")]}
      await inter.editReply(msg);
      break;
    } else {
      console.log("boi nsfw "+meme.nsfw)
    }
  }
}

const data = new SlashCommandBuilder()
	.setName('meme')
	.setDescription('Gets a meme!')
command = {
  meta:data,
  run:help
}
module.exports = command
