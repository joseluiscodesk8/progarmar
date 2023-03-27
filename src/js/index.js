let knights = [];
let options;
let attack;
let attackEnemy = [];
let knightPlayer;

let buttons = [];

// CHARTERS

const charter = document.getElementById("charter_player");
const charter_enemy = document.getElementById("chater_enemy");
const charterPlayer = document.getElementById("charter-player");
const charterEnemy = document.getElementById("charter-enemy");

// BUTTONS OF ATTACK
let button_one = document.getElementById("button_one");
let button_two = document.getElementById("button_two");
let button_three = document.getElementById("button_three");
let button_four = document.getElementById("button_four");
console.log(button_one);

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
  knights.push(aries, tauro);

  knights.forEach((knights) => {
    options = `
  <section class="soilder">
            <img src=${knights.img}  alt=${knights.name}/>
            <label for="">${knights.name}</label>
            <input type="radio" name="charter" id=${knights.name} />
        </section>
  `;
    charter.innerHTML += options;
  });
}

/// RENDER ENEMY CHARTER

playerKnights();

function enemyCharter() {
  // let aleatorio = selection(0, knights.length - 1);
  // charterEnemy.innerHTML = knights[aleatorio].name;
  // let img = document.createElement("img");
  // img.style.width = "100px";
  // img.src = "../../public/aries.jpg";
  // charter_enemy.appendChild(img);
  // let img2 = document.createElement("img");
  // img2.style.width = "100px";
  // if (aleatorio == 0) {
  //   img.src = "../../public/aries.jpg";
  //   charter_enemy.appendChild(img);
  // } else if (aleatorio == 1) {
  //   img2.src = "../../public/tauro.jpg";
  //   charter_enemy.appendChild(img2);
  // }
}

function selectionKnights() {
  let hideKnights = document.getElementById("knights");
  hideKnights.style.display = "none";

  let hideAttack = document.getElementById("attack");
  hideAttack.style.display = "flex";

  // if (shion.checked == shion) {
  //   charterPlayer.innerHTML = aries.id;
  //   knightPlayer = aries.id;
  //   console.log(charterPlayer);
  // }
  // } else if (hasgrad.checked) {
  //   charterPlayer.innerHTML = tauro.id;
  //   knightPlayer = tauro.id;
  // } else {
  //   alert("elije attack");
  // }

  // enemyCharter();
}

// selectionKnights();

function selection(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reloadGame() {
  location.reload();
}
