// Tableau contenant les noms de toutes les pages
var pageList = ["Autriche.html", "Bouthan.html", "Islande.html", "Kirghizistan.html", "Norvège.html", "Madagascar.html", "Nouvelle-Zélande.html", "Pérou.html", "Sénégal.html", "Tanzanie.html"];


// Fonction pour rediriger l'utilisateur vers une page aléatoire
function redirectToRandomPage() {
  // Générer un nombre aléatoire entre 0 et 9 (index des pages dans le tableau)
  var randomIndex = Math.floor(Math.random() * pageList.length);

  // Récupérer le nom de la page à partir du tableau
  var randomPage = pageList[randomIndex];

  // Rediriger l'utilisateur vers la page sélectionnée
  window.location.href = randomPage;
}


  
// Appeler la fonction lors du chargement de la page
window.onload = redirectToRandomPage;

// Définir un minuteur pour rediriger l'utilisateur toutes les heures (3600000 millisecondes)
setInterval(function() {
    redirectToRandomPage();
  }, 3600000);
