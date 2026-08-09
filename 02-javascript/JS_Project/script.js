// let allElems = document.querySelectorAll(".elem");
// let fullElemPage = document.querySelectorAll(".fullElem");
// let fullElemPageBackbtn = document.querySelectorAll(".fullElem .back")

// allElems.forEach((elem)=>{
//     elem.addEventListener('click',()=>{
//      fullElemPage [elem.id].style.display = 'block'
//     })
// })

// fullElemPageBackbtn .forEach((back)=>{
//      back.addEventListener('click',()=>{
//          fullElemPage[back.id].style.display = 'none'
//      })
// })

function openCards(){
let allElems = document.querySelectorAll(".elem");
let fullElemPage = document.querySelectorAll(".fullElem");
let fullElemPageBackbtn = document.querySelectorAll(".fullElem .back");

allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
        let index = Number(elem.id);
        fullElemPage[index].style.display = "block";
    });
});

fullElemPageBackbtn.forEach((back) => {
    back.addEventListener("click", () => {
        let index = Number(back.id);
        fullElemPage[index].style.display = "none";
    });
});
}

openCards();