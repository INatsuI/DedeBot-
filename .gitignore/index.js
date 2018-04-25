const Discord = require ('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Surveille le discord de Dédé | *help ", 'https://www.twitch.tv/gotaga')
    console.log("Go");

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue ${member.user.username} sur le discord de Dédé !`) 


})
    
bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Membre 💎")
    member.addRole(role)
})
    
bot.on("guildMemberRemove", member =>{
        member.guild.channels.find("name", "bienvenue").send(`A plus ${member.user.username} reviens quand tu veux`) 
})

});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();


    if(message.content.startsWith(prefix + "purgedédé")){
        if(message.guild.members.get(message.author.id).permissions.has('ADMINISTRATOR'))
        
        message.channel.bulkDelete(99).then(() =>{
            message.channel.send(``).then(msg => msg.delete(99))
        });

        var help_embed = new Discord.RichEmbed()
        .setColor('#F58800')
        .setTitle("**Information :**                         ")
        .addBlankField()
        .addField("Commande :", "Purge                               ")
        .addField("Exécuteur : ", "" + message.member + "              ")
        .addBlankField()
        message.channel.sendEmbed(help_embed);
    }


    if (message.content === prefix + 'help'){
        message.reply ('Regarde tes messages privée !');
        var help_embed = new Discord.RichEmbed()
            .setTitle("**Informations DédéBot :**")
            .addBlankField()
            .addField("**__Commandes d'administrateur / Modérateur (Encore en dév) :__**", "\n...")
            .addField(prefix + "ban ","Permet de ban des utilisateur.")
            .addField(prefix + "kick", "Permet de kick des utilisateur.")
            .addField(prefix + "mute", "Permet de mute un utilisateur - Soon")
            .addField(prefix + "warn", "Permet de mettre un avertisement à un utilisateur - Soon")
            .addField(prefix + "sondage ", "Permet de faire un sondage entre 2 choses.")
            .addBlankField()
            .addField("**__Commandes Fun / Informations / Tous : __**", "...")
            .addField(prefix + "DiscordInfo","Permet d'avoir des infos sur le Discord !")
            .addField(prefix + "Youtube","Permet d'avoir la chaine Youtube de Dédé !")
            .addField(prefix + "Twitter","Permet d'avoir le Twitter de Dédé !")
            .addField(prefix + "Musique","Permet d'avoir des infos sur les commandes de musique ! - Soon")
            .setColor('#F58800')
        message.author.sendEmbed(help_embed); 
        console.log("Commande Help demandé !");
    
    }

    if (message.content === prefix + 'Youtube'){
        var help_embed = new Discord.RichEmbed()
            .setColor('#F58800')
            .setTitle("**Informations Youtube :**")
            .addBlankField()
            .addField("**Chaine Youtube de Dédé : Dédé**", '\n**Lien de la chaine : ** https://www.youtube.com/channel/UCgLgmuJspcPYwaXpTUdQZ_g')
            .addBlankField()
            message.channel.sendEmbed(help_embed);

    
    }

    if (message.content === prefix + 'Twitter'){
        var help_embed = new Discord.RichEmbed()
            .setColor('#F58800')
            .setTitle("**Informations Twitter :**")
            .addBlankField()
            .addField("**Twitter de Dédé : @Dede1erHD**", '\n**Lien du twitter de Dédé : ** https://twitter.com/Dede1erHD')
            .addBlankField()
            message.channel.sendEmbed(help_embed);
    
    }


    if(message.content.startsWith(prefix + "kick")) {
        if(message.guild.members.get(message.author.id).permissions.has('ADMINISTRATOR'))
        var member= message.mentions.members.first();
        if(!member) {
            return message.reply("Utilisateur introuvable / Impossible a expulser / Aucun Utilisateur a été détecté !").catch(console.error);
        }
        // Kick
        member.kick().then((member) => {
            var help_embed = new Discord.RichEmbed()
            .setColor('#F58800')
            .setTitle("**Informations Kick :**")
            .addBlankField()
            .addField("**Utilisateur kick :**",  "" + member.displayName + "" )
            .addField("**Exécuteur :**", "" + message.member + "" )
            .addBlankField()
            message.channel.sendEmbed(help_embed);
        }).catch(() => {
        })
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(message.guild.members.get(message.author.id).permissions.has('ADMINISTRATOR'))
        var member= message.mentions.members.first();
        if(!member) {
            return message.reply("Utilisateur introuvable / Impossible a expulser / Aucun Utilisateur a été détecté !").catch(console.error);
        }
        // Ban
        member.ban().then((member) => {
        // Successmessage
        var help_embed = new Discord.RichEmbed()
        .setColor('#F58800')
        .setTitle("**Informations Bannisement :**")
        .addBlankField()
        .addField("**Utilisateur banni :**",  "" + member.displayName + "" )
        .addField("**Exécuteur :**", "" + message.member + "" )
        .addBlankField()
        message.channel.sendEmbed(help_embed);
        }).catch(() => {

        })
    }

        if(message.content === prefix + "Discordinfo"){
            var help_embed = new Discord.RichEmbed()
                .setTitle("Information du discord")
                .addBlankField()
                .addField("Nom du discord : " , message.guild.name)
                .addField("Créé le :  " , message.guild.createdAt)
                .addField("Tu nous a rejoins le : " , message.member.joinedAt)
                .addField("Ce discord possède :  " , message.guild.memberCount + " Utilisateurs")
                .addBlankField()
                .setColor("#F58800")
                message.channel.sendEmbed(help_embed);

        }

        if (message.content === prefix + 'Musique'){
            var help_embed = new Discord.RichEmbed()
                .setColor('#F58800')
                .setTitle("**Commandes Musique: (En Dév)**")
                .addBlankField()
                .addField("*Play <Lien Youtube>", "Permet d'écouter la bande son d'une vidéo Youtube !")
                .addField("*Skip ", "Permet de mettre la musique suivant dans la fille d'attente !")
                .addField("*stop ", "Permet d’arrêter la musique ")
                .addBlankField()
                message.channel.sendEmbed(help_embed);
        
        }

        
        if (message.content === prefix + 'Build'){
            message.reply ('Tu vien de recevoir le formulaire avec tout les conditions !');
            message.delete()
            var help_embed = new Discord.RichEmbed()
                .setTitle("**Informations commande Build :**")
                .addBlankField()
                .addField("**OBLIGATIONS :**", "Tu dois copier et remplir le formulaire qui ta été donné !\nTu dois envoyer le formulaire  à Dédé et tu pourras attendre une réponse !\nIl est interdit de spammer Dédé !\nPour tout type de question veuillez mp Dédé !\nTout abus sera sanctioné")
                .addBlankField()
                .addField("**Formulaire :**", "```- Théme : \n- Taille : \n- Budget : \n- Terraforming : \n- Build Suplémentaire (ex : Dragon , Phénix , ...): \n- Informations Suplémentaires :```")
                .setColor('#F58800')
            message.author.sendEmbed(help_embed); 
            console.log("Commande Help demandé !");

    }
    
        if(message.content === prefix + 'renchannel'){
        var interval = setInterval (function (){
              message.guild.channels.find('id',"416298251512315935")
              .setName("🔥 Annonces 🔥 👥 "+`${message.guild.members.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`+"");
        }, 1000); // intervalle entre les envoi de packet
        console.log("Commande Renchannel demandée !");
            
    }

});
