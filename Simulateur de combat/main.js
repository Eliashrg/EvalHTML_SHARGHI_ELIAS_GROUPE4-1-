class Guerrier { // definition de la classe Guerrier
    constructor(nom, vie, atk, precision) { // Possède 4 attributs
        this.nom = nom; 
        this.vie = vie; 
        this.atk = atk; 
        this.precision = precision; 
    }

    // Fonction pour vérifier la précision
    Precision() {
        return Math.random() < this.precision; // Renvoie true si l'attaque réussit
    }

    // Fonction pour attaquer
    attaquer(adversaire) {
        if (this.Precision()) {
            // Si l'attaque réussit
            console.log(`${this.nom} attaque ${adversaire.nom} et réussit à infliger ${this.atk} points de dégâts`);
            adversaire.vie -= this.atk; // Réduit la vie de l'adversaire
        } else {
            // Si l'attaque échoue
            console.log(`L'attaque de ${this.nom} contre ${adversaire.nom} rate`);
        }
    }
}

//2 guerriers de la classe Guerrier
let Max = new Guerrier('Max', 10, 2, 0.7);
let Willy = new Guerrier('Willy', 8, 3, 0.5); 

// Boucle de combat qui ne s'arretera pas jusqu'à qu'un des deux guerriers n'est plus leur vie superieur à 0
while (Max.vie > 0 && Willy.vie > 0) {
    // Max attaque Willy
    Max.attaquer(Willy);
    // Willy attaque Max
    Willy.attaquer(Max);

    // Affiche la vie des guerriers après le round
    console.log(`Voici la vie des guerries apres ce round :`);
    console.log(`${Max.nom}: ${Max.vie} PV`);
    console.log(`${Willy.nom}: ${Willy.vie} PV\n`);

    // Vérifier si Willy est encore en vie
    if (Willy.vie <= 0) {
        console.log(`${Willy.nom} a été vaincu ${Max.nom} remporte le combat`);
        break;
    }


    // Vérifier si Max est encore en vie
    if (Max.vie <= 0) {
        console.log(`${Max.nom} a été vaincu ${Willy.nom} remporte le combat`);
        break;
    }

}
