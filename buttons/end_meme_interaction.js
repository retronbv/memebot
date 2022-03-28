const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
const fetch = require("node-fetch");
async function run(inter) {
  await fetch("https://meme-api.herokuapp.com/gimme").then(async (meme)=>{return await meme.json()}).then(async (meme)=>{
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('next_meme')
					.setLabel('Next Meme')
          .setEmoji('➡️')
          .setDisabled(true)
					.setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId("end_meme_interaction")
          .setLabel("End Interaction")
          .setEmoji("🛑")
          .setDisabled(true)
          .setStyle("DANGER"),
        new MessageButton()
          .setStyle("LINK")
          .setLabel("View Post")
          .setURL(meme.postLink)
        .setDisabled(true)
			);
    //console.log(inter)
    await inter.update({embeds:inter.message.embeds,components:[row]})
  })
}

command = run
module.exports = command
