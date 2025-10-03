const prompt = require("prompt-sync")();

let livres = [];

let nextLivreId = 1;


function ajouterLivre(){
    const titre = prompt("entrez le titre : ");
    const auteur = prompt("entrez l'auteur : ");
    const annee = prompt("entrez l'année : ");
    

    let livre = {
        id_livre: nextLivreId++ ,
        titre: titre,
        auteur: auteur,
        annee: annee ,
        disponible: true,
    };

     livres.push(livre)
     console.log(livre);

    console.log("Livre ajouté avec succès.\n");
        
    }




    function afficherLivres(){
        if(livres.length === 0){
            console.log("Aucun livre disponible.\n");
            return ;
        }
        for(let livre of livres){
          console.log(`${livre.id_livre} - ${livre.titre} ${livre.auteur} - (${livre.annee}) - ${livre.disponible ? "Disponible" : "Non disponible"}`);
        }
        console.log();
    }

   
    

function trierParTitre() {
    if (livres.length === 0) {
        console.log(" Aucun livre à trier.\n");
        return;
    }
    const ordre = prompt("Ordre (asc/desc): ").toLowerCase();
    if (ordre === "asc") {
        livres.sort((a, b) => a.titre.localeCompare(b.titre));
    } else if (ordre === "desc") {
        livres.sort((a, b) => b.titre.localeCompare(a.titre));
    } else {
        console.log(" Choix invalide.\n");
        return;
    }
    afficherLivres();
}
 

function trierParAnnee() {
    const annee = prompt("Entrez l'année à afficher : ").trim();

    const result = livres.filter(l => String(l.annee) === annee);

    if (result.length === 0) {
        console.log("Aucun livre pour cette année.\n");
    } else {
        result.forEach(l => 
            console.log(`${l.id_livre} - ${l.titre} - ${l.auteur} (${l.annee})`)
        );
    }
    console.log();
}


function afficherDisponibles() {
    const disponibles = livres.filter(l => l.disponible);
    if (disponibles.length === 0) {
        console.log(" Aucun livre disponible actuellement.\n");
        return;
    }
    console.log("\n== Livres disponibles ==");
    disponibles.forEach(livre => {
        console.log(`${livre.id_livre} - ${livre.titre} (${livre.annee}) - ${livre.auteur}`);
    });
    console.log();
}




 array = [10 , 20 ,let 22 , ];
console.log(array[])

function rechercherLivreParId() {
    const id = parseInt(prompt("ID du livre: "));
    const livre = livres.forEach(l => l.id_livre === id);


    
    if (livre) {
        console.log(` Trouvé: ${livre.id_livre} - ${livre.titre} - ${livre.auteur} - ${livre.disponible ? "Disponible" : "Non disponible"}`);
    } else {
        console.log(" Livre introuvable.\n");
    }
}






function menu() {
    let choix;
    do {
        console.log("=== Gestion de Bibliothèque ===");
        console.log("1. Ajouter un livre");
        console.log("2. Afficher tous les livres");
         console.log("3. Trier les livres par titre (asc/desc)");
        console.log("4. Trier les livres par année");
        console.log("5. Afficher uniquement les livres disponibles");
        console.log("6. Rechercher un livre par ID");
        console.log("0. Quitter");
        
        choix = prompt("Choisissez une option: ");
        
        switch (choix) {
            case "1":
                ajouterLivre();
                break;
            case "2":
                afficherLivres();
                break;
            case "3": 
                trierParTitre();
                 break;
             case "4":
                 trierParAnnee();
                break;   
              case "5": 
              afficherDisponibles();
               break;
            case "6": 
              rechercherLivreParId(); 
                break; 
            case "0":
                console.log(" merci !");
                break;
            default:
                console.log(" Choix invalide\n");
        }
    } while (choix !== "0");
}


menu();












