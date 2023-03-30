let life = 3;

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

class Knights {
  constructor(name, img, life) {
    this.name = name;
    this.img = img;
    this.life = life;
    // this.attack = [];
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
    <button id=${buttonsAttack.name_four}>${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;
  });
}

function buttonTauro() {
  buttonsAttack.push(twoHome);

  buttonsAttack.forEach((buttonsAttack) => {
    attack = `
    <button id=${buttonsAttack.name_one}>${buttonsAttack.name_one}</button>
    <button id=${buttonsAttack.name_two}>${buttonsAttack.name_two}</button>
    <button id=${buttonsAttack.name_three}>${buttonsAttack.name_three}</button>
    <button id=${buttonsAttack.name_four}>${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;
  });
}

function buttonGeminis() {
  buttonsAttack.push(threeHome);

  buttonsAttack.forEach((buttonsAttack) => {
    attack = `
    <button id=${buttonsAttack.name_one}>${buttonsAttack.name_one}</button>
    <button id=${buttonsAttack.name_two}>${buttonsAttack.name_two}</button>
    <button id=${buttonsAttack.name_three}>${buttonsAttack.name_three}</button>
    <button id=${buttonsAttack.name_four}>${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;
  });
}

function buttonCancer() {
  buttonsAttack.push(fourHome);

  buttonsAttack.forEach((buttonsAttack) => {
    attack = `
    <button id=${buttonsAttack.name_one}>${buttonsAttack.name_one}</button>
    <button id=${buttonsAttack.name_two}>${buttonsAttack.name_two}</button>
    <button id=${buttonsAttack.name_three}>${buttonsAttack.name_three}</button>
    <button id=${buttonsAttack.name_four}>${buttonsAttack.name_four}</button>
    `;
    section_button.innerHTML += attack;
  });
}
