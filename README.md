<h1 align="center">
<br>
  <a href="https://github.com/leonardomso/33"><img src="https://github.com/harishsambasivam/JSconcepts/blob/master/JavaScript-logo.png" alt="Concepts Every JS Developer Should Know" width=200"></a>
  <br>
    <br>
     Concepts Every JavaScript Developer Should Know!
  <br><br>
</h1>


## Introduction

This repository was created with the intention of helping developers. Use it as a guide for future studies. It is based on an repo written by [leonardomso](https://github.com/leonardomso/33-js-concepts) and some other resources which i used to learn JavaScript.

## Community
Feel free to submit a PR adding a link to your own recaps or reviews. If you want to translate the repo into your native language, please feel free to do so.

## Table of Contents
1. **[=== vs ==](#1-===-vs-===)**

## 1. === vs ==
JavaScript has two visually similar, yet very different, ways to test equality. You can test equality with == or ===.

### Double equals(==)

 when using ==, Javascript compiler just checks the equality of values regardles of their data types. it is called `loose equality`, Because when we are using (==) to perform equality Javascript compiler does something called `type coercion`.
 
 let's illustrate this with an example
 
 ```
    let number = 2;
    let string = '2';
    console.log(number == string);
    
    ouput: true
 ```
 == operator performs `type coercion` if conflicts of data types are found.
 
  ```
    let number = 2;
    let string = '2';
    console.log(number == string);
    
    console.log( 2 === '2' )
                 ↓             // ✅ type coercion to string
    console.log('2' === '2')   // ✅ comparision of values for equality
    
    ouput: true
 ```
 -[x] `number` variable is coerced to string from number datatype.
 -[x] The values are then compared for equality.
 
 one more example to illustrate it clearly
 
 ```
   console.log(0 == "");
   
   output: true
 ```
 
 How the output is logged as true 😵
 
 Remember the steps?
 -[x] type coercion.
 -[x] comparison of values.
 
 Type coercion is the tricky part. Both these values are converted into booleans in our above example.
 
 ```
    console.log( 0 ==      "");
                 ↓         ↓     // ✅ type coercion to boolean
    console.log(false == false); // ✅ comparision of values for equality
    
    output: true
 ```
 
 #### 💩 Avoid using `==` when your'e comparing values for equality.
 
 ### Triple equals(===)
 When using triple equals === in JavaScript, we are testing for `strict equality`.
 
  let's illustrate this with the same example which we used for ==
   ```
    let number = 2;
    let string = '2';
    console.log(number == string);
    
    ouput: false
 ```
  -[x] `number` variable is not coerced to string from number datatype.
  
     ```
    let number = 2;
    let string = '2';
    console.log(number == string);
    
    console.log( 2 === '2')   //  ✅ comparision of data type for equality (different data types)
    
    ouput: false
 ```
 
 the steps are as follows:
 -[x] type checking
 -[x] comparision of values for equality
 
  one more example to illustrate it clearly
 
 ```
   console.log(0 == "");
   
   output: false
 ```
 
 How the output is logged as false because `typeof(0) is number` and `typeof("") is string`.
 since the type is different the output is logged as `false` 
 
  ```
   console.log(0 == ""); //  ✅ comparision of data type for equality  (different data types)
   
   output: false
 ```
 one more example !?
 
   ```
   console.log(100 == 100); //  ✅ comparision of data type for equality  (same data type)
   console.log(100 == 100); //  ✅ comparision of values for equality  (same values)
   
   output: true
 ```
 
 
