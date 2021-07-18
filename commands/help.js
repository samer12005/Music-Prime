 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Hydra Music  Commands**`)
    .setThumbnail("https://media.discordapp.net/attachments/836335449504612423/866284679652442162/image0.gif")
    .setColor("RANDOM")
   .setAuthor("Prefix [ $ ]","")
    .setDescription(` 
\`Help Commands\`

**Music Command**

\` $paly , $stop , 
$skip , $skipto , $volume \`

\` $queue , $loop , 
$pause , $nowplaying \`

\` $shuffle , $uptime ,
 $search , $remove \`

\` $clip , $clips , 
$lyrics , $move , $playlist \`


**Info Command**

\` $bot , $support ,
   $invite , $help , $ping \`



     
**[ invite ](https://discord.com/api/oauth2/authorize?client_id=866274289976213505&permissions=8&scope=bot)** , **[ support ](https://discord.gg/9qBvN4DhT5)**      
 
Hydra Music - By FiiX ) Hydra Prime )> <(verification Hydra Music 🎼 ] 
(Owner Bot) >>>>     (!                         ᖴ𝗂𝗂᙭#9480                                                       

https://media.discordapp.net/attachments/836335449504612423/866284915439566868/image0.gif `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
