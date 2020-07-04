// library called greetingJS
(
    function(name){
    let greeting = "hola ";
        console.log(greeting + name);
    }
)('everyone');
//library called hiJS

let greeting = "hi ";

function greet(name){
    console.log(greeting + name);
}

// Now if you use both these librarys there will be a colloison
// Frameworks and libraries use IIFE to solve colloision

// hiJS

(
    function(name){
    let greeting = "hi ";
        console.log(greeting + name);
    }
)('everyone');


