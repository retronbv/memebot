const { Builders } = require("beeptools")
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const memer = require("../common/meme.js");
const memebtns = require("../common/memebtns.js");
const membeds = require("../common/membeds.js");
const fetch = require("node-fetch");
async function help(inter) {
  
  memer.generate().then(async (meme)=>{
    await inter.reply({embeds:[membeds.generate(inter,meme)],components:[memebtns.generate(meme,"slsh_cmd")]})
  })
    //console.log(meme)
}

const data = new SlashCommandBuilder()
	.setName('meme')
	.setDescription('Gets a meme!')
command = {
  meta:data,
  run:help
}
module.exports = command
