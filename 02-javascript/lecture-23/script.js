// function hello(fn1){
//     fn1(function(fn3){
//         setTimeout(()=>{
//           console.log('Second Function call');
//         },2000)

//         fn3(function(fn5){
//             setTimeout(()=>{
//             console.log('Fourth Function is Call');
//             },4000)
//          fn5(function(){
//             setTimeout(()=>{
//              console.log('Sixth Function is call');
//             },6000)
//          });
//         });  
//     });
// }

// hello(function(fn2){
//     setTimeout(()=>{
//       console.log('First Function Call');
//     },1000)
//       fn2(function(fn4){
//         setTimeout(()=>{
//          console.log('Third Function call');
//         },3000)
//           fn4(function(fn6){
//             setTimeout(()=>{
//              console.log('Fifth Function is call');
//             },5000)
//              fn6();
//           });
//       })
// })


// function UserData(name,fn1){
//   console.log("User Detail is Fatching...");
//    fn1({id:101,lacation:"Ghansoli",age:23},function(info){
//        setTimeout(()=>{
//         console.log(info);
//        },2500)
//    })
// }

// UserData("indrajeet",function(data,fn2){
//    setTimeout(()=>{
//     console.log(data);
//    },2000)
//    fn2("User is Valid")
// })


// Questions //

// function after_Delay(time,cb){
//      setTimeout(()=>{
//        cb();
//      },time)
// }

// after_Delay(3000,function(){
//     console.log('Callback executed'); 
// })


// function getUser(username,cb){
//    setTimeout(()=>{
//      cb({id:101,name:username})
//    },1000)
// }

// function allPost(id,cb){
//      setTimeout(()=>{
//       cb(["nature","fort","trees"]);
//      },2000)
// }

// getUser("indrajeet",function(data){
//       allPost(data.id,function(allpost){
//            console.log(data.name, allpost);
//       })
// })  


// function getDataInsta(name,getdata){
//     console.log('insta unique id is Fatching');
//     setTimeout(()=>{
//         getdata({name:name,uniqueid:1002939})
//     },2000)
// }

// function getDataMeta(id,cb2){
//     console.log('Meta Data is Fatching');
//      setTimeout(()=>{
//          cb2(["veer",'om','guru','ram','ramesh'])
//      },3000)
// }

// getDataInsta("veer",function(data){
//     console.log(data.uniqueid);
//      getDataMeta(data.uniqueid,function(info){
//          console.log(data.name,info);
//      })
// })


//// Question ////

function loginUser(userInfo){
    console.log('This is an User login');
   setTimeout(()=>{
       userInfo({userId:101,userName:"indrajeet"})
   },1000)
}

function fetchPermision(id,fn){
    console.log('get Permission');
    setTimeout(()=>{
       fn(["indrajeet",101,"Ghansoli"])
    },1000)
}

function Permission(final){
    console.log('Final Permission');
   setTimeout(()=>{
      final("Final Permission")
   },1000)
}

loginUser(function(data){
    fetchPermision(data.id,function(info){
       console.log(info);
    })

    Permission(function(final){
      console.log(final);
    })
}) 