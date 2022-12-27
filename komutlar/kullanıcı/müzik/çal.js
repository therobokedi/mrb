module.exports = { 
  name:"çal",
  aliases:['play'],
 code:`$suppressErrors[Şarkı çalmazken kullanamazsın]
 $author[Müzik çalınmaya başlandı;$authorAvatar]
$description[Aranan kelime \`$message\`
Bulunan Şarkı : $get[şarkı]
Şarkı uzunluğu : $replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]
Çalan kişi : $userTag[$authorID]]

$setServerVar[şarkı;$authorID]
$let[şarkı;$playSong[$message;...;yes;yes;:x: \`$message\` adında bir müzik bulamadım.]]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$argsCheck[>1;Lütfen bir şarkı adı gir]
`
}
