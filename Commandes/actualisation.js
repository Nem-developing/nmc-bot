const Discord = require('discord.js'); // Import de la bibliothéque "discord.js".
const isReachable = require('is-reachable');
const moment = require('moment');


module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas les permissions !'); }

    message.channel.send("Actualisation en cours....");

    
    
    // Définition des variables
    let proxy;
    let lobby;
    let authlobby;
    let faction;
    let minage;
    let opprison;
    let libre;
    let survie;
    let creatif;
    let skyblock;
    
    // Définition des constantes liées aux channels discord.
    const voiceproxy = message.guild.channels.resolve('784903274389438535');
    const voiceauthlobby = message.guild.channels.resolve('784904454125649920');
    const voicelobby = message.guild.channels.resolve('784903327216566292');
    const voicepvpfac = message.guild.channels.resolve('783614404112810014');
    const voiceminage = message.guild.channels.resolve('784903399077707816');
    const voiceopprison = message.guild.channels.resolve('783614911829114880');
    const voicelibre = message.guild.channels.resolve('784905201299357706');
    const voiceskyblock = message.guild.channels.resolve('783614737446862850');
    const voicesurvie = message.guild.channels.resolve('783614511746646067');
    const voicecreatif = message.guild.channels.resolve('783615509572223057');
    const voicetime = message.guild.channels.resolve('784902370446278678');
    
        
    (async () => {
         
         
        // Test de connectivité.
        proxy = (await isReachable('play.nemixcraft.com:HIDE'));
        faction = (await isReachable('play.nemixcraft.com:HIDE'));
        minage = (await isReachable('play.nemixcraft.com:HIDE'));
        opprison = (await isReachable('play.nemixcraft.com:HIDE'));
        libre = (await isReachable('play.nemixcraft.com:HIDE'));
        survie = (await isReachable('play.nemixcraft.com:HIDE'));
        creatif = (await isReachable('play.nemixcraft.com:HIDE'));
        skyblock = (await isReachable('play.nemixcraft.com:HIDE'));
        lobby = (await isReachable('play.nemixcraft.com:HIDE'));
        authlobby = (await isReachable('play.nemixcraft.com:HIDE'));
        
       // Test de connectivité.

        await voiceproxy.setName("Proxy - " + trueornot(proxy));
        await voiceauthlobby.setName("Authlobby - " + trueornot(authlobby));        
        await voicelobby.setName("Lobby - " + trueornot(lobby));        
        await voicepvpfac.setName("Faction - " + trueornot(faction));        
        await voiceminage.setName("Minage - " + trueornot(minage));        
        await voiceopprison.setName("Prison - " + trueornot(opprison));        
        await voicelibre.setName("Libre - " + trueornot(libre));        
        await voiceskyblock.setName("Skyblock - " + trueornot(skyblock));        
        await voicesurvie.setName("Survie - " + trueornot(survie));        
        await voicecreatif.setName("Creatif - " + trueornot(creatif));
        
        let heure = moment().format('HH:MM:SS');
        await voicetime.setName("Vérifié à " + heure);
    })();
	
    
	

    
    function trueornot(serveur){
        let sortie;
        if (serveur === true){
            sortie = "En ligne";
        }else if (serveur === false) {
            sortie = "Hors ligne";
        }
        return sortie;
    }

    
   message.channel.send("Actualisation Terminée");

 
    	

};


module.exports.help = {
    name: 'actualisation'
};
