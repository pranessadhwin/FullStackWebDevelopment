//how to create an html element usin JavaScript

const { createElement } = require("react");

const newEle = document.createElement('h2');
//How to push content into this element?

newEle.textContent = "Hello World";
newEle.style.color = "yellow";
newEle.className = "first";
newEle.id = "firstID";

//how to push the newEle into container
//We use the append which creates a childer in the DOM of the container

// cont.append(newEle);
// //cont.prepend(newEle);

//difference between the append, appendchild, prepend?
//append adds as the last child whereas prepend adds as the first child of the DOM.

//if we want to create some hundreds of like this elements,
//then we need to copy paste the code and change the vaiue.
//Instead we can use a function in which we pass tags, attributes and children
//and then the function returns the newElement.

//for example

// const func = function (tag, attributes, children) {
//     const newElement = document.createElement(tag);
//     newElement.textContent = children;
//     //since the attributes are passed as an object, we have to iterate over the
//     //object and extract the attribute
//     for (const key in attributes) {
//         if(key==='style')
//             Object.assign(newElement.style, attributes.style);
//         else{
//             newElement[key] = attributes[key];
//         }
//     }
//     return newElement;

// }
//since we are passing the object in abother object, direct copying is not possible.
//hence we need to explicitly copy by using object.assign()
// cont.append(func("h1", { className: "second", style:{color:"yellow",}}, "pranesh"));


//So we basically creates an object of different type of functions.
//that is called as React.
//React is an object which contains multiples inbuilt function. We take help of the functions
//and simplify our code writing part

//building a custom reactDOM.
//first creating our own react elment. THis is an object only
// const Reactelement = {
//     type: "h1",
//     props: {
//         className: "container",
//         id: "first",
//         textContent:"helloafakjf ake"
//     }
// }

// const cont = document.querySelector('#container');
// //creating the corresponding reactDOM
// const reactDOM = {
//     render: function (element, cont) {
//         const newElement = document.createElement(element.type);

//         const props=element.props;
//         for (const key in props) {
//             if (key === "style") {
//                 Object.assign(newElement.style, props.style);
//             }
//             else if (key === "children") {
//                 newElement.textContent = props[key];
//             }
//             else if(key=="className"){
//                 newElement.className=props[key];
//             }
//             else {
//                 newElement[key] = props[key];
//             }
//         }

//         cont.append(newElement);

//     }

// }

// const Reactelement=React.createElement("h1",{className:"second"},"mynameispranes");
// reactDOM.render(Reactelement, cont);

//if you create another element and render it, the previous one gets deleted. It is by default nature of react
// to display two elements
//const div=React.createElement('div',null,element1, element2,.....); 
//this is older method and gives warning sometimes

//new method id
const root = ReactDOM.createRoot(cont);
root.render(div);

//react only tells how the UI should look like.
//it is also called virtual
//reactDOM handles all the operations like createelement, rendering etc..

//If we create our own react and reactDOM, then react.createlement, reactDOM.render
//will follow ours as it is close and the react links in HTML file is ignored

//why did they created both, react and reactDOM?
//React is used in websites, apps, pdfs etc.., so for all same rendering machine
//is not possible. Hence for different applications, different rendering machines were created.

