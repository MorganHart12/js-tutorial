//dates
const d1 = new Date();
// lots of formats for dates including times
const d2 = new Date("2026-01-10");

const d3 = new Date(2026, 11, 19, 11, 12, 59)

console.log(d2);
console.log(d3);

// dispalaying dates auto conveerts to string via toStirng()
// toDateString or toUTCString can be used to change the format

d3.getHours();

d2.getDay();

d1.setFullYear(2022, 11);

d2.setHours(21);

//     a     r r r r     a      y     y    s s s
//    a a    r     r    a a      y   y    s     s
//   a a a   r r r r   a a a      y y      s s
//  a     a  r   r    a     a     y           s
// a       a r    r  a       a   y       s s s


const food = [
    "burgers",
    "fries"
];

const cars = [];

cars[1] = "vw";
cars[0] = "bmw";

let text = JSON.stringify(food);

// new array() creates and array object

//new Array()	Creates an empty array.
//new Array(x)	Creates an array with x empty spots.
//new Array(elem1)	Creates an array with one element.
//new Array(elem1,...,elemN)	Creates an array with multiple elements

new Array();


//there are many built in array methods such as 

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.at(3); //gets the fruit at index 3 

// pop remove(removes last element & returns it) and push (adds element to end)

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

// maps

// maps store collections of key value pairs like a dictionary
// but the key be any data type

Map.set();

const fruits3 = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// or

const fruits4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

fruits3.get("apples") // returns 500

// like arrays maps are also objects

// loops

// they work like in c with for, while and do while

// for x in loops iterate over object keys
//for x of loops iterate of#ver values of iterable objects