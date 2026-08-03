// let prm = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve();
//     },1000)
// })

// prm.then(()=>{
//     console.log('promise is fullfile'); 
// })

// prm.catch(()=>{
//     console.log('Promise is not fullfile');
// })


// let check = new Promise((reslove,reject)=>{
//     let num = Math.floor(Math.random()*6)
//     console.log(num);
    
//     if(num>0){
//         reslove();
//     }else{
//         reject();
//     }
// })

// check.then(()=>{
//     console.log('The Number is greater then zero');
// })

// check.catch(()=>{
//     console.log('The number is not greater that zero');
// })

// fetch(`https://dummyjson.com/users`)
// .then((data)=>{
//     return data.json();
// })

// .then((info)=>{
//     console.log(info.users[1]);
// })

async function call(){
   let raw = await fetch(`https://dummyjson.com/users`);
   let data = await raw.json()
   console.log(data);
}

call();


