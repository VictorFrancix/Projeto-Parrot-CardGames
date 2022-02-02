function PedirNumeroCartas(){
    const numerocartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
    if(numerocartas > 14 || numerocartas < 4 || numerocartas%2!==0){
        PedirNumeroCartas();
    }else{
    alert(numerocartas);
    }
    }
PedirNumeroCartas();

