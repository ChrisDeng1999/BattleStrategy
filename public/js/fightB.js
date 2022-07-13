const white = document.getElementById("white");
const back = document.getElementById("back");
const next = document.getElementById("next");
const fight = document.getElementById("fight");

white.style.color = "white";

function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/bryan_background.webp')";
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