const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});
var prefix = ("A!");

bot.on('ready', () => {
    bot.user.setGame("🍭 | αtsurσσt | Joue les H4X0R", 'https://www.twitch.tv/AtsuRoot')
    console.log("Bot Go !");
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "『👣』вιєиνєиυєѕ").send(`:loudspeaker: Bienvenue a toi, __${member.user.username}__ sur mon serveur. :D`)
    bot.user.setGame("🍭 | αtsurσσt | Joue les H4X0R", "https://www.twitch.tv/Méliodas")
    let role = member.guild.roles.find("name", "━━━━━━━━━━━━━━━━")
    let role2 = member.guild.roles.find("name", "━━━━━━━━━━━━━━━━━")
    let role3 = member.guild.roles.find("name", "━━━━━━━━━━━━━━")
    let role4 = member.guild.roles.find("name", "━━━━━━━━━━━━━")
    let role5 = member.guild.roles.find("name", "━━━━━━━━━━━━━━━━━━")
    let role6 = member.guild.roles.find("name", "『❌』")
    member.addRole(role)
    member.addRole(role2)
    member.addRole(role3)
    member.addRole(role4)
    member.addRole(role5)
    member.addRole(role6)


})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "『🎌』∂éραят").send(`:loudspeaker: Bye, __${member.user.username}__, Bonne continuation.`)
    bot.user.setGame("🍭 | αtsurσσt | Joue les H4X0R", "https://www.twitch.tv/Méliodas")

})

bot.login(process.env.TOKEN);


bot.on('message', message => {



    if(message.content.startsWith(prefix + "kick")) {
        let Perm = message.guild.members.get(message.author.id).permissions.has('ADMINISTRATOR');
        var member = message.mentions.members.first();           

        if(!Perm) {
            var help_embed = new Discord.RichEmbed()
            .setAuthor("❌ Erreur : ❌")
            .addField("Erreur :", "Tu n'a pas la permission !")
            .setColor("#850606")
            message.channel.sendEmbed(help_embed);
        }
        if(Perm)
            if(!member) {
                var help_embed = new Discord.RichEmbed()
                .setAuthor("❌ Erreur : ❌")
                .addField("Erreur :", "Utilisateur non mentionner !")
                .setColor("#850606")
                message.channel.sendEmbed(help_embed);
        }


        if(Perm) 
            if(member) {


        member.kick().then((member) => {
            var help_embed = new Discord.RichEmbed()
            .addField("• Commande :", "Kick")
            .addField("• Utilisateur :", member.displayName)
            .addField("• Modérateur :", message.member)
            .setColor("#77B5FE")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            message.channel.sendEmbed(help_embed);
        
        }).catch(() => {
        }
        )
    }
    }

    if(message.content.startsWith(prefix + "ban")) {
        let Perm = message.guild.members.get(message.author.id).permissions.has('ADMINISTRATOR');
        var member = message.mentions.members.first();           

        if(!Perm) {
            var help_embed = new Discord.RichEmbed()
            .setAuthor("❌ Erreur : ❌")
            .addField("Erreur :", "Tu n'a pas la permission !")
            .setColor("#850606")
            message.channel.sendEmbed(help_embed);
        }
        if(Perm)
            if(!member) {
                var help_embed = new Discord.RichEmbed()
                .setAuthor("❌ Erreur : ❌")
                .addField("Erreur :", "Utilisateur non mentionner !")
                .setColor("#850606")
                message.channel.sendEmbed(help_embed);
        }


        if(Perm) 
            if(member) {


        member.ban().then((member) => {
            var help_embed = new Discord.RichEmbed()
            .addField("• Commande :", "ban")
            .addField("• Utilisateur :", member.displayName)
            .addField("• Modérateur :", message.member)
            .setColor("#77B5FE")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            message.channel.sendEmbed(help_embed);
        
        }).catch(() => {
        }
    )
    
    }
    
    
}});
