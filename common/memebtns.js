const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
function membed(meme,inter) {
  switch (inter) {
    case "btn_end_inter":
      return new MessageActionRow()
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
          .setDisabled(true)
          .setURL(meme.postLink)
			);
      break;
    case "btn_nxt_meme":
      return new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('next_meme')
					.setLabel('Next Meme')
          .setEmoji('➡️')
          .setDisabled(false)
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
          .setDisabled(false)
          .setURL(meme.postLink)
			);
      break;
    case "slsh_cmd":
      return new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('next_meme')
					.setLabel('Next Meme')
          .setEmoji('➡️')
          .setDisabled(false)
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
          .setDisabled(false)
          .setURL(meme.postLink)
			);
      break;
    default:
      console.log("uhhh what lmao")
      return;
      break;
  }
}
module.exports = {
  generate: membed
}