const Discord = require('discord.js'); // Import de la bibliothéque "discord.js".

module.exports.run = (client, message, args) => {
	
	const isReachable = require('is-reachable');
	
    let site;
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
        
        // Remplacez HIDDEN-PORT selon vos besoins
        
        (async () => {
		site = (await isReachable('nemixcraft.com:80'));
		proxy = (await isReachable('play.nemixcraft.com:25565'));
                faction = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                minage = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                opprison = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                libre = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                survie = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                creatif = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                skyblock = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                lobby = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                authlobby = (await isReachable('play.nemixcraft.com:HIDDEN-PORT'));
                
                
                console.log(trueornot(site));
        
                message.channel.send("État des serveurs de Nemixcraft :\n\n ** Site web** : " + trueornot(site) + "\n\n ** Proxy ** : " + trueornot(proxy) + "\n\n ** Lobby de connexion** : " + trueornot(authlobby) + "\n\n ** Faction** : " + trueornot(faction) + "\n\n ** Minage** : " + trueornot(minage) + "\n\n ** OP Prison** : " + trueornot(opprison) + "\n\n ** Libre ** : " + trueornot(libre) + "\n\n ** Skyblock** : " + trueornot(skyblock) + "\n\n ** Créatif** : " + trueornot(creatif) + "\n\n ** Survie** : " + trueornot(survie));
               
	})();
	
 
        
        function trueornot(serveur){
            let sortie;
            if (serveur === true){
                sortie = ":white_check_mark:";
            }else if (serveur === false) {
                sortie = ":x:";
            }
            return sortie;
        }
         
	
	


};

module.exports.help = {
	name: 'ping'
};


