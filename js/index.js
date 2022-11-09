// VARIABLES GOBLALES 

let ataque;
let ataqueEnemigo =[];

let vidas = 3;
let enemigo = 3;

let caballeros = [];
let opciones;

let charmander;
let blobasor;
let turtle;

let petJugador;

let ataquesCaballeros;
let ataqueCaballeroEnemigo;

let botonFuego;
let botonAgua;
let botonTierra;

let ataqueCaballeros;

let botones = [];
let ataqueJugador = [];

//DESAPARECER

let esconder = document.getElementById('ataque');
esconder.style.display = "none";

let smooth = document.getElementById('reiniciar');
smooth.style.display = "none";

// BOTONES 

let botonMascota = document.getElementById("boton-mascota");
botonMascota.addEventListener("click", sMascota);

// let botonFuego = document.getElementById("boton-fuego");
// botonFuego.addEventListener("click", ataqueFuego);

// let botonAgua = document.getElementById("boton-agua");
// botonAgua.addEventListener("click", ataqueAgua);

// let botonTierra = document.getElementById("boton-tierra");
// botonTierra.addEventListener("click", ataqueTierra);

let reiniciar = document.getElementById('reiniciar');
reiniciar.addEventListener('click', reiniciarJuego);


//PERSONAJES 


const spanMascota = document.getElementById("mascota-jugador");
const mascotaEnemigo = document.getElementById("mascota-enemigo");

//SECTIONS

const pet = document.getElementById('pet');

//VIDAS 

const vidasJugador = document.getElementById('vidas-jugador');
const vidasEnemigo = document.getElementById('vidas-enemigo');

//LLEGADA

const skate = document.getElementById('skate');


//MENSAJE

let sectionMensajes = document.getElementById("mensaje");


//CLASS

class Caballeros {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataque = [];
    }
}

let manigoldo = new Caballeros('MANIGOLDO',  '../public/m1.jpg',  3);
let alfabica = new Caballeros('ALFABICA', '../public/a1.jpg',  3);
let shaka = new Caballeros('SHAKA', '../public/v1.jpg',  3);

manigoldo.ataque.push(
    { nombre: "flamas demoniacas", id: 'boton-fuego'},
    { nombre: 'tezorro del cielo', id: 'boton-tierra'},
    { nombre: 'rosas demoniacas', id: 'boton-agua'}
);

alfabica.ataque.push(
    { nombre: "flamas demoniacas", id: 'boton-fuego'},
    { nombre: 'tezorro del cielo', id: 'boton-tierra'},
    { nombre: 'rosas demoniacas', id: 'boton-agua'}
);

shaka.ataque.push(
    { nombre: "flamas demoniacas", id: 'boton-fuego'},
    { nombre: 'tezorro del cielo', id: 'boton-tierra'},
    { nombre: 'rosas demoniacas', id: 'boton-agua'}
);


// ITERACION

caballeros.push(manigoldo, alfabica, shaka);

caballeros.forEach((caballeros) => {
    opciones =`
        <section class="soilder">
            <img src=${caballeros.foto}  alt=${caballeros.nombre}/>
            <label for="charmander">${caballeros.nombre}</label>
            <input type="radio" name="mascota" id=${caballeros.nombre} />
        </section>
    `;

    pet.innerHTML += opciones;

    charmander = document.getElementById("MANIGOLDO");
    blobasor = document.getElementById("ALFABICA");
    turtle = document.getElementById("SHAKA");
})

// SELECCIONAR MASCOTA

function sMascota () {

    let esconderMascota = document.getElementById('mascotas');
    esconderMascota.style.display = 'none';

    let esconder = document.getElementById('ataque');
    esconder.style.display = "flex";

    if(charmander.checked) {
        spanMascota.innerHTML = charmander.id;
        petJugador = charmander.id;
    } else if (blobasor.checked) {
        spanMascota.innerHTML = blobasor.id;
        petJugador = blobasor.id;
    } else if (turtle.checked) {
        spanMascota.innerHTML = turtle.id;
        petJugador = turtle.id;
    } else {
        alert("elije");
    }

    extraerAtaques(petJugador);
    llegada();
    enemigoMascota();
    
}

function extraerAtaques(petJugador) {
    let ataques;

    for (let i = 0; i < caballeros.length; i++) {
        if (petJugador === caballeros[i].nombre) {
            ataques = caballeros[i].ataque;
        }
    }

    console.log(ataques);
    mostarAtaques(ataques);
}    

function mostarAtaques(ataques) {
    ataques.forEach((ataques) => {
        ataquesCaballeros = `
        <button id=${ataques.id} class="botones-de-ataque" >${ataques.id}</button>
        `;

        esconder.innerHTML += ataquesCaballeros;
    })

    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    // botonFuego.addEventListener("click", ataqueFuego);
    // botonAgua.addEventListener("click", ataqueAgua);
    // botonTierra.addEventListener("click", ataqueTierra);
    botones = document.querySelectorAll('.botones-de-ataque');

    // console.log(botones);

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e);
            if (e.target.textContent === 'boton-fuego') {
                ataqueJugador.push('DEMONIC FLAMES');
                console.log(ataqueJugador);
                boton.style.background = '#1416';
            } else if (e.target.textContent === 'boton-agua') {
                ataqueJugador.push('DIABLOIC ROSES');
                console.log(ataqueJugador);
                boton.style.background = '#1416';
            } else {
                ataqueJugador.push('TREASURE OD HEAVEN');
                console.log(ataqueJugador);
                boton.style.background = '#1416';
            }
        });
    })

    aleatorioEnemigo();
    
}

function enemigoMascota() {

    let aleatoreo = juego(0, caballeros.length -1);

    mascotaEnemigo.innerHTML = caballeros[aleatoreo].nombre;

    // let img = document.createElement('img');
    // img.style.width = "100px";
    // let img2 = document.createElement('img');
    // img2.style.width = "100px";
    // let img3 = document.createElement('img');
    // img3.style.width = "100px";
    
    // if (aleatoreo == 0) {
    //     img.src ="../public/m2.jpg"
    //     skate.appendChild(img);
    // } else if (aleatoreo == 1) {
    //     img2.src = "../public/a2.jpg";
    //     skate.appendChild(img2);
    // } else  {
    //     img3.src = "../public/v1.jpg";
    //     skate.appendChild(img3);
    // }

    ataqueCaballeroEnemigo = caballeros[aleatoreo].ataque;
    secuenciaAtaque();

}

// ATAQUE ENEMIGO 


function aleatorioEnemigo() {

    let ataqueAleatorio = juego(0, ataqueCaballeros.length -1);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo.push("DEMONIC FLAMES");
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo.push("DIABLOIC ROSES");
    } else {
        ataqueEnemigo.push("TREASURE OD HEAVEN");
    }
    console.log(ataqueAleatorio);
   combate();

}

// COMBATE

function combate() {

    if(ataque == ataqueEnemigo) {
        mensaje('Empate');
    } else if((ataque == 'DEMONIC FLAMES' && ataqueEnemigo == 'TREASURE OD HEAVEN') || (ataque == 'DIABLOIC ROSES' && ataqueEnemigo == 'DEMONIC FLAMES') || (ataque == 'TREASURE OD HEAVEN' && ataqueEnemigo == 'DIABLOIC ROSES')) {
        mensaje('ganaste');
        enemigo--;
        vidasEnemigo.innerHTML = enemigo;
    } else {
        mensaje('perdiste');
        vidas--;
        vidasJugador.innerHTML = vidas;
        }
        revisicionVidas();
}


// CREAR MENSAJE

function llegada() {

    let img = document.createElement('img');
    img.style.width = "100px";

    let img2 = document.createElement('img');
    img2.style.width = "100px";
    
    let img3 = document.createElement('img');
    img3.style.width = "100px";

    // condicion

    if (charmander.checked) {
        img.src ="../public/m2.jpg"
        skate.appendChild(img);
    } else if (blobasor.checked) {
        img2.src = "../public/a2.jpg";
        skate.appendChild(img2);
    } else if (turtle.checked){
        img3.src = "../public/v1.jpg";
        skate.appendChild(img3);
    }

}



function mensaje(resultado) {

    let parrafo = document.createElement('p');
    parrafo.innerHTML = "you attacked with " + ataque + " your enemy attacked with " + ataqueEnemigo + ' result ' + resultado;

  
    sectionMensajes.appendChild(parrafo);


}


//MENSAJE FINAL

function final(resultado) {

    let smooth = document.getElementById('reiniciar');
    smooth.style.display = "block";

    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultado;

    let sectionMensaje = document.getElementById('mensaje');
    sectionMensaje.appendChild(parrafo);

    botonFuego.disabled = true;


    botonAgua.disabled = true;


    botonTierra.disabled = true;
}

// Vidas

function revisicionVidas() {

    if(enemigo == 0) {
        final('ganaste');
    } else if (enemigo == 0) {
        final('perdiste');
    }

}

// REINICIAR JUEGO

function reiniciarJuego() {
    location.reload();
}

function juego(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
