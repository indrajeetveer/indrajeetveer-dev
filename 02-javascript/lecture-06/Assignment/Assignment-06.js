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


//  1) Print Multiplication table of 5 example 5 * 1 = 5

for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`);
}

//  2) Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.

let count = 0
for(let i=1; i<=15; i++){
    if(i>8){
        count ++;
    }else{

    }   
}
console.log(count);

// 3) Ask user for password and print access status Hardcoded correct password. Compare with user input.

let password = "123abc";
let userPassword = prompt("Enter the Password:")

if(userPassword === null){
    console.erroe('You can press the cancle button'); 
}else{
    if(userPassword.trim() === ""){
         console.erroe('You can enetr something wrong');  
    }else{
        (userPassword === password)? console.log('Access is Granted'):console.log('Access is Denay');  
    }
}



//********************Level 2 – Slightly Tougher but Logical *****************************//

// Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

let pass = 'abc';
let attempt = 0;
let open = false

let userpassword1 = prompt("Enter the password:");
attempt++

if(userpassword1 === pass) open = true

while(userpassword1 !== pass){
    if(attempt === 3){
        console.log('Account is lock');
        break;
    }

    userpassword1 = prompt("Enter the password:");
    attempt++
    if(userpassword1 === pass) open = true
}

if(ope === true){
    console.log('Account is open'); 
}


///Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".

let check ='stop'
let count1 = 0 
let word = prompt("Enter the word:")
while(word !== check){
    if(word === null){
        console.error("You Enter the cancle button")
        break;
    }else{
    word = prompt("Enetr the Word:");
    if(word === 'yes'){
        count1++
    }
    }

}
console.log(`total yes count is:${count1}`);

// Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

let number = 7;
for(let i=1; i<=50; i++){
    if(i%number === 0){
        console.log(i);  
    }else{}
}

// Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

let sum = 0
for(let i=1; i<=30; i++){
    if(i%2!==0){
        sum+=i;
    }
}
 console.log(sum);

// Keep asking number until user enters an even number Use while loop. Stop only if input is even.
let message = false;
let number = +prompt("Enter the number:");
if(number%2===0) message = true;

while(number%2!==0){
   number = +prompt("Enter the number:");
   if(number%2===0) message = true;
}

if(message === true){
    console.log('Even is type');  
}


//  Print numbers between two user inputs Input start and end using prompt() → print all between

let user1 = +prompt("Enter the number:");
let user2 = +prompt("Enter the number:");

if(user1<user2){
    for(let i=user1; i<user2;i++){
        console.log(i);
    }
}else{
    for(let i=user1; i>user2; i--){
        console.log(i); 
    }
}

// Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.

let count = 0
for(let i=1; i<=20; i++){
    if(i%2 !==0){
       count++
       console.log(i);
       if(count === 3){
        break;
       }    
    }
}


// Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

let count = 0;
for(let i=1; i<=5;i++){
    let number = +prompt("Enter a Number");
    if(number>0){
        count++;
    }
}
console.log(`The total number of positive are:${count}`);


// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”





