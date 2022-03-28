const fetch = require("node-fetch");
async function help(inter) {
  return await fetch("https://meme-api.herokuapp.com/gimme").then(async (meme)=>{return await meme.json()}).then(async (meme)=>{
    //console.log(meme)
    return meme
  })
}
module.exports = {
  generate: help
}