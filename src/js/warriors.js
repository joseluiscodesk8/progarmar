// Knights

let shion;
let hasgrad;
let aspros;
let manigoldo;
let regulus;
let asmita;
let dohko;
let kardia;
let sisifo;
let cid;
let degel;
let alfabica;

let life = 3;

class Knights {
  constructor(name, img, life) {
    this.name = name;
    this.img = img;
    this.life = life;
    this.buttonsAttack = [];
  }
}

let aries = new Knights("ARIES", "../public/aries.jpg", life);
let tauro = new Knights("TAURO", "../public/tauro.jpg", life);
let geminis = new Knights("GEMINIS", "../public/geminis.jpg", life);
let cancer = new Knights("CANCER", "../public/cancer.jpg", life);
let leo = new Knights("LEO", "../public/leo.jpg", life);
let virgo = new Knights("VIRGO", "../public/virgo.jpg", life);
let libra = new Knights("LIBRA", "../public/libra.jpg", life);
let escorpion = new Knights("ESCORPION", "../public/escorpion.jpg", life);
let sagitario = new Knights("SAGITARIO", "../public/sagitario.jpg", life);
let capricornio = new Knights("CAPIRCORNIO", "../public/capricornio.jpg", life);
let acuario = new Knights("ACUARIO", "../public/acuario.jpg", life);
let picis = new Knights("PICIS", "../public/picis.jpg", life);

//// ATTACK

let button_one;
let button_two;
let button_three;
let button_four;

class ButtonsAttack {
  constructor(name_one, name_two, name_three, name_four) {
    this.name_one = name_one;
    this.name_two = name_two;
    this.name_three = name_three;
    this.name_four = name_four;
  }
}

let oneHome = new ButtonsAttack(
  "CRYSTAL WALL",
  "STARLIGHT EXTINCTION",
  "STARDUST REVOLUTION",
  "CRYSTAL NET"
);

let twoHome = new ButtonsAttack(
  "GREAT HRON",
  "TITANIC SUPERNOVA",
  "EXPLOSIVE CHARGE",
  "GALATIC QUAKE"
);

let threeHome = new ButtonsAttack(
  "GALAXY EXPLOSION",
  "TO ANOTHER DIMENSION",
  "DOUBLE FACE DAMNED",
  "DARK CURSE"
);

let fourHome = new ButtonsAttack(
  "DEMONIC FLAMES",
  "SOUL EXPLOSION",
  "UNDERWORLD",
  "DEATH DIMENSION"
);

// BUTTONS OF ATTACK

function buttonAries() {
  buttonsAttack.push(oneHome);

  buttonsAttack.forEach((buttonsAttack) => {
    attack = `
    <button id=${buttonsAttack.name_one}>${buttonsAttack.name_one}</button>
    <button id=${buttonsAttack.name_two}>${buttonsAttack.name_two}</button>
    <button id=${buttonsAttack.name_three}>${buttonsAttack.name_three}</button>
    <button id="NET">${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;

    button_one = document.getElementById("CRYSTAL");
    button_one.onclick = playerAttack;
    button_two = document.getElementById("STARLIGHT");
    button_two.onclick = playerAttack;
    button_three = document.getElementById("STARDUST");
    button_three.onclick = playerAttack;
    button_four = document.getElementById("NET");
    button_four.onclick = playerAttack;
  });
}

function buttonTauro() {
  buttonsAttack.push(twoHome);

  buttonsAttack.forEach((buttonsAttack) => {
    attack = `
    <button id="GREAT">${buttonsAttack.name_one}</button>
    <button id="SUPERNOVA">${buttonsAttack.name_two}</button>
    <button id="EXPLOSIVE">${buttonsAttack.name_three}</button>
    <button id="GALATIC">${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;

    button_one = document.getElementById("GREAT");
    button_one.onclick = playerAttack;
    button_two = document.getElementById("SUPERNOVA");
    button_two.onclick = playerAttack;
    button_three = document.getElementById("EXPLOSIVE");
    button_three.onclick = playerAttack;
    button_four = document.getElementById("GALATIC");
    button_four.onclick = playerAttack;
  });
}

function buttonGeminis() {
  buttonsAttack.push(threeHome);

  buttonsAttack.forEach((buttonsAttack) => {
    attack = `
    <button id="GALAXY">${buttonsAttack.name_one}</button>
    <button id="DIMENSION">${buttonsAttack.name_two}</button>
    <button id="DAMNED">${buttonsAttack.name_three}</button>
    <button id="CURSE">${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;

    button_one = document.getElementById("GALAXY");
    button_one.onclick = playerAttack;
    button_two = document.getElementById("DIMENSION");
    button_two.onclick = playerAttack;
    button_three = document.getElementById("DAMNED");
    button_three.onclick = playerAttack;
    button_four = document.getElementById("CURSE");
    button_four.onclick = playerAttack;
  });
}

function buttonCancer() {
  buttonsAttack.push(fourHome);

  buttonsAttack.forEach((buttonsAttack) => {
    attack = `
    <button id="FLAMES">${buttonsAttack.name_one}</button>
    <button id="SOUL">${buttonsAttack.name_two}</button>
    <button id="UNDERWORLD">${buttonsAttack.name_three}</button>
    <button id="DEATH">${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;

    button_one = document.getElementById("FLAMES");
    button_one.onclick = playerAttack;
    button_two = document.getElementById("SOUL");
    button_two.onclick = playerAttack;
    button_three = document.getElementById("UNDERWORLD");
    button_three.onclick = playerAttack;
    button_four = document.getElementById("DEATH");
    button_four.onclick = playerAttack;
  });
}
