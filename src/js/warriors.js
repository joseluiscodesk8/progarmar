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
    this.attack = [];
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

aries.attack.push(
  {
    name: "CRYSTAL_wALL",
    id: "button_one",
  },
  {
    name: "STARLIGHT_EXTINCTION",
    id: "button_two",
  },
  {
    name: "STARDUST_REVOLUTION",
    id: "button_three",
  },
  {
    name: "CRYSTAL_NET",
    id: "button:four",
  }
);

tauro.attack.push(
  { name: "GREAT_HRON", id: "button_one" },
  { name: "TITANIC_SUPERNOVA", id: "button_two" },
  { name: "EXPLOSIVE_CHARGE", id: "button_three" },
  { name: "GALATIC_QUAKE", id: "button_four" }
);
