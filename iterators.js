class Users{
  constructor(users){
      this.users = users;
  }

  get(){
    return this.users;
  }
}

let allUsers = new Users([
  {name:'arun'},
  {name:'sai'},
  {name:'bala'},
])

/*

[...allUsers] // allusers is not iterable

for(let user of allUsers){ // allusers is not iterable
  console.log(user);
}

*/

class Cartoons{
  constructor(cartoonnames){
    this.names = cartoonnames;
  }

  getName(){
    return this.names;
  }

  [Symbol.iterator](){
    let index = 0;
    let cartoons = this.names;

    return (
      function next(){
        if(index < cartoons.length) {
          return {
            done:false,
            value:cartoons[index++]
          }
        }
          return {done:true}
      }
    )
  }

}

const cartoons = new Cartoons([{name:'tom & jerry'}, {name:'Mr.bean'}, {name:'pokemon'}]);
const iterator = cartoons[Symbol.iterator]();

iterator() // {done:false,value:'tom & jerry'}
iterator() // {done:false,value:'Mr.bean'}
iterator() // {done:false,value:'pokemon'}
iterator() // {done:true}
iterator() // {done:true}
