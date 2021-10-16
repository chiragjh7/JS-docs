// function init(){
//     var firstName = "Chirag";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//   return sayFirstName;
// }
// var val = init();
// val();

function doAddition(x) {
  return function (y) {
    return x + y;
  }
}
var add5 = doAddition(4);
console.log(add5(5));

// Because of Closures
console.log(doAddition(5)(5));