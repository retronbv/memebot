const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const fetch = require("node-fetch");
async function run(inter) {
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
    await inter.update({embeds:[exampleEmbed],components:[row]})
  })
}

command = run
module.exports = command
