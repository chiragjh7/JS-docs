// indexOf, includes, find methods in JavaScript

let arr = [9, 7, 3, 4, 5];

// console.log(arr.indexOf(5)); 

// console.log(arr.includes(1)) // returns true or false 

let empList = [
    {
        name:"Sahil",
        age:33
    },
    {
        name:"pinky",
        age:33
    }
]

let res = empList.find((element)=>{
    return element.age === 33;
}) //find an element or returns undefined

console.log(res);