let a = document.querySelector('h1');

a.style.color = 'Red';
a.style.backgroundColor = 'white';
a.style.fontSize ="40px";

// a.addEventListener("click",()=>{
//     // a.style.color = "orange";
//     // a.style.fontSize = "60px";
//     // a.style.backgroundColor = "white"
    
//     let a = 10;
//     let b = 20;
//     console.log(a+b);
    
    
// })

let btn = document.addEventListener('click',()=>{
      let obj = {
        name:"indrajeet",
        age:22,
        address:'ghansoli'
      }
      console.log(obj);
      
})

let headingTwo = document.querySelectorAll('h2');

headingTwo.forEach((heading) => {
    heading.innerHTML = "veer";
});






