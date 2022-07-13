const white = document.getElementById("white");
const back = document.getElementById("back");

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


white.style.color = "white";

back.addEventListener("click", backBtn);