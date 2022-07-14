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
        DP = parseInt(item.innerHTML);
        MonsterHealth = parseInt(monHealth.innerHTML);
        DPSign = Math.sign(monHealth.innerHTML);
        console.log(DPSign)
        if (DPSign = -1 || 0) {
            console.log(DPSign + ' - ' + DP + ' - ' + monHealth.innerHTML);
            monHealth.innerHTML = "DEAD";
            sleep(1000);
            nextBtn();
            break;
        } else {

            console.log(DPSign + ' - ' + DP + ' - ' + monHealth.innerHTML);
            console.log('b ' + monHealth.innerHTML);
            monHealth.innerHTML = MonsterHealth - DP;
            console.log('a ' + monHealth.innerHTML)
        }
        sleep(1000);
        location.reload();
    }
}

white.style.color = "white";

function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/sammi_background.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

changeBackgroundImage();


function backBtn() {

    document.location.replace('/home');

}

function nextBtn() {

    document.location.replace('/fightM');

}



white.style.color = "white";

back.addEventListener("click", backBtn);
next.addEventListener("click", nextBtn);
fight.addEventListener("click", fightBtn);