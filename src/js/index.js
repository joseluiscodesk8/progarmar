let knights = [];
let options;
let attack;
let attackKnights = [];
// let attackEnemy = [];
let knightPlayer;

let charter;
let buttonsAttack = [];

let attackPlayer;
let attackEnemy;

let max = 5;
let min = 1;

let indexAttackplayer;
let indexAttackEnemy;

// CHARTERS

const charterPlayer = document.getElementById("charter_player");
const charterSelected = document.getElementById("charter_selected");
const charterEnemy = document.getElementById("charter_enemy");
const spanPlayer = document.getElementById("knight-player");

// BUTTONS OF ATTACK
let section_button = document.getElementById("buttons");

// CHOOSE

let choose_charter = document.getElementById("button-charter");
choose_charter.addEventListener("click", selectionKnightsNames);

//  LIFES

let lifePlayer = document.getElementById("lifes-player");
let lifesEnemy = document.getElementById("lifes-enemy");
let playerLife = 3;
let enemyLife = 3;
lifePlayer.innerHTML = playerLife;
lifesEnemy.innerHTML = enemyLife;

//HIDE

let hideAttack = document.getElementById("attack");
hideAttack.style.display = "none";

window.addEventListener("DOMContentLoaded", playerCharter());

/// RENDER CHARTES

function playerCharter() {
  knights.push(
    aries,
    tauro,
    geminis,
    cancer,
    leo,
    virgo,
    libra,
    escorpion,
    sagitario,
    capricornio,
    acuario,
    picis
  );

  knights.forEach((knights) => {
    options = `
    <section
          class="soilder">
          <img src=${knights.img}  alt=${knights.name}/>
          <label for=${knights.name}>${knights.name}</label>
          <input type="radio" name="charterPlayer" id=${knights.name} />
      </section>
`;
    charterPlayer.innerHTML += options;

    shion = document.getElementById("ARIES");
    hasgrad = document.getElementById("TAURO");
    aspros = document.getElementById("GEMINIS");
    manigoldo = document.getElementById("CANCER");
    regulus = document.getElementById("LEO");
    asmita = document.getElementById("VIRGO");
    dohko = document.getElementById("LIBRA");
    kardia = document.getElementById("ESCORPION");
    sisifo = document.getElementById("SAGITARIO");
    cid = document.getElementById("CAPRICORNIO");
    degel = document.getElementById("ACUARIO");
    alfabica = document.getElementById("PICIS");
  });
}
/// RENDER ENEMY CHARTER

function enemyCharter() {
  let aleatorio = selection(0, knights.length - 1);

  charterEnemy.innerHTML = knights[aleatorio].name;

  let aries = document.createElement("img");
  let tauro = document.createElement("img");
  let geminis = document.createElement("img");
  let cancer = document.createElement("img");
  let leo = document.createElement("img");
  let virgo = document.createElement("img");
  let libra = document.createElement("img");
  let escorpion = document.createElement("img");
  let sagitario = document.createElement("img");
  let capricornio = document.createElement("img");
  let acurio = document.createElement("img");
  let picis = document.createElement("img");

  if (aleatorio == 0) {
    aries.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(aries);
  } else if (aleatorio == 1) {
    tauro.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(tauro);
  } else if (aleatorio == 2) {
    geminis.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(geminis);
  } else if (aleatorio == 3) {
    cancer.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(cancer);
  } else if (aleatorio == 4) {
    leo.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(cancer);
  } else if (aleatorio == 5) {
    virgo.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(virgo);
  } else if (aleatorio == 6) {
    libra.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(libra);
  } else if (aleatorio == 7) {
    escorpion.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(escorpion);
  } else if (aleatorio == 8) {
    sagitario.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(sagitario);
  } else if (aleatorio == 9) {
    virgo.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(virgo);
  } else if (aleatorio == 10) {
    acuario.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(acurio);
  } else if (aleatorio == 11) {
    picis.src = `${knights[aleatorio].img}`;
    charterEnemy.appendChild(picis);
  }
}

// SLECTION CHARTERS

function selected() {
  let SHION = document.createElement("img");
  let HASGRAD = document.createElement("img");
  let ASPROS = document.createElement("img");
  let MANIGOLDO = document.createElement("img");
  let REGULUS = document.createElement("img");
  let ASMITA = document.createElement("img");
  let DOHKO = document.createElement("img");
  let KARDIA = document.createElement("img");
  let SISIFO = document.createElement("img");
  let CID = document.createElement("img");
  let DEGEL = document.createElement("img");
  let ALFABICA = document.createElement("img");

  if (shion.checked) {
    SHION.src = "../../public/aries.jpg";
    charterSelected.appendChild(SHION);
  } else if (hasgrad.checked) {
    HASGRAD.src = `../../public/tauro.jpg`;
    charterSelected.appendChild(HASGRAD);
  } else if (aspros.checked) {
    ASPROS.src = `../../public/geminis.jpg`;
    charterSelected.appendChild(ASPROS);
  } else if (manigoldo.checked) {
    MANIGOLDO.src = `../../public/cancer.jpg`;
    charterSelected.appendChild(MANIGOLDO);
  } else if (regulus.checked) {
    REGULUS.src = "../../public/leo.jpg";
    charterSelected.appendChild(REGULUS);
  } else if (asmita.checked) {
    ASMITA.src = "../../public/virgo.jpg";
    charterSelected.appendChild(ASMITA);
  } else if (dohko.checked) {
    DOHKO.src = "../../public/libra.jpg";
    charterSelected.appendChild(DOHKO);
  } else if (kardia.checked) {
    KARDIA.src = "../../public/escorpion.jpg";
    charterSelected.appendChild(KARDIA);
  } else if (sisifo.checked) {
    SISIFO.src = "../../public/sagitario.jpg";
    charterSelected.appendChild(SISIFO);
  } else if (cid.checked) {
    CID.src = "../../public/capricornio.jpg";
    charterSelected.appendChild(CID);
  } else if (degel.checked) {
    DEGEL.src = "../../public/acuario.jpg";
    charterSelected.appendChild(DEGEL);
  } else {
    ALFABICA.src = "../../public/picis.jpg";
    charterSelected.appendChild(ALFABICA);
  }
}

function selectionKnightsNames() {
  let hideKnights = document.getElementById("knights");
  hideKnights.style.display = "none";

  let hideAttack = document.getElementById("attack");
  hideAttack.style.display = "flex";

  if (shion.checked) {
    spanPlayer.innerHTML = shion.id;
    charter = shion.id;
  } else if (hasgrad.checked) {
    spanPlayer.innerHTML = hasgrad.id;
    charter = hasgrad.id;
  } else if (aspros.checked) {
    spanPlayer.innerHTML = aspros.id;
    charter = aspros.id;
  } else if (manigoldo.checked) {
    spanPlayer.innerHTML = manigoldo.id;
    charter = manigoldo.id;
  } else if (regulus.checked) {
    spanPlayer.innerHTML = regulus.id;
    charter = regulus.id;
  } else if (asmita.checked) {
    spanPlayer.innerHTML = asmita.id;
    charter = asmita.id;
  } else if (dohko.checked) {
    spanPlayer.innerHTML = dohko.id;
    charter = dohko.id;
  } else if (kardia.checked) {
    spanPlayer.innerHTML = kardia.id;
    charter = kardia.id;
  } else if (sisifo.checked) {
    spanPlayer.innerHTML = sisifo.id;
    charter = sisifo.id;
  } else if (cid.checked) {
    spanPlayer.innerHTML = cid.id;
    charter = cid.id;
  } else if (degel.checked) {
    spanPlayer.innerHTML = degel.id;
    charter = degel.id;
  } else {
    spanPlayer.innerHTML = alfabica.id;
    charter = alfabica.id;
  }
  selected();
  enemyCharter();
  selectedButton();
  // combat();
}

/// BUTTONS

function selectedButton() {
  if (shion.checked) {
    buttonAries();
  } else if (hasgrad.checked) {
    buttonTauro();
  } else if (aspros.checked) {
    buttonGeminis();
  } else if (manigoldo.checked) {
    buttonCancer();
  }

  // enemyAttack();
}

/// ATTACK

function playerAttack() {
  attackPlayer = selection(1, 5);
  console.log(attackPlayer);
  enemyAttack();
  combat();
}

function enemyAttack() {
  attackEnemy = selection(1, 5);
  console.log(attackEnemy);
}

// LIFE

function checkLife() {
  if (lifesEnemy == 0) {
    alert("ganaste");
  } else {
    console.log("perdiste");
  }
}

/// COMBAT

function combat() {
  if (attackPlayer < attackEnemy) {
    playerLife--;
    lifePlayer.innerHTML = playerLife;
    console.log("menor");
  } else if (attackPlayer > attackEnemy) {
    enemyLife--;
    lifesEnemy.innerHTML = enemyLife;
    console.log("mayor");
  } else {
    console.log("empate");
  }
  checkLife();
}

/////////////////////
function selection(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reloadGame() {
  location.reload();
}

function stylesKnights() {
  charterPlayer.className = "skate";
}

stylesKnights();
///////////////////////

//////LAZYLOAD/////////

// let totalimg = 0;
// let loadedimg = 0;

// let optionsObserver = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.0,
// };

// let observer = new IntersectionObserver(playerCharter, optionsObserver);
// observer.observe(knights);

// console.log(observer);

// const isIntersecting = playerCharter.isIntersecting;
// console.log(playerCharter);
// function loadImg(intersectionEntry) {
//   const imgNode = intersectionEntry.target;
//   imgNode.src = `../../public/aries.jpg`;
//   imgNode.onload = () => {
//     loadedimg += 1;
//   };
//   observer.unobserve(imgNode);
// }

// loadImg();
