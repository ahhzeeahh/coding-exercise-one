const button = document.getElementById("btn");

function roleDie() {
    let  randomNumber = 1+ Math.floor( Math.random()*100) % 6;
    let mathCalc = 1+ Math.floor((Math.random()*100)*0.0606);
    let targetElementOne = document.querySelector('img.img1');
    let targetElementTwo = document.querySelector('img.img2');
    let newImageSrc = "images/dice" + randomNumber + ".png"
    let newSrc = "images/dice" + mathCalc + ".png"

    console.log(randomNumber + " vs " + mathCalc)
         
    if (randomNumber === mathCalc) {
        document.querySelector('h1').innerHTML = "it's a Draw...";
        document.querySelector('img.img1').setAttribute('src',newImageSrc)
         document.querySelector('img.img2').setAttribute('src', newSrc)
            
    }else {if(randomNumber > mathCalc) {
            document.querySelector('h1').innerHTML = "Player 1 Wins!";
        
            
         } else {
            document.querySelector('h1').innerHTML = "Player 2 Wins!";  
            
           
         }
         document.querySelector('img.img1').setAttribute('src',newImageSrc)
         document.querySelector('img.img2').setAttribute('src', newSrc)
        
    }
    
}

button.addEventListener("click", roleDie);


