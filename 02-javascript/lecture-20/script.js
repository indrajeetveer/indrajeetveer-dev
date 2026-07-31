class Bottle{
     constructor(){
        this.color='blue';
        this.price=132;
        this.material="plastic"
    }
}

Bottle.prototype.Fill =function(){
    console.log('Fill the bottel');    
}

Bottle.prototype.Drink = function(){
    console.log(`Addition is ${10+10}`);
    
    
}

let b1 = new Bottle();
let b2 = new Bottle();


// This key Word //

console.log(this);  //  windo

function mess(){
    console.log(this);   //  windo
}

mess();

let obj = {
    name:"Veer",
    age:21,
    fun : function message(){
        console.log(this); 
    }
}

obj.fun(); // object

let obj1 ={
    fun:()=>{
        console.log(this);
    }
}

obj1.fun();  // windo
