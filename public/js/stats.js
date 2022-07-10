const { CharClass } = require("../../models")

const statBtn = document.getElementById("dice");

function createStats () {
  
  const getStr = Math.floor(Math.random() * 7);
  const getDex= Math.floor(Math.random() * 7);
  const getInt = Math.floor(Math.random() * 7);
  const getLuk = Math.floor(Math.random() * 7);

  let health = document.getElementById("health");
  let str = document.getElementById("str");
  let dex = document.getElementById("dex");
  let int = document.getElementById("int");
  let luk = document.getElementById("luk");
  
  health.innerHTML = "Health: "
  healthStat = document.createTextNode(getStr + getDex)
  health.appendChild(healthStat);
  
  str.innerHTML = "Str: "
  strStat = document.createTextNode(getStr)
  str.appendChild(strStat);
  
  dex.innerHTML = "Dex: "
  dexStat = document.createTextNode(getDex)
  dex.appendChild(dexStat);
  
  int.innerHTML = "Int: "
  intStat = document.createTextNode(getInt)
  int.appendChild(intStat);
 
  luk.innerHTML = "Luk: "
  lukStat = document.createTextNode(getLuk)
  luk.appendChild(lukStat);
  
  document.getElementById("confirm").className ="btn btn-primary";

};



statBtn.addEventListener("click", createStats);


const charClass = document.getElementById("charClass");

if (charClass == "Warrior") {
  getStr * 2
}



