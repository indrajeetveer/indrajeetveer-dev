import box from "./app.mjs";
import circle from "./app2.mjs";

let h1 = React.createElement('h1',{id:'veer'},'learn React');
let h2 = React.createElement('h1',{id:"two"},'I am indrajeet')

let div =React.createElement('div',{id:"div"},[h1,box,circle,h2])
let container = ReactDOM.createRoot(document.querySelector("#container"))
container.render(div);