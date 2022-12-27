const {Panel} = require("@akarui/aoi.panel")
const express = require('express')
const app = express()
const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
   token: process.env.TOKEN,
   prefix: "r!",
   intents: "all",
   suppressAllErrors: true,
   errorMessage:["Şuanda Bir Hata Bulunuyor. Daha Sonra Lütfen Tekrar Dene."]
 });


const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./komutlar/') 

const panel = new Panel({
    username: "therobokedi",//username for logging in
    password: "863676kpbot",//password for logging in
    secret: "aoijs",//session secret
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "server.js",//Main file where code is running.Not required, default taken from package.json
    commands: "komutlar"// folder name in which all the edit needing files are there.
})
panel.loadPanel()//Load The Panel

panel.onError()//Will detect errors, and send it to aoi.panel's error page.



bot.variables({
  şarkı: "hayır",
  otorolk:"",
  otorolb:"",
  otoroli:"",
  user: "",
  reason: ""
})


bot.onMessage()
bot.onInteractionCreate();



bot.status({
  text: "Yakında Sizlerle...",
  type: "PLAYING",
  time: 12
})


           
           
 bot.joinCommand({ 
channel: "$getServerVar[otorolk]",
  $if:"v4",
code: `
$if[$isBot[$authorID]==false]
$description[1;**$usertag** adlı üyeye <@&$getServerVar[otoroli]> rolü verilmiştir.]
$color[1;$getRoleColor[$getServerVar[otoroli]]
$giveRole[$guildID;$authorID;$getServerVar[otoroli]]
$else
$description[1;**$usertag** adlı bota <@&$getServerVar[otorolb]> rolü verilmiştir.]
$color[1;$getRoleColor[$getServerVar[otorolb]]
$giveRole[$guildID;$authorID;$getServerVar[otorolb]]
$endif
`
})
bot.onJoin()
