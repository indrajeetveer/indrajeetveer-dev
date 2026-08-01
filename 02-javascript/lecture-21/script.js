// // Class Expression

// class Student{
//     constructor(params) {
//         this.name="indrajeet";
//         this.age=22;
//         this.lastname="Veer"
//     }
// }

// let s1 = new Student();
// console.log(s1);

// let Animal = class{
//     constructor(){
//         this.name="Dog";
//         this.color="black";
//         this.age=11;
//     }
// }

// let a1 = new Animal();
// console.log(a1);


// set()  and get()

class Hero{
    constructor(){
        this.name="veer";
        this._age=22;
    }

    set age(val){
      if(val<0){
        console.error("not");
        return;
      }
      this._age = val;
      return this._age;
    }

    get age(){
        return this._age;
    }
}

let h1 = new Hero();
h1.age = 23;
console.log(h1);


