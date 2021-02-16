const scenario1 = [
    {cityName : "Colmar", 
     x: 640,
     y: 370,
     cityText : "Congrats! You found Colmar! Located close to the German border, the city is world wide famous for its beautiful Christmas markets.",
     img : "colmar.jpg",
    },
    {cityName : "Metz",
    x: 590,
    y: 418,
    cityText : "Wrong choice! Here is Metz...",
    },
    {cityName : "Auxerre",
    x: 500,
    y: 340,
    cityText : "Wrong choice! Here is Auxerre...",
    },
];

const scenario2 = [
    {cityName : "Blois",
    x: 360,
    y: 300,
    cityText : "Congrats! You found Blois! Heart of the Loire Valley, it has a rich heritage. For example, The Château de Blois is famous for its four architectural styles and its staircase. ",
    img : "blois.jpg"
},
    {cityName : "Limoges",
    x: 385,
    y: 220,
    cityText : "Wrong choice! Here is Limoges...",
},
    {cityName : "Angers",
    x: 265,
    y: 315,
    cityText : "Wrong choice! Here is Angers...",
},
];

const scenario3 = [
    {cityName : "Cassis",
    x: 575,
    y: 65,
    cityText : "Congrats! You found Cassis! Known for the beautiful scenery of its rocky inlets, the Calanques, Cassis is located near Marseille ",
    img : "cassis.jpg"
},
    {cityName : "Montpellier",
    x: 490,
    y: 78,
    cityText : "Wrong choice! Here is Montpellier...",
},
    {cityName : "Cannes",
    x: 630,
    y: 80,
    cityText : "Wrong choice! Here is Cannes...",
},
];

const hint1 = "Colmar is world wide famous for its Christmas market";
const hint2 = "Blois used to be the be the royal residency of several French kings";
const hint3 = "Cassis is located near to the third biggest French city";

const choiceList = document.querySelectorAll(".choice");

function printScenario (scenario, hint) {
    let ch1 = document.querySelector("#ch1");
    let ch2 = document.querySelector("#ch2");
    let ch3 = document.querySelector("#ch3");

    ch1.style.bottom = scenario[0].y + "px";
    ch1.style.left = scenario[0].x + "px";

    ch2.style.bottom = scenario[1].y + "px";
    ch2.style.left = scenario[1].x + "px";

    ch3.style.bottom = scenario[2].y + "px";
    ch3.style.left = scenario[2].x + "px";


};

function handleClick(popup){
        popup.style.display = none
        console.log('click', popup)
};


let htp = document.querySelector("startmenu :nth-child(3)");

htp.addEventListener('click', handleClick);


// first : title page
// howToPlay() = afficher pop up qui explique les règles du jeu
//click on start > load printBackground() = supprimer l'accueil, afficher la carte vite, le "where is", le hint
// printScenario (scenario, hint) x5 = afficher nom de la ville, remplir le hint, afficher les positions, afficher le 1/5 correspondant
//+ afficher les pop ups dans des fonctions séparées popUp(objet qui correspond à la ville ou elle a été cliqué
// + fonction hintPopUp() 
//printEndGame() = afficher pop up de fin avec score
// bouton : play again qui refresh la page

