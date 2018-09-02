const Discord = require('discord.js');
var bot = new Discord.Client();
const token = process.env.TOKEN;

var version = Discord.version;
var randNum = 0;

bot.on('ready', function(){
    bot.user.setPresence({ game: { name: "Hello World ! | V" + version }});
    console.log("setPresence : " + "Hello World ! | V" + version );

    bot.user.setUsername("Hello World !");
    console.log("setUsername : Hello World !");

    console.log("Prêt à fonctionner !");
    console.log(Discord.version);

});

bot.on('message', message => {  
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);  
    
  if (command === `${prefix}addrole`){
        console.log(messageArray);
        console.log(command);
        console.log(args);

        if (args.length > 0) {
            if (args.length < 2) {
                    if (message.guild.roles.find('name', args[0])){
                        message.member.addRole(message.guild.roles.find('name', args[0]));
                        message.reply("Rôle ajouté avec succés !")
                    }else {
                        message.reply("Aucun role ne correspond a vôtre demande !")
                    }
            }else{
                message.reply("Trop d'arguments précisés !");
            }
        }else {
            message.reply("Aucun rôle n'a été précisé pour être ajouté !");
        }
    }
    
});



bot.login(token);
