/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("let knights = [];\r\nlet options;\r\nlet attack;\r\nlet attackKnights = [];\r\n// let attackEnemy = [];\r\nlet knightPlayer;\r\n\r\nlet charter;\r\nlet buttonsAttack = [];\r\n\r\nlet attackPlayer;\r\nlet attackEnemy;\r\n\r\nlet max = 5;\r\nlet min = 1;\r\n\r\nlet indexAttackplayer;\r\nlet indexAttackEnemy;\r\n\r\n// CHARTERS\r\n\r\nconst charterPlayer = document.getElementById(\"charter_player\");\r\nconst charterSelected = document.getElementById(\"charter_selected\");\r\nconst charterEnemy = document.getElementById(\"charter_enemy\");\r\nconst spanPlayer = document.getElementById(\"knight-player\");\r\n\r\n// BUTTONS OF ATTACK\r\nlet section_button = document.getElementById(\"buttons\");\r\n\r\n// CHOOSE\r\n\r\nlet choose_charter = document.getElementById(\"button-charter\");\r\nchoose_charter.addEventListener(\"click\", selectionKnightsNames);\r\n\r\n//  LIFES\r\n\r\nlet lifePlayer = document.getElementById(\"lifes-player\");\r\nlet lifesEnemy = document.getElementById(\"lifes-enemy\");\r\nlet playerLife = 3;\r\nlet enemyLife = 3;\r\nlifePlayer.innerHTML = playerLife;\r\nlifesEnemy.innerHTML = enemyLife;\r\n\r\n//HIDE\r\n\r\nlet hideAttack = document.getElementById(\"attack\");\r\nhideAttack.style.display = \"none\";\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", playerCharter());\r\n\r\n/// RENDER CHARTES\r\n\r\nfunction playerCharter() {\r\n  knights.push(\r\n    aries,\r\n    tauro,\r\n    geminis,\r\n    cancer,\r\n    leo,\r\n    virgo,\r\n    libra,\r\n    escorpion,\r\n    sagitario,\r\n    acuario,\r\n    picis\r\n  );\r\n\r\n  knights.forEach((knights) => {\r\n    options = `\r\n    <section\r\n          class=\"soilder\">\r\n          <img src=${knights.img}  alt=${knights.name}/>\r\n          <label for=${knights.name}>${knights.name}</label>\r\n          <input type=\"radio\" name=\"charterPlayer\" id=${knights.name} />\r\n      </section>\r\n`;\r\n    charterPlayer.innerHTML += options;\r\n\r\n    shion = document.getElementById(\"ARIES\");\r\n    hasgrad = document.getElementById(\"TAURO\");\r\n    aspros = document.getElementById(\"GEMINIS\");\r\n    manigoldo = document.getElementById(\"CANCER\");\r\n    regulus = document.getElementById(\"LEO\");\r\n    asmita = document.getElementById(\"VIRGO\");\r\n    dohko = document.getElementById(\"LIBRA\");\r\n    kardia = document.getElementById(\"ESCORPION\");\r\n    sisifo = document.getElementById(\"SAGITARIO\");\r\n    cid = document.getElementById(\"CAPRICORNIO\");\r\n    degel = document.getElementById(\"ACURIO\");\r\n    alfabica = document.getElementById(\"PICIS\");\r\n  });\r\n}\r\n/// RENDER ENEMY CHARTER\r\n\r\nfunction enemyCharter() {\r\n  let aleatorio = selection(0, knights.length - 1);\r\n\r\n  charterEnemy.innerHTML = knights[aleatorio].name;\r\n\r\n  let aries = document.createElement(\"img\");\r\n  let tauro = document.createElement(\"img\");\r\n  let geminis = document.createElement(\"img\");\r\n  let cancer = document.createElement(\"img\");\r\n  let leo = document.createElement(\"img\");\r\n  let virgo = document.createElement(\"img\");\r\n  let libra = document.createElement(\"img\");\r\n  let escorpion = document.createElement(\"img\");\r\n  let sagitario = document.createElement(\"img\");\r\n  let capricornio = document.createElement(\"img\");\r\n  let acurio = document.createElement(\"img\");\r\n  let picis = document.createElement(\"img\");\r\n\r\n  if (aleatorio == 0) {\r\n    aries.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(aries);\r\n  } else if (aleatorio == 1) {\r\n    tauro.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(tauro);\r\n  } else if (aleatorio == 2) {\r\n    geminis.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(geminis);\r\n  } else if (aleatorio == 3) {\r\n    cancer.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(cancer);\r\n  } else if (aleatorio == 4) {\r\n    leo.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(cancer);\r\n  } else if (aleatorio == 5) {\r\n    virgo.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(virgo);\r\n  } else if (aleatorio == 6) {\r\n    libra.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(libra);\r\n  } else if (aleatorio == 7) {\r\n    escorpion.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(escorpion);\r\n  } else if (aleatorio == 8) {\r\n    sagitario.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(sagitario);\r\n  } else if (aleatorio == 9) {\r\n    virgo.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(virgo);\r\n  } else if (aleatorio == 10) {\r\n    acuario.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(acurio);\r\n  } else if (aleatorio == 11) {\r\n    picis.src = `${knights[aleatorio].img}`;\r\n    charterEnemy.appendChild(picis);\r\n  }\r\n}\r\n\r\n// SLECTION CHARTERS\r\n\r\nfunction selected() {\r\n  let SHION = document.createElement(\"img\");\r\n  let HASGRAD = document.createElement(\"img\");\r\n  let ASPROS = document.createElement(\"img\");\r\n  let MANIGOLDO = document.createElement(\"img\");\r\n  let REGULUS = document.createElement(\"img\");\r\n  let ASMITA = document.createElement(\"img\");\r\n  let DOHKO = document.createElement(\"img\");\r\n  let KARDIA = document.createElement(\"img\");\r\n  let SISIFO = document.createElement(\"img\");\r\n  let CID = document.createElement(\"img\");\r\n  let DEGEL = document.createElement(\"img\");\r\n  let ALFABICA = document.createElement(\"img\");\r\n\r\n  if (shion.checked) {\r\n    SHION.src = \"../../public/aries.jpg\";\r\n    charterSelected.appendChild(SHION);\r\n  } else if (hasgrad.checked) {\r\n    HASGRAD.src = `../../public/tauro.jpg`;\r\n    charterSelected.appendChild(HASGRAD);\r\n  } else if (aspros.checked) {\r\n    ASPROS.src = `../../public/geminis.jpg`;\r\n    charterSelected.appendChild(ASPROS);\r\n  } else if (manigoldo.checked) {\r\n    MANIGOLDO.src = `../../public/cancer.jpg`;\r\n    charterSelected.appendChild(MANIGOLDO);\r\n  } else if (regulus.checked) {\r\n    REGULUS.src = \"../../public/leo.jpg\";\r\n    charterSelected.appendChild(REGULUS);\r\n  } else if (asmita.checked) {\r\n    ASMITA.src = \"../../public/virgo.jpg\";\r\n    charterSelected.appendChild(ASMITA);\r\n  } else if (dohko.checked) {\r\n    DOHKO.src = \"../../public/libra.jpg\";\r\n    charterSelected.appendChild(DOHKO);\r\n  } else if (kardia.checked) {\r\n    KARDIA.src = \"../../public/escorpion.jpg\";\r\n    charterSelected.appendChild(KARDIA);\r\n  } else if (sisifo.checked) {\r\n    SISIFO.src = \"../../public/sagitario.jpg\";\r\n    charterSelected.appendChild(SISIFO);\r\n  } else if (cid.checked) {\r\n    CID.src = \"../../public/capricornio.jpg\";\r\n    charterSelected.appendChild(CID);\r\n  } else if (degel.checked) {\r\n    DEGEL.src = \"../../public/acuario.jpg\";\r\n    charterSelected.appendChild(DEGEL);\r\n  } else {\r\n    ALFABICA.src = \"../../public/picis.jpg\";\r\n    charterSelected.appendChild(ALFABICA);\r\n  }\r\n}\r\n\r\nfunction selectionKnightsNames() {\r\n  let hideKnights = document.getElementById(\"knights\");\r\n  hideKnights.style.display = \"none\";\r\n\r\n  let hideAttack = document.getElementById(\"attack\");\r\n  hideAttack.style.display = \"flex\";\r\n\r\n  if (shion.checked) {\r\n    spanPlayer.innerHTML = shion.id;\r\n    charter = shion.id;\r\n  } else if (hasgrad.checked) {\r\n    spanPlayer.innerHTML = hasgrad.id;\r\n    charter = hasgrad.id;\r\n  } else if (aspros.checked) {\r\n    spanPlayer.innerHTML = aspros.id;\r\n    charter = aspros.id;\r\n  } else if (manigoldo.checked) {\r\n    spanPlayer.innerHTML = manigoldo.id;\r\n    charter = manigoldo.id;\r\n  } else if (regulus.checked) {\r\n    spanPlayer.innerHTML = regulus.id;\r\n    charter = regulus.id;\r\n  } else if (asmita.checked) {\r\n    spanPlayer.innerHTML = asmita.id;\r\n    charter = asmita.id;\r\n  } else if (dohko.checked) {\r\n    spanPlayer.innerHTML = dohko.id;\r\n    charter = dohko.id;\r\n  } else if (kardia.checked) {\r\n    spanPlayer.innerHTML = kardia.id;\r\n    charter = kardia.id;\r\n  } else if (sisifo.checked) {\r\n    spanPlayer.innerHTML = sisifo.id;\r\n    charter = sisifo.id;\r\n  } else if (cid.checked) {\r\n    spanPlayer.innerHTML = cid.id;\r\n    charter = cid.id;\r\n  } else if (degel.checked) {\r\n    spanPlayer.innerHTML = degel.id;\r\n    charter = degel.id;\r\n  } else {\r\n    spanPlayer.innerHTML = alfabica.id;\r\n    charter = alfabica.id;\r\n  }\r\n  selected();\r\n  enemyCharter();\r\n  selectedButton();\r\n  // combat();\r\n}\r\n\r\n/// BUTTONS\r\n\r\nfunction selectedButton() {\r\n  if (shion.checked) {\r\n    buttonAries();\r\n  } else if (hasgrad.checked) {\r\n    buttonTauro();\r\n  } else if (aspros.checked) {\r\n    buttonGeminis();\r\n  } else if (manigoldo.checked) {\r\n    buttonCancer();\r\n  }\r\n\r\n  // enemyAttack();\r\n}\r\n\r\n/// ATTACK\r\n\r\nfunction playerAttack() {\r\n  attackPlayer = selection(1, 5);\r\n  console.log(attackPlayer);\r\n  enemyAttack();\r\n  combat();\r\n}\r\n\r\nfunction enemyAttack() {\r\n  attackEnemy = selection(1, 5);\r\n  console.log(attackEnemy);\r\n}\r\n\r\n// LIFE\r\n\r\nfunction checkLife() {\r\n  if (lifesEnemy == 0) {\r\n    alert(\"ganaste\");\r\n  } else {\r\n    console.log(\"perdiste\");\r\n  }\r\n}\r\n\r\n/// COMBAT\r\n\r\nfunction combat() {\r\n  if (attackPlayer < attackEnemy) {\r\n    playerLife--;\r\n    lifePlayer.innerHTML = playerLife;\r\n    console.log(\"menor\");\r\n  } else if (attackPlayer > attackEnemy) {\r\n    enemyLife--;\r\n    lifesEnemy.innerHTML = enemyLife;\r\n    console.log(\"mayor\");\r\n  } else {\r\n    console.log(\"empate\");\r\n  }\r\n  checkLife();\r\n}\r\n\r\n/////////////////////\r\nfunction selection(min, max) {\r\n  return Math.floor(Math.random() * (max - min + 1) + min);\r\n}\r\n\r\nfunction reloadGame() {\r\n  location.reload();\r\n}\r\n\r\nfunction stylesKnights() {\r\n  charterPlayer.className = \"skate\";\r\n}\r\n\r\nstylesKnights();\r\n///////////////////////\r\n\r\n//////LAZYLOAD/////////\r\n\r\n// let totalimg = 0;\r\n// let loadedimg = 0;\r\n\r\n// let optionsObserver = {\r\n//   root: null,\r\n//   rootMargin: \"0px\",\r\n//   threshold: 0.0,\r\n// };\r\n\r\n// let observer = new IntersectionObserver(playerCharter, optionsObserver);\r\n// observer.observe(knights);\r\n\r\n// console.log(observer);\r\n\r\n// const isIntersecting = playerCharter.isIntersecting;\r\n// console.log(playerCharter);\r\n// function loadImg(intersectionEntry) {\r\n//   const imgNode = intersectionEntry.target;\r\n//   imgNode.src = `../../public/aries.jpg`;\r\n//   imgNode.onload = () => {\r\n//     loadedimg += 1;\r\n//   };\r\n//   observer.unobserve(imgNode);\r\n// }\r\n\r\n// loadImg();\r\n\n\n//# sourceURL=webpack://progarmar/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;