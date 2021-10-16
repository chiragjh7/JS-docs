findArray = (...params) => {
let sum = 0;
for(let data of params)
    sum += data;
console.log(sum);
}

findArray(1);
findArray(1, 2);
findArray(1, 2, 3);
findArray(1, 2, 3, 4);