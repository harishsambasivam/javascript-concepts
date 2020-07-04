// function factory

function greet(greeting){
    return function(name){
        console.log(greeting+' '+name);
    }
}

// we can use greet function as factory which creates many functions :)

let greetInEnglish = greet('hi');
let greetInTamil = greet('vannakam');
let greetInHindi = greet('namaskar');
let greetInSpanish = greet('hola');

greetInEnglish('John'); // hi John
greetInTamil('Ravi'); // vannakam Ravi
greetInHindi('Archis'); // namaskar Archis

// Literals for One, Factories for Many

let createAnimal = function({sound,picture}){
    return {
        sound,
        picture,
        makeSound:function(){
            console.log(this.sound);
        },
        showImage:function(){
            console.log(this.picture);
        }
    }
} 


let cat = createAnimal({sound:"meow",picture:"😼"})
let dog = createAnimal({sound:"hau-hau",picture:"🐶"})


// factory function which converts array to obj.
const arrayToObj = ([key, value]) => { 
    return { 
        [key]: value 
    } 
} ;

// factory function which rotates an array.
const rotate = ([first, ...rest]) => [...rest, first];

// factory function which swap two elements.
const swap = ([first, second]) => [second, first];


// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1#:~:text=In%20JavaScript%2C%20any%20function%20can,classes%20and%20the%20new%20keyword.




    