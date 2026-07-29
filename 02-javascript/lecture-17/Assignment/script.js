let p = document.querySelector('p');
let text = p.innerText;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

p.addEventListener('mouseenter',()=>{
   function randomText(){
   let final=  text.split('').map((char,index)=>{
    if(index<iteration){
        return char
    }
      return characters.split("")[Math.floor(Math.random()*53)]  
   }).join("")
    p.innerText = final;
    
    iteration += 0.2
}

setInterval(randomText,50)


})





