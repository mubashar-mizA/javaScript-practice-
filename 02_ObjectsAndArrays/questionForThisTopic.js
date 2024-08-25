//Question1: Given the following array of objects representing students, each with name and score properties:
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 }
]
//Write a JavaScript function that takes this array and returns an array of student names
//who scored above 90. How would you approach this problem using higher-order array methods?

// let studentWonScholrship = students.filter((student, indexOfStudent,array)=>{
//     return student.score > 90
// })

// console.log(studentWonScholrship);
//Question2: Consider the following object representing a car:
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    features: ["Air Conditioning", "Bluetooth", "Backup Camera"]
  };

//Write a JavaScript code snippet to add a new feature, "Sunroof," to the features array within the car object. 
//How do you ensure that the original object is not mutated if you need to maintain immutability?
car.features.push('Sunroof')
console.log(car);


