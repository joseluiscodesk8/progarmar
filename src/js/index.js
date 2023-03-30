let knights = [];
let options;
let attack;
let attackKnights = [];
let attackEnemy = [];
let knightPlayer;

let charter;
let buttonsAttack = [];

let attackKnightEnemy;

// CHARTERS

const charterPlayer = document.getElementById("charter_player");
const charterSelected = document.getElementById("charter_selected");
const charterEnemy = document.getElementById("charter_enemy");
const spanPlayer = document.getElementById("knight-player");

// BUTTONS OF ATTACK
let button_one = document.getElementById("button_one");
let button_two = document.getElementById("button_two");
let button_three = document.getElementById("button_three");
let button_four = document.getElementById("button_four");
let section_button = document.getElementById("buttons");

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

function playerCharter() {
  knights.push(aries, tauro, geminis, cancer);

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
  });
}

playerCharter();

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
  }
}

// SLECTION CHARTERS

function selected() {
  let SHION = document.createElement("img");
  let HASGRAD = document.createElement("img");
  let ASPROS = document.createElement("img");
  let MANIGOLDO = document.createElement("img");

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
  }
}

function selectionKnights() {
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
  }
  selected();
  enemyCharter();
  selectedButton();
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
}

/// ATTACK

function playerAttack() {
  let playerAttack = selection(0, attackKnights.length - 1);
}

function enemyAttack() {
  let randomAttack = selection(0, attackKnightEnemy.length - 1);
  if (randomAttack == 0) {
    attackEnemy.push("skate");
    console.log(randomAttack);
  }
}

/////////////////////
function selection(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(selection);

function reloadGame() {
  location.reload();
}
