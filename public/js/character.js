const statBtn = document.getElementById("dice");
const initialBtn = document.getElementById("initial");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");
const modal = document.querySelector("#myModal");
const modal1 = document.querySelector("#myModal1");
const info = document.querySelector("#info");
const closeButton = document.querySelector(".close-button");
const closeButton1 = document.querySelector(".close-button1");

let health = document.getElementById("health");
let attack = document.getElementById("attack");
let str = document.getElementById("str");
let dex = document.getElementById("dex");
let int = document.getElementById("int");
let luk = document.getElementById("luk");

function startGame () {
  const response = await fetch('/api/chars/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
}

 
function toggleModal(e) {
  if (e.target.id === "initial") {
    modal.classList.add("show-modal")
    modal.classList.remove("hide-modal")
  }
  if (e.target.id === "info") {
    
    modal1.classList.add("show-modal")
    modal1.classList.remove("hide-modal")
  }
}

function closeModal(e) {
  console.log(e.target.id)
  if (e.target.id === "close") {
    modal.classList.add("hide-modal")
  }
  if (e.target.id === "close1") {
    modal1.classList.add("hide-modal")
  }
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

async function confirmCharacter () {
  const characterCard = {
    char_name:charName.value,
    char_class:charClass.value,
    char_health:health.value,
    char_attack:attack.value,
    char_str:str.value,
    char_dex:str.value,
    char_int:str.value,
    char_luk:str.value,
  }
  const response = await fetch('/api/character', {
    method: 'POST',
    body: JSON.stringify({ characterCard }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert("Failed to create Character");
  }

}




statBtn.addEventListener("click", createStats);
confirmBtn.addEventListener("click", confirmCharacter);
startBtn.addEventListener("click", startGame);
initialBtn.addEventListener("click", toggleModal);
info.addEventListener("click", toggleModal);
closeButton.addEventListener("click", closeModal);
closeButton1.addEventListener("click", closeModal);
window.addEventListener("click", windowOnClick);


