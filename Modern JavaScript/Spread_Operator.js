const arrone = [2,3,4];
const array = [1, ...arrone ,5,6];

console.log(array)

const emp = {
    name: "John",
    age: 23

}

// emp.profile = "developer"

// console.log(emp);

// console.log({...emp, profile: "developer" });

displayProfile = (emp) => {
    console.log(emp);
}

displayProfile({...emp, profile: "Developer", country: "India"});