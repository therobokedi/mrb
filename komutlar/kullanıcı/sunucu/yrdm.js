module.exports = [{
  name:"helpyakndaglckdenemesxd",
  code:`
ROBOKEDi Bot Yardım Menüsü!Haydi Aşağıdan Bir Kategori Seç!
  $addSelectMenu[1;help;Kategori Seç!;1;1;false;Moderasyon:Moderasyon menüsünü açmak için tıkla.:0:false:🔨;Kullanıcı:Kullanıcı menüsünü açmak için tıkla.:1:false:;Genel:Genel menüsünü açmak için tıkla.:2:false:🙃]
  `},{
    name:"help",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[;{newEmbed:{author:Moderasyon:$authorAvatar}{description:
KOMUTLARINIZI GİRİN}{color:WHITE}};;;;yes]
   
$onlyIf[$interactionData[values[0]]==0;]
    `
    },{
    name:"help",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[;{newEmbed:{author:Ayarlamalı:$authorAvatar}{description:
KOMUTLARINIZI GİRİN}{color:WHITE}};;;;yes]
  
$onlyIf[$interactionData[values[0]]==1;]
    `
    },{
      name:"help",
      type:"interaction",
      prototype:"selectMenu",
      code:`
     $interactionReply[;{newEmbed:{author:Genel:$authorAvatar}{description:
KOMUTLARINIZI GİRİN}{color:WHITE}};;;;yes]
    
$onlyIf[$interactionData[values[0]]==2;]
    `
    }]