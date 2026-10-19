// switch - alternative to if else
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
//string methods - allow you to manipulate and work with strings in JavaScript
let userName = "Morgan    ";
console.log(userName.charAt(0)); //returns the character at the specified index
console.log(userName.indexOf("o")); //returns the index of the first occurrence of the specified character
userName = userName.trim(); //removes whitespace from both ends of a string
// toUpperCase() to LowerCase()
let result = userName.startsWith(" "); //returns true if the string starts with the specified character
// endsWith() - returns true if the string ends with the specified character
let result2 = userName.includes(" "); //returns true if the string contains the specified character

phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.padStart(12, "0"); //pads the string with the specified character until it reaches the specified length

// string slicing creates a substring from a portion of the original string
let slicedString = phoneNumber.slice(0, 3); //creates a substring from index 0 to index 3 (not inclusive)


// method chaining allows you to call one method after another
let userName2 = "   Morgan   ";
let result3 = userName2.trim().toUpperCase().startsWith("M");

// spread operator - allows you to expand an iterable such as an array or object into individual elements
let numbers = [1, 2, 3];
let maximum = Math.max(...numbers); //returns the maximum value from the array
// a shallow copy of an array or object can be created using the spread operator
let fruits = ["apple", "banana", "cherry"];
let newFruits = [...fruits]; //creates a shallow copy of the fruits array