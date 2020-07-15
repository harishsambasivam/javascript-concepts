class Users {
  constructor(users) {
    this.users = users;
  }

  get() {
    return this.users;
  }
}

let allUsers = new Users([{ name: "arun" }, { name: "sai" }, { name: "bala" }]);

/*

[...allUsers] // allusers is not iterable

for(let user of allUsers){ // allusers is not iterable
  console.log(user);
}

*/

class Cartoons {
  constructor(cartoonnames) {
    this.names = cartoonnames;
  }

  getName() {
    return this.names;
  }

  [Symbol.iterator]() {
    let index = 0;
    let cartoons = this.names;

    return {
      next() {
        if (index < cartoons.length) {
          return {
            done: false,
            value: cartoons[index++],
          };
        }
        return { done: true };
      },
    };
  }
}

const cartoons = new Cartoons([
  { name: "tom & jerry" },
  { name: "Mr.bean" },
  { name: "pokemon" },
]);

console.log([...cartoons]); // [
// { name: "tom & jerry" },
// { name: "Mr.bean" },
// { name: "pokemon" },
// ]

for (let cartoon of cartoons) console.log(cartoon); // { name: "tom & jerry" }, { name: "Mr.bean" }, { name: "pokemon" },

const cartoonIterator = cartoons[Symbol.iterator]();

cartoonIterator.next(); // {done:false,value:'tom & jerry'}
cartoonIterator.next(); // {done:false,value:'Mr.bean'}
cartoonIterator.next(); // {done:false,value:'pokemon'}
cartoonIterator.next(); // {done:true}
cartoonIterator.next(); // {done:true}
