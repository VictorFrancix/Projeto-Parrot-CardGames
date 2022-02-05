let parrots_array = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
parrots_array.sort(randomize);

let deck = document.querySelector(".deck");

function randomize() {
    return Math.random() - 0.5; 
}

function ChooseNumberCards() {
    let inputcards = parseInt(prompt("Com quantas cartas você quer jogar?"))
    while(inputcards%2!==0 || inputcards > 14 || inputcards < 4 ){
        inputcards = parseInt(prompt("Com quantas cartas você quer jogar?"));
    }

    let back_face_images = [];
    
    for(let i = 0; i<inputcards / 2; i++){
        back_face_images[2*i] = parrots_array[i];
        back_face_images[2*i+1] = parrots_array[i];
    }
    
    for(let i = 0; i < inputcards; i++ ){
        deck.innerHTML += `<div class="card"  data-identifier="card">
            <div class="front-face face" data-identifier="front-face">
                <img src="./images/front.png" alt = "parrot">
            </div>
            <div class="back-face face" data-identifier="back-face">
                <img src ="images/${back_face_images[i]}.gif" alt = "${back_face_images[i]}">
            </div>
        </div> `
    }
}
ChooseNumberCards()

