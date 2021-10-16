var myMap = new Map();
myMap.set(1, "chi");
myMap.set(2, "rag");
myMap.set(3, "jha");
myMap.set(4, "riya");

for(let [key, val] of myMap){
    console.log(`key is: ${key} and value is ${val}`);
}
myMap.forEach((v, k)=> console.log(`${v} and key is ${k}`));
