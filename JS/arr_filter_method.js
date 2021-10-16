// array.filter() in JavaScript

let arrayOfNumbers = [0, 1, 2, 3, 4, 5];
let result1 = arrayOfNumbers.filter((element)=>{
    if(element >= 2) 
        return true;
    else
        return false;
});
// console.log(result1);

let result2 = arrayOfNumbers.filter((element)=> element>=2);
console.log(result2)