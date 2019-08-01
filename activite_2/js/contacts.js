/* 
Activité : gestion des contacts
*/

let contacts = [];
let input = [];

class Contact {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  show() {
    console.log(this.nom + " " + this.prenom + "\n");
  }
}

function insereContact(nom, prenom) {
  contacts.push(new Contact(nom, prenom))
}

contacts[0] = new Contact("Carole", "Lévisse");
contacts[1] = new Contact("Mélodie", "Nelsonne");

function list() {
  for (let i = 0; i < contacts.length ; i++) {
    contacts[i].show();
  }
}

function start() {
  let option = -1;
  while (option != 0) {
   
    console.log("Bienvenue dans le gestionnaire des contacts:\n 1. lister les contacts\n 2. ajouter un contact\n 0.Quitter")
    option = window.prompt("choisir une option");
    if (option == 1)
      list();
    else if (option == 2) {
      let s = prompt("donner son nom et prenom");
      input = s.split(" ");
      insereContact(input[0], input[1]);
    }
    else if (option == 0) console.log("Au revoir");
    else console.log("option invalide");
  }
}