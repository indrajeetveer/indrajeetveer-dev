// let h1 = document.createElement('h1');
// h1.innerHTML = "Hello form Indrajeet";

// document.body.appendChild(h1)

// let h1 = React.createElement('h1',null,'I am Learn the react');
// let h2 = React.createElement('h1',null,"I am indrajeet");

// let div = React.createElement('div',null,[h1,h2])

// let container = ReactDOM.createRoot(document.querySelector('#root'));
// container.render(div)


function h1(){
    return React.createElement('h1',{id:"veer"},'learn React');
}

let container = ReactDOM.createRoot(document.querySelector('#root'))
container.render(h1())