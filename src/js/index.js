let knights = [];
let options;
let attack;
let attackKnights = [];
let attackEnemy = [];
let knightPlayer;

let buttons = [];

// CHARTERS

const charterPlayer = document.getElementById("charter_player");
const charterEnemy = document.getElementById("charter_enemy");
const spanPlayer = document.getElementById("knight-player");

// BUTTONS OF ATTACK
let button_one = document.getElementById("button_one");
let button_two = document.getElementById("button_two");
let button_three = document.getElementById("button_three");
let button_four = document.getElementById("button_four");

// CHOOSE

let choose_charter = document.getElementById("button-charter");
choose_charter.addEventListener("click", selectionKnights);

//  LIFES

const lifePlayer = document.getElementById("lifes-player");
const lifesEnemy = document.getElementById("lifes-enemy");

//HIDE

let hideAttack = document.getElementById("attack");
hideAttack.style.display = "none";

/// RENDER CHARTES

function playerKnights() {
  knights.push(aries, tauro, geminis, cancer);

  knights.forEach((knights) => {
    options = `
  <section class="soilder">
            <img src=${knights.img}  alt=${knights.name}/>
            <label for=${knights.name}>${knights.name}</label>
            <input type="radio" name="charterPlayer" id=${knights.name} />
        </section>
  `;
    charterPlayer.innerHTML += options;
  });
}

/// RENDER ENEMY CHARTER

playerKnights();

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
  }
}

// SLECTION CHARTERS

function selectionKnights() {
  let hideKnights = document.getElementById("knights");
  hideKnights.style.display = "none";

  let hideAttack = document.getElementById("attack");
  hideAttack.style.display = "flex";

  // if (aries.checked) {
  //   spanPlayer.innerHTML = aries.id;
  //   charterPlayer = aries.id;
  //   console.log("selection");
  // }
  // } else if (hasgrad.checked) {
  //   charterPlayer.innerHTML = tauro.id;
  //   knightPlayer = tauro.id;
  // } else {
  //   alert("elije TU CHARTER");
  // }
  enemyCharter();
}

// selectionKnights();

// BUTTONS OF ATTACK

// function buttonsAttack(attacks) {
//   attacks.forEach((attacks) => {
//     attackKnights = `
//     <button id=${knights[aleatorio]}>skate</button>
//     `;
//     hideAttack.innerHTML += attackKnights;
//   });
//   console.log("attachj");
// }

function selection(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reloadGame() {
  location.reload();
}
