const white = document.getElementById("white");
const back = document.getElementById("back");
const next = document.getElementById("next");
const fight = document.getElementById("fight");

const monHealth = document.getElementById("monster_health");
const monAttack = document.getElementById("monster_attack");

const charHealth = document.getElementsByClassName("charHealth");
const charAttack = document.getElementsByClassName("charAttack");

var monster_health = parseInt(monHealth.textContent);
var monster_attack = parseInt(monAttack.textContent);

console.log(monster_attack);
console.log(monster_health);

let char_health = charHealth.textContent;
let char_attack = charAttack.textContent;

console.log(charAttack);
console.log(charHealth);
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function fightBtn() {

    var list = document.getElementsByClassName("charAttack");
    for (let item of list) {
        console.log('Attack DPS ' + item.innerHTML);
        console.log('MonsterHealth ' +monHealth.innerHTML);
        // alert('Monster Health = ' + monHealth.innerHTML);
        DP = parseInt(item.innerHTML);
        DP = -DP
        MonsterHealth = parseInt(monHealth.innerHTML);
        if (MonsterHealth >= 0) {
            monHealth.innerHTML = MonsterHealth + DP;
        } else {
            monHealth.innerHTML = "DEAD";
            alert("You Won!")
            nextBtn();
            break;
        }
    }
}

    // var list = document.getElementsByClassName("charAttack");
    // for (let item of list) {
    //     var list = document.getElementsByClassName("charAttack");
    //     for (let item of list) {
    //         console.log('Attack DPS ' + item.innerHTML);
    //         console.log('MonsterHealth ' +monHealth.innerHTML);
    //         alert('Monster Health = ' + monHealth.innerHTML);
    //         DP = parseInt(item.innerHTML);
    //         DP = -DP
    //         MonsterHealth = parseInt(monHealth.innerHTML);
    //         if (MonsterHealth >= 0) {
    //             monHealth.innerHTML = MonsterHealth + DP;
    //         } else {
    //             alert('Monster Dead...Moving On')
    //             monHealth.innerHTML = "DEAD";
    //             nextBtn();
    //             break;
    //         }
    //         break;
    //     }
    //     nextBtn();

white.style.color = "white";

function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/mike_background.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

changeBackgroundImage();


function backBtn() {

    document.location.replace('/home');

}

function nextBtn() {

    document.location.replace('/fightB');

}


white.style.color = "white";

back.addEventListener("click", backBtn);
next.addEventListener("click", nextBtn);
fight.addEventListener("click", fightBtn);