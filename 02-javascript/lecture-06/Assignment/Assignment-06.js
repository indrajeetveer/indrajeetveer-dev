// Check You can vote or not//
let age  = prompt("Enter your age:")

if(age === null){
    console.error('You are click on the Cancle Button');
}else{
    if(age.trim() === ""){
        console.error('You can eneter the Blank space');
    }else{
        age = Number(age)
        if(isNaN(age)){
            console.error('You can enter the string');
        }else{
            if(age<=0){
                console.log('age is not valide'); 
            }
            else if(age>=18){
                console.log('You can vote');
            }else{
                console.log('You cant vote');  
            }
        }
    }
}
