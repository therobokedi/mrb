module.exports = {
  name:"otorol",
  $if:"v4",
  code:`
  $if[$message[1]==aç]
  $description[1;**Otorol <#$mentionedChannels[1]> adlı kanala ayarlanmıştır.**]
$color[1;BLUE]
$setServerVar[otorolk;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=❌ - **Lütfen bir kanal etiketleyiniz.**]
  $endif
  $if[$message[1]==üye]
  $description[1;**Üye rolü <@&$mentionedRoles[1]> adlı role ayarlanmıştır.**]
$color[1;$getRoleColor[$mentionedRoles[1]]]
$setServerVar[otoroli;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=❌ - **Lütfen bir Rol etiketleyiniz.**]
  $endif
  $if[$message[1]==bot]
  $description[1;**Bot rolü <@&$mentionedRoles[1]> adlı role ayarlanmıştır.**]
$color[1;$getRoleColor[$mentionedRoles[1]]]
$setServerVar[otorolb;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=❌ - **Lütfen bir Rol etiketleyiniz.**]
  $endif
  $if[$message[1]==kapat]
  $description[1;**Otorol kapanmıştır.**]
$color[1;BLUE]
$setServerVar[otorolb;]
$setServerVar[otoroli;]
$setServerVar[otorolk;]
  $endif
  $onlyPerms[admin;❌ - **Yeterli iznin yok lütfen daha üst bir yetkiliye söyleyiniz.**]
  `
} 
