let main = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    
let x = Math.floor(Math.random()*100);
let y = Math.floor(Math.random()*100);
let r = Math.floor(Math.random()*360);

let x1 = Math.floor(Math.random()*255);
let y1 = Math.floor(Math.random()*255);
let z1 = Math.floor(Math.random()*255);

const javascriptSlogans = [
  "Write Less, Do More with JavaScript!",
  "JavaScript: Powering the Web.",
  "Code Once, Run Everywhere.",
  "Turn Ideas into Interactive Experiences.",
  "JavaScript Makes the Web Come Alive.",
  "Build Fast. Build Smart. Build with JavaScript.",
  "From Browser to Server with JavaScript.",
  "Create Dynamic, Responsive Applications.",
  "JavaScript: The Language of the Modern Web.",
  "Learn JavaScript, Shape the Future."
];

let count = Math.floor(Math.random()*javascriptSlogans.length);

    let h1 = document.createElement('h1');
    h1.innerHTML = javascriptSlogans[count];
    h1.style.fontSize = "30px"
    h1.style.position = "absolute"
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.rotate = r+'deg';
    h1.style.scale = "5";
    h1.style.color = `rgb(${x1},${y1},${z1})`
    main.appendChild(h1);
})
