
//******************* JSON & ARRAYS **************************************


const students = [
    { name: "Alice", age: 19, score: 88 },
    { name: "Ben", age: 22, score: 75 },
    { name: "Cara", age: 20, score: 95 },
    { name: "Dan", age: 21, score: 62 },
    { name: "Ella", age: 23, score: 81 }
];



// Use .map() to create an array of just the student names


// WRITE CODE BELOW
const studentNames = students.map((students) => students.name);
console.log(studentNames);


// Use .filter() to get only the students over 21


// WRITE CODE BELOW
const over21 = students.filter((students) => students.age <= 21);
console.log(over21);


// Use .find() to get the first student with a score below 70

const below70 = students.find((score) => score < 70);
console.log(below70);

// Use .reduce() to calculate the TOTAL of all student scores



const total = Object.values(students).reduce((sum, item) => item.score, 0);
console.log(total);

// Calculate the AVERAGE score (hint: use .reduce and divide by length)
const average = total / students.length;
console.log(average);

// Combine methods: filter students over 20, then map to just their names


// WRITE CODE BELOW
const over20Names = students.filter(student => student.age > 20).map(student => student.name);

console.log(over20Names);

// Sort the students by score (highest to lowest)

// WRITE CODE BELOW
const studentScores = students.map((students) => students.score);
console.log(Studentscores.sort());

// Convert this string to a JS object using JSON.parse


const jsonData =
    '[{"name":"Fred","age":20,"score":72},{"name":"Gina","age":22,"score":91}]';

// WRITE CODE BELOW
const parsed = JSON.parse(jsonData);
console.log(parsed);