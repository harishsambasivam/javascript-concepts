// 1️⃣ . Function without private members
// function Pokemon(name) {
//   this.name = name;
//   this.getPokemonName = function () {
//     return this.name;
//   };
// }

// const pikachu = new Pokemon("pikachu");
// pikachu.getPokemonName(); // pikachu
// delete pikachu.name; // deleting the property
// pikachu.getPokemonName(); // undefined

// 2️⃣ . Private members using Closures
// function Pokemon(name) {
//   this.getPokemonName = function () {
//     return name;
//   };
// }

// let pikachu = new Pokemon("pikachu");
// pikachu.getPokemonName(); // pikachu
// delete pikachu.name; // !? we cant
// pikachu.getPokemonName(); // pikachu

// DrawBack:
//   - prototypes can't access closured variable.

// 3️⃣ . Drawback of closured pivate member
// function Pokemon(name){}

// Pokemon.prototype.getPokemonName = function(){
//     return name;
// }

// let pikachu = new Pokemon("pikachu");
// pikachu.getPokemonName(); // name is undefined

// 4️⃣ . Protype accessible private members using Es6 symbol.

const Pokemon = (function () {
  const nameSymbol = Symbol("name");

  function Pokemon(name) {
    this[nameSymbol] = name;
  }

  Pokemon.prototype.getPokemonName = function () {
    return this[nameSymbol];
  };
  return Pokemon;
})();

let pikachu = new Pokemon("pikachu");
pikachu.getPokemonName(); // pikachu
delete pikachu.name; // !? we cant, because pikachu[name] is a unique symbol
pikachu.getPokemonName(); // pikachu
