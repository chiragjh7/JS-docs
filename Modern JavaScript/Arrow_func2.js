function test(params) {
    return {
        name:`hello`,
        printName:function() {
            console.log(this.name);
        },
        printNames: () => {
            console.log(this.name);
        }
    }
}

name = `Chirag`;
let data = test();
data.printName()  // where the function is declared
data.printNames() // where its executing