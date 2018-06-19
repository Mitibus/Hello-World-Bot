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
    if(message.channel.id === "450703148890456094"){
        if (message.author.id != "159985870458322944"){
            if (verif(message)){
                addRole(message);
            } else {
                console.log("Erreur lors de la verif de la présentation")
            }
        }
    }
})

function random(min, max){
    min = Math.ceil(1);
    max = Math.floor(3);
    randNum = Math.floor(Math.random() * (max - min + 1) + min)
}

function verif(message) {
    var motsFigurant = ['je', "j'ai", "suis", "dev", "dév", "passioné", "passion", "bonjour", "hello", "hola"];
    
    for (var i = 0; i < motsFigurant.length ; i++){
        var regex = new RegExp(motsFigurant[i].replace(/(.)/g, "$1+"));
        var analyse = regex.test(message);

        if (analyse){
            return true;
        }
    }
}

function addRole(message){
    // On cherche le rôle sur le serveur
    let nouveau = message.guild.roles.find('name', 'Nouveau')
    let membres = message.guild.roles.find('name', 'Membres')

    // On supprime le role nouveau
    if(message.member.roles.find('name', 'Nouveau')){
        message.member.removeRole(nouveau)
        message.member.addRole(membres)

        var help_embed = new Discord.RichEmbed()
            .setColor('#01B0F0')
            .addField("Une erreur à été détécté : ", "   ***Processus de vérification de présentation*** : Impossible d'atribuer le rôle")
            .addField("-----", "   Merci de jeter un coup d'oeil à la présentation");

        if (message.member.addRole(membres)){
            random();
            if (randNum === 1 ){
                message.reply("Super, nous te souhaitons la bienvenue dans nôtre communauté et bonne chance pour tes projets futurs...")
            }
            if (randNum === 2){
                message.reply("Nous te remercions d'avoir choisi notre communauté et nous espérons que tu nous aidera à la faire connaître et à la maintenir en fonctionnement :thumbsup::ok_hand:")
            }
            if(randNum === 3){
                message.reply("Merci d'avoir choisi nôtre communauté :smile:")
            }

        }else {
            bot.channels("450703148890456094").sendEmbed(help_embed);
        }
    }
}

bot.login(token);
