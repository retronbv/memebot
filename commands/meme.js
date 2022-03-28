const { Builders } = require("beeptools")
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require("node-fetch");
async function help(inter) {
  await fetch("https://meme-api.herokuapp.com/gimme").then(async (meme)=>{return await meme.json()}).then(async (meme)=>{
    //console.log(meme)
    const exampleEmbed = new MessageEmbed()
  	.setColor('#0099ff')
  	.setTitle(`r/${meme.subreddit}`)
    .setImage(meme.url)
  	.setDescription(`Meme from ${meme.author}`)
    .setFooter({text:`#${inter.channel.name}`})
  	.setTimestamp()
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('next_meme')
					.setLabel('Next Meme')
          .setEmoji('➡️')
					.setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId("end_meme_interaction")
          .setLabel("End Interaction")
          .setEmoji("🛑")
          .setDisabled(false)
          .setStyle("DANGER"),
        new MessageButton()
          .setStyle("LINK")
          .setLabel("View Post")
          .setURL(meme.postLink)
			);
    await inter.reply({embeds:[exampleEmbed],components:[row]})
  })
}

const data = new SlashCommandBuilder()
	.setName('meme')
	.setDescription('Gets a meme!')
command = {
  meta:data,
  run:help
}
module.exports = command
