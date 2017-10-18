/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];



for (var i = 0; i < listeLiens.length; i++) {
    //Creation de l'élément lien dans le conteneur contenu
    var articleLiens = document.createElement("article");
    var titreLiens = document.createElement("strong");
    var refLiens = document.createElement("a");
    var texteLiens = document.createElement("span");
    var pLiens = document.createElement("p");

    //Creation du contenu de chaque élément
    articleLiens.classList.add("lien");
    refLiens.href = listeLiens[i].url;
    refLiens.textContent = listeLiens[i].titre;
    texteLiens.textContent = listeLiens[i].url;
    pLiens.textContent = ("Ajouté par " + listeLiens[i].auteur);

    //Position de l'élément
    document.getElementById("contenu").appendChild(articleLiens);
    document.getElementsByTagName("article")[i].appendChild(titreLiens);
    document.getElementsByTagName("strong")[i].appendChild(refLiens);
    document.getElementsByTagName("article")[i].appendChild(texteLiens);
    document.querySelectorAll("span")[i].appendChild(pLiens);

    //Modification des styles
    var colorStrong = document.getElementsByTagName("a")[i];
    colorStrong.style.color = '#428bca';
    colorStrong.style.marginRight = '10px';
    colorStrong.style.textDecoration = 'none';
};


