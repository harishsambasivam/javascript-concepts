function *cartoons(names){
    for(let name in names){
        yield names[name];
    }
}


const allCartoons = cartoons([{name:'tom & jerry'}, {name:'Mr.bean'}, {name:'pokemon'}]);

console.log(allCartoons.next()) // {done:false,value:'tom & jerry'}
console.log(allCartoons.next()) // {done:false,value:'Mr.bean'}
console.log(allCartoons.next()) // {done:false,value:'pokemon'}
console.log(allCartoons.next()) // {done:true}
console.log(allCartoons.next()) // {done:true}


function *myGenerator(){

    yield {name:"harish"};
    yield {name:'sai'};
}

let iterator = myGenerator();
iterator.next()
iterator.next()
