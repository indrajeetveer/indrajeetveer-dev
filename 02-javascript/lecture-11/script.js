let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
  
  let c1 = Math.floor(Math.random()*255);
  let c2= Math.floor(Math.random()*255);
  let c3 = Math.floor(Math.random()*255);

  let x = Math.floor(Math.random()*100);
  let y = Math.floor(Math.random()*100);
  let r = Math.floor(Math.random()*360);

  let main = document.querySelector('main');
  var div = document.createElement('div');
  div.style.height = '100px'
  div.style.width = '100px'
  div.style.position = "absolute";
  div.style.top = y+"%";
  div.style.left = x+"%";
  div.style.rotate = r+'deg'
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  main.appendChild(div);


});


