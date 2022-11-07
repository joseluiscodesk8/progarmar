let botonMascota = document.getElementById("boton-mascota");

botonMascota.addEventListener("click", sMascota);


// VARIABLES GOBLALES 

let ataque;

let ataqueEnemigo;

let cell;

let vidas = 3;
let enemigo = 3;


//DESAPARECER

let esconder = document.getElementById('ataque');
esconder.style.display = "none";

let smooth = document.getElementById('reiniciar');
smooth.style.display = "none";

// BOTONES DE ATAQUE

let botonFuego = document.getElementById("boton-fuego");
botonFuego.addEventListener("click", ataqueFuego);

let botonAgua = document.getElementById("boton-agua");
botonAgua.addEventListener("click", ataqueAgua);

let botonTierra = document.getElementById("boton-tierra");
botonTierra.addEventListener("click", ataqueTierra);


//BOTON REINICIAR

let reiniciar = document.getElementById('reiniciar');
reiniciar.addEventListener('click', reiniciarJuego);

// SELECCIONAR MASCOTA

function sMascota () {

    let esconderMascota = document.getElementById('mascotas');
    esconderMascota.style.display = 'none';

    let esconder = document.getElementById('ataque');
    esconder.style.display = "flex";

    let charmander = document.getElementById("charmander");
    let blobasor = document.getElementById("blobasor");
    let turtle = document.getElementById("turtle");
    let spanMAscota = document.getElementById("mascota-jugador");

    if(charmander.checked) {
        spanMAscota.innerHTML = " MANIGOLDO ";
    } else if (blobasor.checked) {
        spanMAscota.innerHTML = " ALFABICA ";
    } else if (turtle.checked) {
        spanMAscota.innerHTML = " SHAKA ";
    } else {
        alert("elije");
    }

    llegada();
    enemigoMascota();
    
}

function enemigoMascota() {

    let ataqueAleatoreo = juego(1, 3);
    let mascotaEnemigo = document.getElementById("mascota-enemigo");

    let img = document.createElement('img');
    img.style.width = "100px";
    let img2 = document.createElement('img');
    img2.style.width = "100px";
    let img3 = document.createElement('img');
    img3.style.width = "100px";

    
    if (ataqueAleatoreo == 1) {
        mascotaEnemigo.innerHTML = " MANIGOLDO ";
        img.src ="../public/m2.jpg"
        skate.appendChild(img);
    } else if (ataqueAleatoreo == 2) {
        mascotaEnemigo.innerHTML = " ALFABICA ";
        img2.src = "../public/a2.jpg";
        skate.appendChild(img2);
    } else  {
        mascotaEnemigo.innerHTML = " SHAKA ";
        img3.src = "../public/v1.jpg";
        skate.appendChild(img3);
    }

}

// TIPOS DE ATAQUE

function ataqueFuego() {
    ataque = "DEMONIC FLAMES";
    aleatorioEnemigo();
}


function ataqueAgua() {
    ataque = "DIABLOIC ROSES";
    aleatorioEnemigo();
}

function ataqueTierra() {
    ataque = "TREASURE OD HEAVEN";
    aleatorioEnemigo();
}

// ATAQUE ENEMIGO 


function aleatorioEnemigo() {

    let ataqueAleatorio = juego(1,3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "DEMONIC FLAMES";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "DIABLOIC ROSES";
    } else {
        ataqueEnemigo = "TREASURE OD HEAVEN";
    }
    
   combate();

}

// COMBATE

function combate() {

    let vidasJugador = document.getElementById('vidas-jugador');
    let vidasEnemigo = document.getElementById('vidas-enemigo');
    
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

    let charmander = document.getElementById("charmander");
    let blobasor = document.getElementById("blobasor");
    let turtle = document.getElementById("turtle");

    let img = document.createElement('img');
    // img.src = "../public/a2.jpg"
    img.style.width = "100px";

    let img2 = document.createElement('img');
    // img2.src = "../public/m2.jpg";
    img2.style.width = "100px";
    
    let img3 = document.createElement('img');
    // img3.src = "../public/v1.jpg";
    img3.style.width = "100px";

    let skate = document.getElementById('skate');
    // skate.appendChild(img);
    // skate.appendChild(img2);
    // skate.appendChild(img3);

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

    let sectionMensajes = document.getElementById("mensaje");
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

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = true;

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = true;

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = true;
}

// Vidas

function revisicionVidas() {

    if(enemigo === 0) {
        final('ganaste');
    } else if (enemigo === 0) {
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
