//Basically creating an element using react.create element is more code written

import React from "react";

// const root=ReactDOM.createRoot(document.getElementById('container'));
// const div=React.createElement('div', null,React.createElement(...,,,,,),React.createElement(..sa.,,,..));

// root.render(div);

// But we can use the code which looks like HTML
// const element=<h1>Hello</h1>;
//  const root=ReactDOM.createRoot(document.getElementById('container'));
// root.render(element);

//This is called JSX: JavaScript XML

//babel is a compiler that converts the xml code into React.createElement();

//JSX syntax is converted into React.create() by babel
//React.createElement() returns the React element or JavaScript object.
//ReactDOM uses the react elemnt and converts into HTML elemetns

//What is the difference betweent he JSX and HTML ?
// in HTML we use class:"first", but in JSX we have to use className:"first"
//hence they both are not same;

//Some Good Practices of using the JSX syntax

//->keeping the brackets

//Wrapping up the code into one root

//Usage of the symbole {}

// const name="pranesh";
// const newElement=<h1 className="first">My name is {name}</h1>
// root.render(newElement);

// React Component is a functio which return the jsx elment

// function App(name){

//     return (
//         <h1>Hello Coder Army {10+20}</h1>
//     );
// }



// const a = App("Rohit");
// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)
// Object: Error

// const age= 10;
// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>

//Those which give only one value, can work inside{}, but when you create an object
// {name: pranesh, age:20}, it doesn't know how to display it. Hence it will throw error 

//Creating a simple bank account website;

//In the whole onject, if we want particular part, we will use the following syntax
//const {name}=props //only name key of the props object will be available

function Header({name}){
    return (
        <h1>{name} Welcome to State Bank of India</h1>
    )
}
function Main({details}){
   return( <>
    <h2>Enter Your Account number</h2>
    <h2>account no:{details.accountNO}</h2>
    <h1>{(details.balance>details.withdraw)?"you can withdrwa money":"you cant withdraw"}</h1>
    </>
   )
}

function Footer(){
    return(
        <h1>thanks for visisting</h1>
    )
}


// function App(){

//     return (
//         <>
//        <Header name="Rohit"></Header>
//        <Main details={{accountNO:21312412, balance:15000, withdraw:8888}} ></Main>;
//         <Footer/>
//        </>
//     )
// }
 const root = ReactDOM.createRoot(document.getElementById('container'));


const element=React.createElement("div",null,<Header name="Rohit"></Header>,<Main details={{accountNO:21312412, balance:15000, withdraw:8888}} ></Main>,<Footer/>)
root.render(element);

// This is missing entirely!
// function Header({ name }) {
//     return <h1>Welcome, {name}</h1>;
// }

// function Main({user}){

//     return (
//         <>
//         <h2>Hi {user.name}</h2>
//         <h3>{user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
//         <p>Your city is {user.city}</p>
//         </>
        
//     )
// }

// function Footer(){

//     return (
//         <h3>Thansk for visiting our website</h3>
//     )
// }

// // function Card(){

// // }


// function App(){

//     return (
//         <>
//        <Header name="Rohit"></Header>
//        <Main user={{name:"Rohit",age:30,city:"Kotdwar"}}></Main>
//        <Footer />
//        </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('container'));

// root.render(<App/>);


