const { Builders } = require("beeptools")
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const memer = require("../common/meme.js");
const memebtns = require("../common/memebtns.js");
const membeds = require("../common/membeds.js");
const fetch = require("node-fetch");
function encodeTEXT(text) {
  return encodeURI(text.replace("?","~q").replace("&","~a").replace("%","~p").replace("#","~h").replace("/","~s").replace("\\","~b").replace("<","~l").replace(">","~g").replace("\"","''").replace(" ","_"))
}
async function help(inter) {
  // https://api.memegen.link/images/ugandanknuck/~hspecial_characters~q/underscore__-dash--.png
  const memeurl = `https://api.memegen.link/images/${inter.options.getString('template')}/${encodeTEXT(inter.options.getString("text"))}.png`
  const exampleEmbed = new MessageEmbed()
  	.setColor('#0099ff')
  	.setTitle(`Here is your meme!`)
    .setImage(memeurl)
  	.setDescription(`Meme from ${inter.user.tag}`)
    .setFooter({text:`#${inter.channel.name}`})
  	.setTimestamp()
  await inter.reply({embeds:[exampleEmbed]})
    //console.log(meme)
}
/*
https://api.memegen.link/images/cmm.png
https://api.memegen.link/images/dragon.png
https://api.memegen.link/images/headaches.png
https://api.memegen.link/images/zero-wing.png
*/
const data = new SlashCommandBuilder()
	.setName('make_meme')
	.setDescription('Creates a meme!')
  .addStringOption(option =>
		option.setName('template')
			.setDescription('The meme template')
			.setRequired(true)
			.addChoice('Change My Mind', 'cmm')
			.addChoice('I want a dragon', 'dragon')
			.addChoice('Types of Headaches', 'headaches')
      .addChoice('Zero Wing', 'zero-wing'))
  .addStringOption(option=>
    option.setName("text")
      .setDescription("The meme text")
      .setRequired(true))
command = {
  meta:data,
  run:help
}
module.exports = command
