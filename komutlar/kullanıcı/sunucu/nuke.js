module.exports = {
 name: "nuke",
 code:`
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete() 
 c.setPosition(d.message.channel.position) 
c.send('https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831')

 })
.catch(() => d.message.channel.send('Yetkim bulunmuyor.'))
]
$onlyBotPerms[managechannel;{newEmbed:{description: ❌ | <@$authorID>, **kanalları yönet** yetkim bulunmuyor!}{color:RED}}]
$onlyPerms[admin;{newEmbed:{description: ❌ | <@$authorID>, **yönetici** yetkiniz bulunmuyor!}{color:RED}}]
$wait[3s]
$message[{newEmbed:{description: Kanal Başarı İle Nukelandi}{color:green}]`
}
