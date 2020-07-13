// 1️⃣ Symbol()

const symbol1 = Symbol();
const symbol2 = Symbol();

// ❌ Symbols can’t be created by using “new” keyword

symbol1 === symbol2; // false (symbols are unique)

// Creating symbols with description

const name = Symbol("name");
const age = Symbol("age");

// 2️⃣ Symbol.for()

const map = Symbol.for("Array.map"); // creating a new Symbol with descripton "Array.map"

const customMap = Symbol.for("Array.map"); // creating a symbol for "Array.map" again.

// Array.for() returns the symbol if symbol already exists

map === customMap; // true

// the reason to use symbol.for is to create a symbol in one place and access the value stored in symbol in another place

const type = Symbol.for("type");
const animal = { name: "elephant", type: "MAMMAL" };
animal[type] = "mammal"; // setting the property with symbol as key

animal[Symbol.for("type")]; // mammal

animal["type"]; // MAMMAL
animal[type]; // mamma;

// we need to use [] notation when accessing  symbol, dot operators only work on string properties

// ✅ Reasons to use symbol

// 1️⃣ symbols are invisible to loop
// 2️⃣ symbols are unique
// 3️⃣ Inbuilt global symbols like Symbol.iterator,Symbol.search

// 1️⃣ symbols are invisible to loop

const zoo = {
  location: "Arignar Anna Zoological Park",
  animals: ["tiger", "lion", "elephant", "monkey"],
};

const rating = Symbol("rating");
const area = Symbol("area");

zoo[rating] = "4.7 out of 5";
zoo[area] = "6 km";

for (let key in zoo) {
  console.log(zoo[key]); // Arignar Anna Zoological Park, ['tiger', 'lion', 'elephant', 'monkey']
}

zoo[rating]; // 4.7 out of 5
zoo[area]; // 6 km

// 2️⃣ symbols are unique

// if we are implementing our own array methods, we can make use of symbols to avoid name collision

const forEach = Symbol("my custom forEach");

Array.prototype[forEach] = (callback) => {
  for (let i = 0; i < length; i++) {
    callback(element, index, array);
  }
};

Array.prototype.foreach; // Array method
Array.prototype[forEach]; // our implemented method

// no collision ☺

// 3️⃣ global symbols

// String.prototype.search

"spider monkey".search("monkey"); // returns  7

/*

step 1: new String('spider monkey')
step 2 : new RegExp('hello') -->  /monkey/
step 3: invoke search method on 'spider monkey'
step 4 : search method will internally calls [Symbol.search] on 'monkey', 'monkey'[Symbol.search]('spider monkey')
step 5: 'monkey'[Symbol.search]('spider monkey') --> 7

*/

class String {
  constructor(text) {
    this.text = text;
  }

  search(regex) {
    regex[Symbol.search](this.text);
  }
}

class Regex {
  constructor(value) {
    this.value = value;
  }

  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

// we can pass any obj that implements Symbol.search to search(), not just limited to regex

class Animal {
  constructor(name) {
    this.name = name;
  }

  [Symbol.search](string) {
    return string.indexOf(this.name);
  }
}

const monkey = new Animal("monkey");
const spider = new Animal("spider");

"spider monkey".search(monkey); // 7
_ = "spider monkey".search(spider); // 0
