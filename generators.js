class Cartoons {
  constructor(cartoonnames) {
    this.names = cartoonnames;
  }

  getName() {
    return this.names;
  }

  *cartoonGenerator() {
    for (let cartoon in this.names) yield this.names[cartoon];
  }
}

const cartoons = new Cartoons([
  { name: "tom & jerry" },
  { name: "Mr.bean" },
  { name: "pokemon" },
]);

let cartoonIterator = cartoons.cartoonGenerator();

for (let cartoon of cartoonIterator) {
  console.log("-");
  console.log(cartoon);
}

cartoonIterator = cartoons.cartoonGenerator();

console.log(cartoonIterator.next()); // {done:false,value:'tom & jerry'}
cartoonIterator.next(); // {done:false,value:'Mr.bean'}
cartoonIterator.next(); // {done:false,value:'pokemon'}
cartoonIterator.next(); // {done:true}
cartoonIterator.next(); // {done:true}
