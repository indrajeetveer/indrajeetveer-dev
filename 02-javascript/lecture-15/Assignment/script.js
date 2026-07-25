document.addEventListener('keydown',(elem)=>{
    let h1 = document.querySelector('h1');
    let keycheck = elem.key;
    
    switch(keycheck){
         case '1' : 
         new Audio("Music/sound1.mp3").play();
         break;

        case '2' : 
         new Audio("Music/sound3.mp3").play();
         break;

        case '3' : 
         new Audio("Music/sound3.mp3").play();
         break;

        case '4' : 
         new Audio("Music/sound4.mp3").play()
         break;

        case '5' : 
         new Audio("Music/sound5.mp3").play();
         break;

        case '6' : 
        new Audio("Music/sound6.mp3").play();
        break;
          
        case '7' : 
        new Audio("Music/sound7.mp3").play()
        break;

        default :
        h1.innerHTML = "You press the wrong key";
        break;
        
    }
   
})

// box2.addEventListener('click',()=>{
//   let sound1 = new Audio("Music/sound2.mp3");
//    sound1.play();
// })

// box3.addEventListener('click',()=>{
//   let sound1 = new Audio("Music/sound3.mp3");
//    sound1.play();
// })

// box4.addEventListener('click',()=>{
//   let sound1 = new Audio("Music/sound4.mp3");
//    sound1.play();
// })

// box5.addEventListener('click',()=>{
//   let sound1 = new Audio("Music/sound5.mp3");
//    sound1.play();
// })

// box6.addEventListener('click',()=>{
//   let sound1 = new Audio("Music/sound6.mp3");
//    sound1.play();
// })

// box7.addEventListener('click',()=>{
//   let sound1 = new Audio("Music/sound7.mp3");
//    sound1.play();
// })
