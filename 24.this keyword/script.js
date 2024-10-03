// const profile = {
//     name:"Alex",
//     age:20,
//     getName: function(){
//         console.log(this.name)
//     }
// }

// profile.getName()

// pure function and impure function
// Difference between pure and impure function

/////************************/ pure function

// Function which doesn't use the data outside of the function is calles the pure function


//********************************impure function  */


// Function which uses the data outside of the function is called the impure function

// let d ="Hello"

// function greet(v){
//     console.log(v)
// }

// greet(d)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Difference between normal function and arrow function

function greet (){
    console.log(this)
    console.log(arguments)
    console.log(globalThis)
}

greet()
console.log("Normal function")

console.log("---------------------------------------------")

console.log("Arrow function")

// TODO: Normal function vs arrow function in javascript
const greetArrow = ()=>{
    console.log(this)
    // console.log(arguments)
    console.log(globalThis)
}

greetArrow()
