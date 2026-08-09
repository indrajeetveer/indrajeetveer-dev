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
        fullElemPage[index].style.display = "block";dd
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


let h1 = document.querySelector(".heading")
async function info() {
    try {
        let raw = await fetch("https://dummyjson.com/quotes/random");
        let realdata = await raw.json();
        h1.innerHTML = `"${realdata.quote}"`
    } catch (error) {
        console.log("Error:", error);
    }
}
info();

let userinput = document.querySelector('input');
let btn = document.querySelector('#btn1');
let result = document.querySelector('#result');

btn.addEventListener("click", () => {

    let input = userinput.value;

    // Get old tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add new task to array
    tasks.push(input);

    // Save updated array to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Create heading
    const heading = document.createElement("h3");
    heading.innerHTML = input;
    heading.className = "task";
    heading.style.fontSize = "15px";

    // Show task on page
    result.append(heading);

    // Clear input
    userinput.value = "";
});
