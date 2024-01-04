//syntax: typeof operand.
console.log(typeof true);
console.log(typeof "hello");
// eg fo return a number

console.log(typeof 33);
console.log(typeof Math.LN2);
typeof(Number ("1"));
typeof(Number("hi"));
typeof(NaN);

//eg for strings

console.log(typeof "");
console.log(typeof "hi");
console.log(typeof `template literal`);
console.log(typeof typeof 1);
console.log(typeof String(1));
console.log(typeof "1");

//eg for boolean

console.log(typeof true);
console.log(typeof false);
console.log(typeof Boolean(0));
console.log(typeof !!1);//it calls the logical not operator which is equivalent to boolean().

//eg for symbol

console.log(typeof Symbol());
console.log(typeof ("foo"));
console.log(typeof Symbol.iterator);

//eg for undefined

console.log(typeof undefined);
console.log(typeof undeclaredVariable);

//eg for objects

console.log( typeof {a:1});

//array

console.log(typeof function () {});
console.log(typeof class c{});
console.log(typeof Math.sin);

//using new operator->all constructor function called with new will return non-primitive types.
const str=new String("string");
console.log(typeof str);
const num=new Number(10);
console.log(typeof num);
const func=new Function();
console.log(typeof func);


//the typeof operator has higher precedance than the binary operators like +.

const num1=90;
console.log(typeof num1+"hello");
console.log(typeof (num1+"hello"));
//parentheis are used to determine the datatype.
 



