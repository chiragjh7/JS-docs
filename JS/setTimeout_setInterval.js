// setTimeout and setInterval
let count = 0;
updateRootElement = ()=>{
    count++;
    document.getElementById("root").innerText = count;
}

// setTimeout(() => {
//     updateRootElement();
//     // console.log("setTimeout triggered")
// }, 3000);

// setTimeout(() => updateRootElement(), 1000);
// setTimeout(() => updateRootElement(), 2000);
// setTimeout(() => updateRootElement(), 3000);

// setInterval(() => {
//     updateRootElement();
// }, 1000);
