const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});
var prefix = ("R!");

bot.on('ready', () => {
    bot.user.setGame("• Infrastrucutre : ❌", 'https://www.twitch.tv/bot')
    console.log("Bot Go !");
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "『🌟』bienvenues").send(`🗽 Bienvenue a toi, __${member.user.username}__ je t'invite a lire le règlement.`)
    bot.user.setGame("• Infrastrucutre : ❌", "https://www.twitch.tv/Méliodas")
    let role = member.guild.roles.find("name", "👒 | mєmвrєs")
    member.addRole(role)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "『✨』départ").send(`⭕ __${member.user.username}__, Vient de nous quitter.`)
    bot.user.setGame("• Infrastrucutre : ❌", "https://www.twitch.tv/Méliodas")

})

bot.login(process.env.TOKEN);


bot.on('message', message => {

    if(message.content.startsWith(prefix + "Aide")) {
        message.reply("📩 Tu viens de recevoir l'aide en message privé.");
        message.react("📩")
        var help_embed = new Discord.RichEmbed()
            .setColor('#77B5FE')
            .setDescription("Support Rs.rip")
            .addField("⛔ Modérateur", "``` • Ban \n • Kick```")
            .addField("🎉 Fun", "``` - Aucun pour le moment.```")
            .addField("💦 NSFW", "```- Aucun pour le moment.```")
            message.author.sendEmbed(help_embed); 
    

    }

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
