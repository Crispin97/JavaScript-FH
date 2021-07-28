/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntos = document.querySelectorAll('small');

const crearDeck = () => {
    deck = [];
    for(let i = 2; i <= 10; i++){
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
}

crearDeck();

const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN( valor )) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
}

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntos[1].innerText = puntosComputadora;
    
        // <img class="carta" src="assets/cartas/10C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);
        if(puntosMinimos > 21){
            break;
        }
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(()=>{
        if(puntosMinimos > 21){
            alert('Computadora gana.')
        }else if((puntosMinimos === puntosComputadora)){
            alert('Nadie gana.')
        }else if(puntosComputadora > 21){
            alert('Felicidades, ganaste!')
        }else{
            alert('Computadora gana')
        }
    }, 10)
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntos[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/10C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Lo siento, perdiste')
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn('21, genial')
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
})


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', ()=>{
    console.clear();
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    puntosComputadora = 0;
    puntosJugador = 0;

    crearDeck();
    puntos[0].innerText = 0;
    puntos[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
});