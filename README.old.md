# portfolio-page-in-react
https://paula-wang.github.io/portfolio-page-in-react/ (I have deployed the app but when the link is clicked, the page is rendering blank- a white page)
**Questions**
1.What is NPM? NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

2.What is SPA? A single-page application (SPA) is a Web app that is presented to the user through a single HTML page to be more responsive and to more closely replicate a desktop application or a native app. 

3.What is the event loop? An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

4.What is the difference between export x and export default x? How do you import them differently? 
If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default.
If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports.

5.Why do you use className as a property in React and not class? class is a reserved keyword in JavaScript and since JSX is used in React which itself is the extension of JavaScript, className has to be used instead of class attribute.

6.Why should you not write the following? What will happen?
<button onClick={setCounter(counter + 1)}> +1 </button>
you are invoking the setCount function immediately when rendering the component, rather than passing it as a callback function to the onClick event handler.It just passes the same value over and over to setCount.

7.What is object deconstruction and how is it connected to React components (example)?
Destructuring was introduced in ES6. It’s a JavaScript feature that allows us to extract multiple pieces of data from an array or object and assign them to their own variables.it can greatly simplify how you write props in React. Here is an example:

import React from 'react';

// Without destructuring
const MyComponentWithoutDestructuring = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

// With destructuring
const MyComponentWithDestructuring = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};


8.How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
It uses a combination of HTML-like syntax called JSX and JavaScript code.

9.What is async/await? Bring an example
The async keyword is used with a function to represent that the function is an asynchronous function. The async function returns a promise. Here is an example:

// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f(); 

The await keyword is used inside the async function to wait for the asynchronous operation. The use of await pauses the async function until the promise returns a result (resolve or reject) value. Here is an example:

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

10.What is a Promise? Bring an example
A promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

A promise may have one of three states.

Pending
Fulfilled
Rejected
A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state. Here is an example:

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

The output is Promise {<resolved>: "There is a count value."}
