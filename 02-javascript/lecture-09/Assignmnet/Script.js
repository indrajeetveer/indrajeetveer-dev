let h1 = document.querySelector('h1');
let inc = document.getElementById('btn1');
let dec = document.getElementById('btn2');
let reset = document.getElementById('reset');

let count = 0;
h1.innerHTML = 0
inc.addEventListener('click',()=>{
    count = count + 1
    h1.innerHTML = count;
})

reset.addEventListener('click',()=>{
    h1.innerHTML = 0;
    count = 0
})


dec.addEventListener('click',()=>{
     if (count > 0) {
        count--;
        h1.innerHTML = count;
    }
})

