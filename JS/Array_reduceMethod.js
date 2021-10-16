let arrayOfNumbers = [0, 1, 2, 3, 4, 5];
let counter = 0;
let res = arrayOfNumbers.reduce((previousValue,currentValue)=>{
    counter++;
    previousValue = previousValue + currentValue

    return previousValue;
},30);
console.log(counter);
console.log(res);

/*
prevVal = 30 --- currentVal= 0
prevVal = 0 --- currentVal= 1
..........
prevVal = 10 --- currVal = 5
*/