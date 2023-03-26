let knights = [];
let options;
let attack;
let attackEnemy = [];
let knightPlayer;
// CHARTERS

const charter = document.getElementById("charter");
const charterPlayer = document.getElementById("charter-player");
const charterEnemy = document.getElementById("charter-enemy");

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
            <label for="shion">${knights.name}</label>
            <input type="radio" name="charter" id=${knights.name} />
        </section>
  `;
    charter.innerHTML += options;
    console.log(charter);
  });
}

/// RENDER ENEMY CHARTER

playerKnights();

function enemyCharter() {
  let aleatorio = selection(0, knights.length - 1);

  charterEnemy.innerHTML = knights[aleatorio].name;

  console.log(charterEnemy);
}

function selectionKnights() {
  let hideKnights = document.getElementById("knights");
  hideKnights.style.display = "none";

  let hideAttack = document.getElementById("attack");
  hideAttack.style.display = "flex";

  if (shion.checked) {
    charterPlayer.innerHTML = aries.id;
    knightPlayer = aries.id;
  } else if (hasgrad.checked) {
    charterPlayer.innerHTML = tauro.id;
    knightPlayer = tauro.id;
  } else {
    alert("elije attack");
  }

  enemyCharter();
}

// selectionKnights();

function selection(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reloadGame() {
  location.reload();
}
