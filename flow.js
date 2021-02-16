class Flow {
    constructor (scenari){
    this.scenari = scenari;
    this.currentScenario = -1;
    this.score = 0;
    };
    

nextScenario(){

    this.currentScenario += 1;
    if (this.currentScenario === this.scenari.length){
        this.endGame()
    } else {
    return this.scenari[this.currentScenario]
    };
};

endGame(){
    if (this.score > this.scenari.length /2){
        let congrats = document.querySelector("#congrats")
        congrats.style.display = "block"

        let btnEnd = document.querySelector("#congrats .btn");
        btnEnd.addEventListener('click', () =>{
            window.location.reload();
        })
    } else {
        let tryagain = document.querySelector("#tryagain")
        tryagain.style.display = "block"

        let btnEnd = document.querySelector("#tryagain .btn");
        btnEnd.addEventListener('click', () =>{
            window.location.reload();
        })
    }
}

}