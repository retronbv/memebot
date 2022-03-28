const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');
function membed(inter,meme) {
  const exampleEmbed = new MessageEmbed()
  	.setColor('#0099ff')
  	.setTitle(`r/${meme.subreddit}`)
    .setImage(meme.url)
  	.setDescription(`Meme from ${meme.author}`)
    .setFooter({text:`#${inter.channel.name}`})
  	.setTimestamp()
  return exampleEmbed
}
module.exports = {
  generate: membed
}