function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('/images_character/homepage_background.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  
changeBackgroundImage ();
  
const white = document.getElementById("white");

white.style.color = "white";


const adventure = document.getElementById("adventure");


function startAdventure () {
  document.location.replace('/adventure');
}

adventure.addEventListener("click", startAdventure);



// async function confirmCharacter () {
  
//   const response = await fetch('/api/character', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });
  
//   if (response.ok) {
//     document.location.replace('/create');
//   } else {
//     alert("Failed to create Character");
//   }
  
// };
// console.log(confirmCharacter);
// confirmCharacter();