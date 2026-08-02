// setTimeout(function(){
//     console.log("hello"); 
// },2000)

// function abcd(fn){
//     fn();
// }

// abcd(function(){
//     console.log('Hello');  
// })


// function add(fn){
//    fn();
// }

// add(function(){
//     console.log(`addition is ${10+10}`);
// })

// function mass(fn){
//     fn(function(fn){
//         console.log('hii');
//         fn(function(){
//             console.log('last');
//         });
//     })
// }
// mass(function(fn){
//     console.log('Hello');
//      fn(function(fn){
//         console.log('veer');
//         fn(); 
//      });
// })

// function hello(fn1){
//     fn1(function(fn3){
//          setTimeout(()=>{
//          console.log('function 2'); 
//     },2000)
//         fn3(function(fn5){
//              setTimeout(()=>{
//          console.log('function 4'); 
//     },4000)
//             fn5();
//         });
//     });
// }

// hello(function(fn2){
//     setTimeout(()=>{
//          console.log('function 1'); 
//     },1000)
//      fn2(function(fn4){
//        setTimeout(()=>{
//          console.log('function 3'); 
//     },3000)
//           fn4(function(){
//               setTimeout(()=>{
//          console.log('function 5'); 
//     },5000)
//           });
//      });
// })


function omkarHouse(address,cb){
      console.log('Data is Fatching........');
      setTimeout(()=>{
         console.log(address); 
      },2000)

      cb("Prime medical",function(classname){
           setTimeout(()=>{
              console.log('Class is found');
           },4000)
      });
}

omkarHouse('Ghansoli',function(location,cb){
        setTimeout(()=>{
             console.log(location);
        },3000)
        
        cb("Mayure Computing")
})