let parrots = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

parrots.sort(comparador);

let deck = document.querySelector(".deck");
let back_face_images = [];
let cards = 0;
let flips = [];
let movements = 0;


function comparador() {
    return Math.random() - 0.5;
}

function ChooseNumberOfCards() {
    let inputcards = parseInt(prompt("Com quantas cartas você quer jogar?"))
    while(inputcards%2!==0 || inputcards > 14 || inputcards < 4 ){
        inputcards = parseInt(prompt("Com quantas cartas você quer jogar?"));
    }
    return inputcards
}

function CreateCards(cards) {
    for(let i = 0; i < cards / 2; i++){
        back_face_images[2*i] = parrots[i];
        back_face_images[2*i+1] = parrots[i];
    }
    
    for(let i = 0; i < cards; i++ ){
        deck.innerHTML += `<div class="card" onclick="FlipCard(this)" data-identifier="card">
            <div class="front-face" data-identifier="front-face">
                <img src="./images/front.png" alt = "parrot">
            </div>
            <div class="back-face" data-identifier="back-face">
                <img src ="images/${back_face_images[i]}.gif" alt = "${back_face_images[i]}">
            </div>
        </div> `
    }
}

function FlipCard(card) {
    card.classList.add("selected")
    flips = document.querySelectorAll(".selected")
    movements += 1
    if(flips.length > 1){
        if(flips[0].innerHTML === flips[1].innerHTML){
            for(let i = 0; i < flips.length; i++){
                flips[i].classList.add("check")
            }
        }
        setTimeout(
            `for (let i = 0; i < flips.length; i++){
                flips[i].classList.remove('selected')
            }`, 1000); 
    }


}

function play(){
    cards = ChooseNumberOfCards()
    CreateCards(cards)
}
play()
