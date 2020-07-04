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
