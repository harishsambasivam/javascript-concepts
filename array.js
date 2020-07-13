class Array {
  constructor(arr) {
    this.values = arr;
    this.length = this.values.length;
  }

  foreach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.values[i], i, this.values);
    }
  }

  map(callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      let val = callback(this.values[i], i, this.values);
      res.push(val);
    }
    return res;
  }
}

let arr = new Array([1, 2, 3, 4, 5, 6]);
arr.foreach((ele) => console.log(ele));
let multipleOfTwo = arr.map((e) => e * 2);
console.log(multipleOfTwo);

// ===========================================
// Refactored version:
// ===========================================

class Array {
  constructor(value) {
    this.internalArray = value;
    this.length = this.internalArray.length;
  }

  foreach(callback) {
    // Robustness principle – Postel’s law, after Jon Postel
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    for (let i = 0; i < this.length; i++) {
      const currentValue = this.internalArray[i];
      callback(currentValue, i, this.internalArray);
    }
  }

  customMap(callback) {
    // Robustness principle – Postel’s law, after Jon Postel
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let transformedArray = [];
    // Projects each element of a sequence into a new form.
    for (let i = 0; i < this.length; i++) {
      const currentValue = this.internalArray[i];
      const currentTransformedValue = callback(
        currentValue,
        i,
        this.internalArray
      );
      transformedArray.push(currentTransformedValue);
    }
    return transformedArray;
  }
}

let numbers = new Array([1, 2, 3, 4, 5, 6]);
numbers.foreach((item) => console.log(item));
let multipleOfTwo = numbers.customMap((element) => element * 2);
console.log(multipleOfTwo);

// ===========================================
// Another version:
// ===========================================

("use strict");

var Array = /*#__PURE__*/ (function () {
  function Array(value) {
    this.internalArray = value;
    this.length = this.internalArray.length;
  }

  var _proto = Array.prototype;

  _proto.foreach = function foreach(callback) {
    // Robustness principle – Postel’s law, after Jon Postel
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    for (var i = 0; i < this.length; i++) {
      var currentValue = this.internalArray[i];
      callback(currentValue, i, this.internalArray);
    }
  };

  _proto.customMap = function customMap(callback) {
    // Robustness principle – Postel’s law, after Jon Postel
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    var transformedArray = []; // Projects each element of a sequence into a new form.

    for (var i = 0; i < this.length; i++) {
      var currentValue = this.internalArray[i];
      var currentTransformedValue = callback(
        currentValue,
        i,
        this.internalArray
      );
      transformedArray.push(currentTransformedValue);
    }

    return transformedArray;
  };

  return Array;
})();
let numbers = new Array([1, 2, 3, 4, 5, 6]);
numbers.foreach((item) => console.log(item));
let multipleOfTwo = numbers.customMap((element) => element * 2);
console.log(multipleOfTwo);
