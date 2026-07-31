// objects and class 
// object oridented programing

// class BiscuitMaker{
//     constructor(params) {
//         this.name = "ParleG";
//         this.price = 10;
//     }
// }

// let biss = new BiscuitMaker();
// let biss1 = new BiscuitMaker();
// let biss2= new BiscuitMaker();
// let biss3= new BiscuitMaker();


class Book{
    constructor(name,price,author,color){
       this.name=name;
       this.price=price;
       this.author=author;
       this.color=color;
    }

    pannaPalto(){}
    bookmarkLagao(){}
    readBook(){}
}

let k1 = new Book('javascript',4000,'indrajeet','green');
let k2 = new Book('java',300,'veer','blue');
let k3 = new Book('C++',200,'om','white');