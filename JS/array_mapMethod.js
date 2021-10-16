// array.map() in JavaScript

let arrayOfNumbers = [0, 1, 2, 3, 4, 5];

let newArr = arrayOfNumbers.map((element)=>{
    // console.log(element)
    return element*2;
})

console.log(newArr);