const memebtns = require("./memebtns.js");
const membeds = require("./membeds.js");
const memer = require("./meme.js");
function message(inter,type) {
  memer.generate().then((meme)=>{ 
    msg = {content:"",embeds:[membeds.generate(inter,meme)],components:[memebtns.generate(meme,type)]}
    console.log(msg)
    return msg
  })
}
module.exports = {
  generate: message
}