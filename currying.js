// What is Currying?
// => Currying is a process of reducing functions of more than one argument to functions of one argument.

// Example without Currying

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(add(1,2,3)) // 6

// Example with Currying

function curryedAdd(num1) {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3;
        }
    }
}

console.log(curryedAdd(1)(2)(3)) // 6
