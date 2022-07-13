const white = document.getElementById("white");
const back = document.getElementById("back");
const next = document.getElementById("next");
const fight = document.getElementById("fight");


const monHealth = document.getElementById("monster_health");
const monAttack = document.getElementById("monster_attack");

const charHealth = document.getElementById("charHealth");
const charAttack = document.getElementById("charAttack");



let monster_health = parseInt(monHealth.textContent);
let monster_attack = parseInt(monAttack.textContent);

console.log(monster_attack);
console.log(monster_health);

let char_health = parseInt(charHealth.textContent);
let char_attack = parseInt(charAttack.textContent); 



console.log(char_attack);
console.log(char_health);


white.style.color = "white";

function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/sammi_background.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  
changeBackgroundImage ();


function backBtn () {
 
    document.location.replace('/home');
   
}

function nextBtn () {
 
    document.location.replace('/fightM');
   
}


white.style.color = "white";

back.addEventListener("click", backBtn);
next.addEventListener("click", nextBtn);