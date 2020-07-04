// function borrowing
// function currying
// creating a copy of a function but with some preset parameters(useful for mathematical libraries)

let arun = {
    firstname: "arun",
    lastname:"kumar",
    age:20,
    fullname:function(){
        return this.firstname+' '+this.lastname;
    }
}

let getAge = function(){
    return this.age;
}

getAge = getAge.bind(arun);
console.log(getAge());

// apply and call

let greet = function(greeting){
    return greeting +' '+ this.fullname();
}

console.log(greet.call(arun,'hi'));
console.log(greet.apply(arun,['hi']));



// function borrowing

let sai = {
    firstname:"sai",
    lastname:"rajan"
}

console.log(arun.fullname.apply(sai));


//function currying

function multiply(num1,num2){
    return num1*num2;
}

let multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(3));

// currying with closures

function multiply(num1){
    return function(num2){
        return num1 * num2;
    }
}


let multiplyByThree = multiply(3);
console.log(multiplyByThree(3));

// Currying may be useful if you have a function that you are passing around as a first class object, and you don't receive all of the parameters needed to evaluate it in one place in the code 








