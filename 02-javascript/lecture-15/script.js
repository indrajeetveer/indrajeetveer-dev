// let chutki = document.querySelector('img');
// let mess = document.querySelector('h1 span');
// let body = document.body;

// chutki.addEventListener('mouseenter',()=>{
//      mess.innerHTML = " Door Ho ja";
//      body.style.backgroundColor = 'red';
// })

// chutki.addEventListener('mouseleave',()=>{
//       mess.innerHTML = 'Good !!!!!!';
//      body.style.backgroundColor = 'green';

// })


let main = document.querySelector('main');
console.log(main);

let img = document.querySelector('img');

main.addEventListener('mousemove',function(val){
    let x = val.x;
    let y = val.y;
   img.style.left = x + "px";
   img.style.top = y + 'px'
})
