const { CharClass } = require("../../models")

const statBtn = document.getElementById("dice");
const initalBtn = document.getElementById("initial");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");
const modal = document.querySelector(".modal");
const trigger = document.querySelector("#info");
const closeButton = document.querySelector(".close-button");

function createCharacter () {
  document.getElementById("charCard").className ="row mt-4";
}

initalBtn.addEventListener("click", createCharacter);

function startGame () {
  console.log("Hello")
}

startBtn.addEventListener("click", startGame);







function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}


function createStats () {
  
  const getStr = Math.floor(Math.random() * 7);
  const getDex= Math.floor(Math.random() * 7);
  const getInt = Math.floor(Math.random() * 7);
  const getLuk = Math.floor(Math.random() * 7);
  
  let health = document.getElementById("health");
  let attack = document.getElementById("attack");
  let str = document.getElementById("str");
  let dex = document.getElementById("dex");
  let int = document.getElementById("int");
  let luk = document.getElementById("luk");
  
  health.innerHTML = "Health: "
  if (charClass.value == "Warrior") {
    healthStat = document.createTextNode(getStr * 2 + getDex)
    health.appendChild(healthStat);
  } else if (charClass.value == "Hunter") {
    healthStat = document.createTextNode(getStr + getDex *2)
    health.appendChild(healthStat);
  } else {
    healthStat = document.createTextNode(getStr+ getDex)
    health.appendChild(healthStat);
  }
  
  attack.innerHTML = "Attack: "
  if (charClass.value == "Warrior") {
    attackStat = document.createTextNode(getStr * 2)
    attack.appendChild(attackStat);
  } else if (charClass.value == "Hunter") {
    attackStat = document.createTextNode(getDex * 2)
    attack.appendChild(attackStat);
  } else if (charClass.value == "Mage") {
    attackStat = document.createTextNode(getInt * 2)
    attack.appendChild(attackStat);
  } else {
    attackStat = document.createTextNode(getLuk * 2)
    attack.appendChild(attackStat);
  }
  
  
  str.innerHTML = "Str: "
  if (charClass.value == "Warrior") {
    strStat = document.createTextNode(getStr * 2)
    str.appendChild(strStat);
  } else {
    strStat = document.createTextNode(getStr)
    str.appendChild(strStat);
  }
  
  dex.innerHTML = "Dex: "
  if (charClass.value == "Hunter") {
    dexStat = document.createTextNode(getDex * 2)
    dex.appendChild(dexStat);
  } else {
    dexStat = document.createTextNode(getDex)
    dex.appendChild(dexStat);
  }
  
  int.innerHTML = "Int: "
  if (charClass.value == "Mage") {
    intStat = document.createTextNode(getInt * 2)
    int.appendChild(intStat);
  } else {
    intStat = document.createTextNode(getInt)
    int.appendChild(intStat);
  }
  
  
  luk.innerHTML = "Luk: "
  if (charClass.value == "Thief") {
    lukStat = document.createTextNode(getLuk * 2)
    luk.appendChild(lukStat);
  } else {
    lukStat = document.createTextNode(getLuk)
    luk.appendChild(lukStat);
  }
  document.getElementById("confirm").className ="btn btn-primary";
  
  
};

// function saveCharacter () {

// }

statBtn.addEventListener("click", createStats);
// confirmBtn.addEventListener("click", saveCharacter);
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
