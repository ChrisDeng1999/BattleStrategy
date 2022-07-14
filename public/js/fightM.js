const white = document.getElementById("white");
const back = document.getElementById("back");
const next = document.getElementById("next");
const fight = document.getElementById("fight");

const monName = document.getElementById("monster_name");
const monHealth = document.getElementById("monster_health");
const monAttack = document.getElementById("monster_attack");

const charName = document.getElementById("charName");
const charHealth = document.getElementById("charHealth");
const charAttack = document.getElementById("charAttack");


let monster_name = monName.textContent;
let monster_health = parseInt(monHealth.textContent);
let monster_attack = parseInt(monAttack.textContent);

console.log(monster_name);
console.log(monster_health);
console.log(monster_attack);

let char_name = charName.textContent;
let char_health = parseInt(charHealth.textContent);
let char_attack = parseInt(charAttack.textContent); 

console.log(char_name);
console.log(char_health);
console.log(char_attack);



class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    
    // Method which prints all of the stats for a character
    printStats() {
        console.log(`Stats for ${this.name} are as following:`);
        console.log(`Each attack will do ${this.attack} damage.`);
        console.log(`${this.name} has ${this.health} hit points remaining!`);
        console.log('------------');
    }
    
    isAlive() {
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
            return false;
        }
        return true;
    }
    
    battle(opponent) {
        console.log(`${this.name} hit ${opponent.name} for ${this.attack}`);
        opponent.health -= this.attack;
    }
}
const char = new Character(char_name, char_health, char_attack);
const mon = new Character(monster_name, monster_health, monster_attack);
// This keeps track of whose turn it is
let charTurn = true;

char.printStats();
mon.printStats();

const turnInterval = setInterval(async () => {
    // If either character is not alive, end the game
    if (!char.isAlive() || !mon.isAlive()) {
        clearInterval(turnInterval);
        console.log('Game over!');
    } else if (charTurn) {
        char.battle(mon);
        mon.printStats();
    } else {
        mon.battle(char);
        char.printStats();
    }
    
    // Switch turns
    charTurn = !charTurn;
}, 2000);




white.style.color = "white";

function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/mike_background.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  
changeBackgroundImage ();


function backBtn () {
 
    document.location.replace('/home');
   
}

function nextBtn () {
 
    document.location.replace('/fightB');
   
}


white.style.color = "white";

back.addEventListener("click", backBtn);
next.addEventListener("click", nextBtn);