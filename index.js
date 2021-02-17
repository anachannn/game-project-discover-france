const scenari = [
  [
    {
      cityName: "Lyon",
      x: 520,
      y: 260,
      hint: "At the time of the Roman Empire, Lyon was the capital city of the Gauls.",
      choice: true,
      cityText:
        "Congrats! You found Lyon! At the time of the Roman Empire, it was the capital city of the Gauls. Today, it's the second-biggest city of France.",
      img: "img/lyon.jpeg",
    },
    {
      cityName: "Grenoble",
      x: 550,
      y: 195,
      choice: false,
      cityText: "You found Grenoble... But not Lyon!",
    },
    {
      cityName: "Clermont-Ferrand",
      x: 450,
      y: 270,
      choice: false,
      cityText: "You found Clermont-Ferrand... But not Lyon!",
    },
  ],
  [
    {
      cityName: "Biarritz",
      x: 225,
      y: 90,
      hint: "Biarritz is a touristic destination known for its surfing culture.",
      choice: true,
      cityText:
        "Congrats! You found Biarritz! Located close to the Spanish border, the city is a touristic destination since 1800. More recently, it is known for its surfing culture.",
      img: "img/biarritz.jpg",
    },
    {
      cityName: "Bordeaux",
      x: 260,
      y: 193,
      choice: false,
      cityText: "You found Bordeaux... But not Biarritz!",
    },
    {
      cityName: "Périgueux",
      x: 330,
      y: 200,
      choice: false,
      cityText: "You found Périgueux... But not Biarritz!",
    },
  ],
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
      hint: "Blois used to be the royal residency of several French kings.",
      choice: true,
      cityText:
        "Congrats! You found Blois! Its castle is famous for its four architectural styles and its staircase. ",
      img: "img/blois2.jpg",
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
      img: "img/cassis-calanque1.jpg",
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
let btnSound = document.querySelector(".sound");

let soundon = true;

const flow = new Flow(scenari);

//FUNCTIONS

function printPopUp(popup) {
  popup.style.display = "block";
}

function displayAnswer(answerch, answertxt, img) {
  if (answerch) {
    let goodChoice = document.querySelector(".goodChoice");
    goodChoice.style.display = "block";

    let soundYes = document.querySelector("#yes");
    if (soundon){
    soundYes.play()
    };

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
                          <audio id="soundStart" src="sounds/neutral-sound.mp3"></audio>
                          <div id="ch1" class="choice"> 
                            <img src="img/pointer.png" />
                        </div>
                        <div id="ch2" class="choice">
                            <img src="img/pointer.png" />
                        </div>
                        <div id="ch3" class="choice">
                             <img src="img/pointer.png" />
                        </div>`

let soundStart = document.querySelector("#soundStart");
if (soundon){
soundStart.play()
};

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

    let sc = flow.nextScenario();
    if (sc !=0 ){
    printScenario(sc);
    };
  });

  btnNextw.addEventListener("click", () => {
    let wrongChoice = document.querySelector(".wrongChoice");
    wrongChoice.style.display = "none";

    let sc = flow.nextScenario();
    if (sc !=0 ){
    printScenario(sc);
    };
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
    
    let sc = flow.nextScenario();
    if (sc !=0 ){
    printScenario(sc);
    };
  });

  btnNextw.addEventListener("click", () => {
    let wrongChoice = document.querySelector(".wrongChoice");
    wrongChoice.style.display = "none";

    let sc = flow.nextScenario();
    if (sc !=0 ){
    printScenario(sc);
    };
  });

  printScenario(flow.nextScenario());
});

ctabHint.addEventListener("click", () => {
  let hint = document.querySelector(".hint");
  hint.style.display = "none";
});

btnSound.addEventListener('click', () => {
  if (soundon) {
  btnSound.innerHTML = `<img class="imgsound" src="sounds/sound-off.png"></img>`
  soundon = false
} else {
  btnSound.innerHTML = `<img class="imgsound" src="sounds/sound-on.png"></img>`
  soundon = true
}
  

});

