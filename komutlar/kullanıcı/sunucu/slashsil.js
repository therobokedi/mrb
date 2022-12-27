module.exports = [{
name:"sil",
code:` $createApplicationCommand[$guildID;sil;Belirli Sayıda Mesaj Silersin;true;slash;sil:bir sayı gir.:true:3]
`},{
name:"sil",
type:'interaction',
prototype:'slash',
code:`
$deleteIn[5s]
$author[1;$userTag;$userAvatar]
$description[1;<#$channelID> adlı kanalda $message[1] mesajı sildim]
$color[1;GREEN]
$clear[$message[1]]
$onlyIf[$isNumber[$message[1]]==true;Girdiğin rakam bir sayı değil.]
$onlyIf[$message[1]!=;Kaç mesaj silmeliyim bunu tüm gün düşünücem.]
$onlyBotPerms[managemessages;Bunun için botun **Mesajları Yönet** izni olmalı.]
$onlyPerms[managemessages;Bunun için **Mesajları Yönet** iznin olmalı.]
$interactionReply[Başarılı Şekilde $message[1] Mesajı Sildim.;;;;;no]
 `}]