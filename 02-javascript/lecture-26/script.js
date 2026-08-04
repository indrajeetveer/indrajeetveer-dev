// function getWeather(city){
//     let apiKey = "f3407b8df759c2f29c9ae9f0d92493d3";

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

//     .then((data)=>{
//       return data.json();
//     }).then((result)=>{
//         console.log(result.rain);  
//     })
// }  
// getWeather("mumbai")

let input = document.querySelector('input');
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

btn.addEventListener('click',()=>{

    let userInput = input.value.toLowerCase();

    async function getWeather(city){
  try{
       let apikey ="f3407b8df759c2f29c9ae9f0d92493d3";

       let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

        if(!raw.ok){
         throw new Error('Enter a right city')
       }

       let result = await raw.json();
       h1.innerHTML = result.main.temp

  }catch(err){
     h1.innerHTML = err.message
  }
}
getWeather(userInput)
})

