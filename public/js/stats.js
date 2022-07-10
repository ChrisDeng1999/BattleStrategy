const { CharClass } = require("../../models")


init ()

function init () {
   
    const getRandomStr = Math.floor(Math.random() * 7)
    const getRandomDex= Math.floor(Math.random() * 7)
    const getRandomInt = Math.floor(Math.random() * 7)
    const getRandomLuk = Math.floor(Math.random() * 7)



    function getHealth () {
       const health = getRandomStr + getRandomDex   
       return health
    }

    console.log("Health: " + getHealth());
    console.log("Str: " + getRandomStr);
    console.log("Dex: " + getRandomDex);
    console.log("Int: " + getRandomInt);
    console.log("Luk: " + getRandomLuk);

    function getStrHealth () {
        const newStrHealth = newStr + getRandomDex   
        return newStrHealth
     }
    function getDexHealth () {
        const newDexHealth = newDex + getRandomStr   
        return newDexHealth
     }


    if (CharClass.id = 0) {

        const newStr = getRandomStr * 2;

        console.log("Class: " + "Warrior")
        console.log("Health: " + getStrHealth());
        console.log("Str: " + newStr);
        console.log("Dex: " + getRandomDex);
        console.log("Int: " + getRandomInt);
        console.log("Luk: " + getRandomLuk);

    }  else if (CharClass.id = 1) {

        const newDex = getRandomDex * 2;

        console.log("Class: " + "Hunter")
        console.log("Health: " + getDexHealth());
        console.log("Str: " + getRandomStr);
        console.log("Dex: " + newDex);
        console.log("Int: " + getRandomInt);
        console.log("Luk: " + getRandomLuk);

    }  else if (CharClass.id = 2) {

        const newInt = getRandomInt * 2;
    
        console.log("Class: " + "Mage")
        console.log("Health: " + getHealth());
        console.log("Str: " + getRandomStr);
        console.log("Dex: " + getRandomDex);
        console.log("Int: " + newInt);
        console.log("Luk: " + getRandomLuk);
    } else if (CharClass.id = 3) {

        const newLuk = getRandomLuk * 2;

        console.log("Class: " + "Thief")
        console.log("Health: " + getHealth());
        console.log("Str: " + getRandomStr);
        console.log("Dex: " + getRandomDex);
        console.log("Int: " + getRandomInt);
        console.log("Luk: " + newLuk);
    }

}
init ()

