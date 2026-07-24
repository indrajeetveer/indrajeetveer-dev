// let h1 = document.querySelector('h1');
// let btn = document.querySelector('button');


// btn.addEventListener('click',()=>{
//     h1.innerHTML = "User is Change...."

//     setTimeout(()=>{
//         h1.innerHTML = "Hello I an Indrajeet"
//     },2000)
// })


// // setInterval(()=>{
// //    alert("Session is complete")
// // },3000)

let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');

let count = 0;

btn.addEventListener('click',()=>{
    btn.style.pointerEvents = "none"
    let int = setInterval(()=>{
        count++;
        h2.innerHTML = count+"%";
        inner.style.width = count+"%";
        inner.style.backgroundColor = "red";
        btn.style.opacity = "0.50"
    },30)

   setTimeout(()=>{
      clearInterval(int);
      btn.innerHTML = "Downloaded";
   },3000)

})

