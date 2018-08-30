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

bot.on('messageReactionAdd', (reaction, user) => {
    console.log("Reaction detectee")

    let androidRole = reaction.message.guild.roles.find('name', 'android');
    let arduinoRole = reaction.message.guild.roles.find('name', 'arduino');
    let htmlRole = reaction.message.guild.roles.find('name', 'html');
    let javaRole = reaction.message.guild.roles.find('name', 'java');
    let jsRole = reaction.message.guild.roles.find('name', 'js');
    let phpRole = reaction.message.guild.roles.find('name', 'php');
    let pythonRole = reaction.message.guild.roles.find('name', 'python');
    let raspberryRole = reaction.message.guild.roles.find('name', 'raspberry');
    let rubyRole = reaction.message.guild.roles.find('name', 'ruby');

    if (reaction.message.channel.id === "450690990655930370") {
        if(reaction.emoji.name === ":android:"){
            if(user.roles.find('name', 'android')){
                user.removeRole(androidRole);
            }else{
                user.addRole(androidRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":arduino:"){
            if(user.roles.find('name', 'arduino')){
                user.removeRole(arduinoRole);
            }else{
                user.addRole(arduinoRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":html:"){
            if(user.roles.find('name', 'html')){
                user.removeRole(htmlRole);
            }else{
                user.addRole(htmlRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":java:"){
            if(user.roles.find('name', 'java')){
                user.removeRole(javaRole);
            }else{
                user.addRole(javaRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":js:"){
            if(user.roles.find('name', 'js')){
                user.removeRole(jsRole);
            }else{
                user.addRole(jsRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":php:"){
            if(user.roles.find('name', 'php')){
                user.removeRole(phpRole);
            }else{
                user.addRole(phpRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":python:"){
            if(user.roles.find('name', 'python')){
                user.removeRole(pythonRole);
            }else{
                user.addRole(pythonRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":raspberry:"){
            if(user.roles.find('name', 'raspberry')){
                user.removeRole(raspberryRole);
            }else{
                user.addRole(raspberryRole)
                console.log("J'ajoute un role")
            }
        }
        if(reaction.emoji.name === ":ruby:"){
            if(user.roles.find('name', 'ruby')){
                user.removeRole(rubyRole);
            }else{
                user.addRole(rubyRole)
                console.log("J'ajoute un role")
            }
        }
    }
})

bot.login(token);
