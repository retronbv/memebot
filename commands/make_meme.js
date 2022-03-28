const { Builders } = require("beeptools")
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const memer = require("../common/meme.js");
const memebtns = require("../common/memebtns.js");
const membeds = require("../common/membeds.js");
const fetch = require("node-fetch");
function encodeTEXT(text) {
  return encodeURI(text.replace("?","~q").replace("&","~a").replace("%","~p").replace("#","~h").replace("/","~s").replace("\\","~b").replace("<","~l").replace(">","~g").replace("\"","''"))
}
async function help(inter) {
  // https://api.memegen.link/images/ugandanknuck/~hspecial_characters~q/underscore__-dash--.png
  const ymlUrl = "https://api.memegen.link/templates/"+inter.options.getString('template')
  fetch(ymlUrl).then((yml)=>{return yml.json()}).then(async(json)=>{
    if (json["lines"]==2) {
      if (inter.options.getString("text_bottom")==null) {
        inter.reply({content:"Put bottom text if you are gonna use a 2 textbox meme",ephemeral:true})
        return;
        
      }
      let memeurl = `https://api.memegen.link/images/${inter.options.getString('template')}/${encodeTEXT(inter.options.getString("text"))}/${encodeTEXT(inter.options.getString("text_bottom"))}.png`
      const exampleEmbed = new MessageEmbed()
      	.setColor('#0099ff')
      	.setTitle(`Here is your meme!`)
        .setImage(memeurl)
      	.setDescription(`Meme from ${inter.user.tag}`)
        .setFooter({text:`#${inter.channel.name}`})
      	.setTimestamp()
      await inter.reply({embeds:[exampleEmbed]})
    } else if (json["lines"]==1) {
      let memeurl = `https://api.memegen.link/images/${inter.options.getString('template')}/${encodeTEXT(inter.options.getString("text"))}.png`
      const exampleEmbed = new MessageEmbed()
      	.setColor('#0099ff')
      	.setTitle(`Here is your meme!`)
        .setImage(memeurl)
      	.setDescription(`Meme from ${inter.user.tag}`)
        .setFooter({text:`#${inter.channel.name}`})
      	.setTimestamp()
      await inter.reply({embeds:[exampleEmbed]})
    }
  })
  
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
      .addChoice('Zero Wing', 'zero-wing')
      .addChoice('Ugandan Knuckles (2)', "ugandanknuck")
      .addChouce("Afraid to Ask Andy (2)","afraid"))
  .addStringOption(option=>
    option.setName("text")
      .setDescription("The meme text (will be top if there is 2 text spaces)")
      .setRequired(true))
  .addStringOption(option=>
    option.setName("text_bottom")
      .setDescription("The bottom text (only for templates with (2))"))
command = {
  meta:data,
  run:help
}
module.exports = command
