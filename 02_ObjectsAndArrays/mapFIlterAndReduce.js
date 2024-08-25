// Those methods which dont modified the original array they are called 
// non destructive methods are forEach, map, filter, reduce, some and every
// forEach and map are similar to eachother but map return a value explicitly forEach doesnt
 

// let myCourses = ['mth401', 'mth101', 'mth603', 'mth201']

// myCourses.forEach((course, index, array)=>{
//     console.log(`${index}`,course.toUpperCase());

// })

// *forEach array method just work for iteration purpose it returns undefined


// let myFavColrs = ['red','blue','green', 'orange']

// let defLengthColrs = myFavColrs.filter( (colrs, indexOfColr, array)=>{
    
//     // return colr.length > 3
    
//     // return colrs.includes( 'a' )
    
// } )

// console.log(defLengthColrs);

// const students = [
//     {
//         name:'Akbar',
//         age:14,
//         email:'akbar@14.com'
//     },
//     {
//         name:'Atif',
//         age:15,
//         email:'atif@15.com'
//     },
//     {
//         name:'Ali',
//         age:23,
//         email:'ali@23.com'
//     },
//     {
//         name:'Ahmed',
//         age:24,
//         email:'ahmed@24.com'
//     },
//     {
//         name:'Abdula',
//         age:25,
//         email:'abdula@25.com'
//     },
// ]

// let matureStudents = students.filter( (student,studentIndex,array)=>{
//     return student.age >= 18
// } ).map( (student,indexOfMathureStudent,)=>{
//     return student.name
// } )

// console.log(matureStudents);
// *We return the valuse based on condition






let nums = [1,2,3]
let sum = nums.reduce( (acc, currentVal, index, array)=>{
    return acc + currentVal
}, 0 )
// console.log(sum);





let numbers = [1,2]
const userTotal = numbers.reduce( (currVal, acc)=> currVal + acc , 0 )
console.log(userTotal);