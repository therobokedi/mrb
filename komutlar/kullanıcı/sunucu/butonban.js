module.exports = [{
    name: "ban",
    $if: "v4",
    code: `
    $setMessageVar[reason;$noMentionMessage;$get[message]]
    $setMessageVar[user;$mentioned[1];$get[message]]
    $let[message;$sendMessage[{"embeds": "{newEmbed:{title:Bu Kişiyi Banlamak İstediğine Emin Misin ?}{field:**Banlanıcak Kişi**:<@$mentioned[1]>:yes}{field:**Kişi ID**:**$mentioned[1]**:yes}{field:**Banlanma Sebebi**:\`\`\`$noMentionMessage\`\`\`:no}{color:303136}{timestamp}{thumbnail:$userAvatar[$mentioned[1]]}{footer:Komutu Kullanan $userTag[$authorID]:$authorAvatar}}", "components": "{actionRow:{button:Evet:3:banevet_$authorID:no}{button:Hayır:4:banhayir_$authorID:no}}}"};yes]]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{title:Hata}{description: **Rolümden üstte/eşit birisini banlayamam **}{color:303136}{delete:5s}}]
   $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{newEmbed:{title:Hata}{description: **Rolünden üstte/eşit birisini banlayamazsın **}{color:303136}{delete:5s}}]
    $onlyIf[$mentioned[1]!=$clientID;{newEmbed:{title:Hata}{description: **Beni banlayamazsın**}{color:303136}{delete:5s}}]
    $onlyIf[$mentioned[1]!=$ownerID;{newEmbed:{title:Hata}{description: **Sunucu sahibini banlayamazsın**}{color:303136}{delete:5s}}]
    $onlyIf[$mentioned[1]!=$authorID;{newEmbed:{title:Hata}{description: **Kendini banlayamazsın**}{color:303136}{delete:5s}}]
    $onlyIf[$noMentionMessage!=;{newEmbed:{{title:Yanlış Kullanım}{description: **Doğru kullanım:** \`\`R!ban <kişi> <sebep>\`\`}{color:303136}{delete:5s}}]
    $onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{{title:Yanlış Kullanım}{description: **Doğru kullanım:** \`\`R!ban <kişi> <sebep>\`\`}{color:303136}{delete:5s}}]
    $onlyBotPerms[ban;{newEmbed:{title:Botun Yetkisi Yok}{description:**Lütfen Bota Şu İzini Verin:\`\`Kişileri Yasakla\`\`**}{color:303136}{delete:5s}}]
    $onlyPerms[ban;{newEmbed:{title:Üzgünüm Yetkin Yok}{description: **Bu Özelliği Kullanmak İçin Şu Yetkiye Ship Olmalısınız:** \`\`Kişileri Yasakla\`\`}{color:303136}{delete:5s}}]
    $cooldown[3s;{newEmbed:{title:Lütfen Bekleyin}{description:**Bu Komutu Kullanmak İçin Lütfen \`\`3\`\` Saniye Bekleyin**}{color:303136}{delete:3s}}]
    $deletecommand
    `
},
{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:Kişi Başarıyla Banlandı}{color:303136}{delete:3s}};;;;;yes]
    $ban[$getMessageVar[user];$guildID;1;$getMessageVar[reason]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "content":"Üzgünüm Bu Onayı Kabul Etmesi Gereken Sen Değilsin","ephemeral": true, "options":{ "interaction": true}}]  
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==banevet;]
    `
},
{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:İşlem İptal Edildi}{color:303136}{delete:3s}};;;;;yes]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "content":"Üzgünüm Bu Onayı Kabul Etmesi Gereken Sen Değilsin","ephemeral": true, "options":{ "interaction": true}}]  
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==banhayir;]
    `
}]