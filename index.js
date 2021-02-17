const scenari = [
  [
    {
      cityName: "Colmar",
      x: 635,
      y: 390,
      hint: "Colmar is world wide famous for its Christmas market.",
      choice: true,
      cityText:
        "Congrats! You found Colmar! Located close to the German border, the city is world wide famous for its beautiful Christmas market.",
      img: "img/colmar1.jpg",
    },
    {
      cityName: "Metz",
      x: 585,
      y: 428,
      choice: false,
      cityText: "You found Metz... But not Colmar!",
    },
    {
      cityName: "Auxerre",
      x: 500,
      y: 360,
      choice: false,
      cityText: "You found Auxerre... But not Colmar!",
    },
  ],
  [
    {
      cityName: "Blois",
      x: 360,
      y: 320,
      hint:
        "Blois used to be the royal residency of several French kings.",
      choice: true,
      cityText:
        "Congrats! You found Blois! Heart of the Loire Valley, it has a rich heritage. For example, The Château de Blois is famous for its four architectural styles and its staircase. ",
      img: "img/blois.jpg",
    },
    {
      cityName: "Limoges",
      x: 385,
      y: 240,
      choice: false,
      cityText: "You found Limoges... But not Blois!",
    },
    {
      cityName: "Angers",
      x: 265,
      y: 335,
      choice: false,
      cityText: "You found Angers... But not Blois!",
    },
  ],
  [
    {
      cityName: "Cassis",
      x: 565,
      y: 85,
      hint: "Cassis is located near to the third biggest French city.",
      choice: true,
      cityText:
        "Congrats! You found Cassis! Known for the beautiful scenery of its rocky inlets, the Calanques, Cassis is located near Marseille. ",
      img: "img/cassis.jpg",
    },
    {
      cityName: "Montpellier",
      x: 490,
      y: 100,
      choice: false,
      cityText: "You found Montpellier... But not Cassis!",
    },
    {
      cityName: "Cannes",
      x: 620,
      y: 100,
      choice: false,
      cityText: "You found Cannes... But not Cassis!",
    },
  ],
];

let startmenu = document.querySelector("#startmenu");
let choiceList = document.querySelectorAll(".choice");
let btnStart = document.querySelector("#startmenu :nth-child(2)");
let btnHtp = document.querySelector("#startmenu :nth-child(3)");
let htp = document.querySelector(".htp");
let ctabHtp = document.querySelector(".htp .ctab");
let playHtp = document.querySelector(".htp .btn");
let btnHint = document.querySelector(".hintBtn");
let ctabHint = document.querySelector(".hint .ctab");
let btnNextg = document.querySelector(".goodChoice .btn");
let btnNextw = document.querySelector(".wrongChoice .btn");
let ch1 = document.querySelector("#ch1");
let ch2 = document.querySelector("#ch2");
let ch3 = document.querySelector("#ch3");

const flow = new Flow(scenari);

//FUNCTIONS

function printPopUp(popup) {
  popup.style.display = "block";
}

function displayAnswer(answerch, answertxt, img) {
  if (answerch) {
    let goodChoice = document.querySelector(".goodChoice");
    goodChoice.style.display = "block";

    let gimg = document.querySelector(".imgpop");
    gimg.setAttribute("src", img);

    let gtxt = document.querySelector(".gtxt");
    gtxt.innerHTML = `${answertxt}`;

    console.log("score before : ", flow.score);
    flow.score += 1;
    console.log(`Hello + ${flow.score}`);
  } else {
    let wrongChoice = document.querySelector(".wrongChoice");
    wrongChoice.style.display = "block";
    let wtxt = document.querySelector(".wtxt");
    wtxt.innerHTML = `${answertxt}`;

    console.log(flow.score);
  }
}

function printScenario(scenario) {
  
   let gameboard = document.querySelector("#gameboard")
   gameboard.innerHTML = `<img class="map" src="img/mapFrance.png" alt="France" />
                          <div id="ch1" class="choice"> 
                            <img src="img/pointer.png" />
                        </div>
                        <div id="ch2" class="choice">
                            <img src="img/pointer.png" />
                        </div>
                        <div id="ch3" class="choice">
                             <img src="img/pointer.png" />
                        </div>`

let ch1 = document.querySelector("#ch1");
let ch2 = document.querySelector("#ch2");
let ch3 = document.querySelector("#ch3");

  ch1.style.display = "block";
  ch1.style.bottom = scenario[0].y + "px";
  ch1.style.left = scenario[0].x + "px";

  ch2.style.display = "block";
  ch2.style.bottom = scenario[1].y + "px";
  ch2.style.left = scenario[1].x + "px";

  ch3.style.display = "block";
  ch3.style.bottom = scenario[2].y + "px";
  ch3.style.left = scenario[2].x + "px";

  let btnHint = document.querySelector(".hintBtn");
  btnHint.style.display = "block";

  btnHint.addEventListener("click", () => {
    let hint = document.querySelector(".hint");
    hint.style.display = "block";

    let hintTxt = document.querySelector(".hintTxt");
    let displayHint = scenario[0].hint;
    hintTxt.innerHTML = `<p class="hintTxt">${displayHint}</p>`;
  });

  let whereis = document.querySelector(".whereis");
  whereis.style.display = "block";

  let cityName = scenario[0].cityName;
  whereis.innerHTML = `<h2>Where is</h2>
    <p class="cityName">${cityName}</p>`;

  let nbofrounds = document.querySelector(".nbofrounds");
  nbofrounds.style.display = "block";
  nbofrounds.innerHTML = `${flow.currentScenario + 1} of ${scenari.length}`;

ch1.addEventListener("click", () => {
    console.log("btn1")
  displayAnswer(scenario[0].choice, scenario[0].cityText, scenario[0].img);
});

ch2.addEventListener("click", () => {
  console.log("btn2")
  displayAnswer(scenario[1].choice, scenario[1].cityText, scenario[1].img);
});

ch3.addEventListener("click", () => {
  console.log("btn3")
  displayAnswer(scenario[2].choice, scenario[2].cityText, scenario[2].img);
});

}



// addEventListener

btnStart.addEventListener("click", () => {
  let startmenu = document.querySelector("#startmenu");
  startmenu.style.display = "none";

  btnNextg.addEventListener("click", () => {
    let goodChoice = document.querySelector(".goodChoice");
    goodChoice.style.display = "none";

    printScenario(flow.nextScenario());
  });

  btnNextw.addEventListener("click", () => {
    let wrongChoice = document.querySelector(".wrongChoice");
    wrongChoice.style.display = "none";

    printScenario(flow.nextScenario());
  });

  printScenario(flow.nextScenario());
});

btnHtp.addEventListener("click", () => {
  printPopUp(htp);
});

ctabHtp.addEventListener("click", () => {
  let htp = document.querySelector(".htp");
  htp.style.display = "none";
});



playHtp.addEventListener("click", () => {
  let startmenu = document.querySelector("#startmenu");
  startmenu.style.display = "none";
  htp.style.display = "none";

  btnNextg.addEventListener("click", () => {
    let goodChoice = document.querySelector(".goodChoice");
    goodChoice.style.display = "none";

    printScenario(flow.nextScenario());
  });

  btnNextw.addEventListener("click", () => {
    let wrongChoice = document.querySelector(".wrongChoice");
    wrongChoice.style.display = "none";

    printScenario(flow.nextScenario());
  });

  printScenario(flow.nextScenario());
});

ctabHint.addEventListener("click", () => {
  let hint = document.querySelector(".hint");
  hint.style.display = "none";
});

// first : title page
// howToPlay() = afficher pop up qui explique les règles du jeu
//click on start > load printBackground() = supprimer l'accueil, afficher la carte vite, le "where is", le hint
// printScenario (scenario, hint) x5 = afficher nom de la ville, remplir le hint, afficher les positions, afficher le 1/5 correspondant
//+ afficher les pop ups dans des fonctions séparées popUp(objet qui correspond à la ville ou elle a été cliqué
// + fonction hintPopUp()
//printEndGame() = afficher pop up de fin avec score
// bouton : play again qui refresh la page
