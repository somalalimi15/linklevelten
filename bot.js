const Discord = require("discord.js")
const client = new Discord.Client()
  client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 5 **`)


    }
});
  
    client.on('ready', () => {
     client.user.setActivity("Type | رابط .",{type: 'Streaming'});

});

client.login(process.env.BOT_TOKEN);
