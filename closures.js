function greet(greeting){
    return function(name){
        console.log(greeting + name);
    }
}

let  greetHi = greet('Hi');
greetHi('Everyone.'); // Hi Everyone.

// Call Stack stores the function call to execute.

// |                |  
// |                |
// |                |
// |________________|
// |Global Execution|
// |____Context_____|

// |                |
// |________________|               
// |    greet()     |  // Execution context of
// |  greeting="hi" |     greet
// |________________|
// |Global Execution|
// |    Context     |
// |________________|

// |    greetHi()   | // Execution context of greetHi.
// |name="everyone" |
// |________________|               
// | greeting="hi"  |  // Execution Context is poped off but greeting is still in memory.
// |________________|
// |Global Execution|
// |____Context_____|

// |    greetHi()   | 
// |name="everyone" | -------.
// |________________|        |   Eventhough greet function finshes execution    
// | greeting="hi"  | <------'   any function created inside still have reference 
// |________________|            to greet's memory and it's not garbage collected.
// |Global Execution|
// |____Context_____|


// This phenomenon of closing in all the variables it supposed to have access to
//  is called closure
//  -Anthony Alicea

// function foo(){
//     let functions = [];
//     for(var i=0;i<3;i++){
//         functions.push(
//             function(){
//                 console.log(i)
//             }
//         )
//     }
//     return functions;
// }



// function foo(){
//     let functions = [];
//     for(let i=0;i<3;i++){
//         functions.push(
//             function(){
//                 console.log(i)
//             }
//         )
//     }
//     return functions;
// }


function foo(){
    var functions = [];
    for(var i=0;i<3;i++){
        functions.push(
       (function(j){
            return (
                function(){
                    console.log(j)
                }
            )
        }(i))
      )
    }
        return functions;
}

let fns = foo();
fns[0]();
fns[1]();
fns[2]();