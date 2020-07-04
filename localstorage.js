


function setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

function getItem(key){
    let value = localStorage.getItem(key);
    return JSON.parse(value);
}


setItem('name','harish');


let name = getItem('name');
console.log(name);

setItem("address",{
    street:"east street",
    village:"chidambaranathapuram"
});


setItem('hobbies',['cricket','blogging'])

let hobbies = getItem('hobbies');
console.log(hobbies)



localStorage.removeItem('name');
console.log(localStorage.length)

