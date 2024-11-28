// let n = 0


// if(n>0 && n%2 == 0){
//     console.log("positive and even")
// }else if(n>0 && n%2 != 0){
//     console.log("positive and odd")
// }else if(n<0 ){
//     console.log("negative")
// }else{
//     console.log("zero")
// }


// How switch works

// switch (condition) {
//     case 1:
//         // code block
//         break;
//     case 2:
//         // code block
//         break;
//     default:
//         // code block
// }

// What is fall throw

// let name =  prompt("Enter Your Name")

// let age = +prompt("Enter Your Age")

// console.log(name,age)


// const res =age>18 ?"You can vote":`You are not eligible for vote for more ${18 - age} years`

// console.log(res)

// if (Number(age) >= 18) {
//     console.log("You can vote")}
//   else{
//     console.log( `You are not eligible for vote for more ${18 - age} years`)
//   }  



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter third number")


if(a ==b &&  b==c){
    console.log("All numbers are equal")
} else if(a==b || b==c || c==a){
    console.log("Two numbers are equal")    
}else{
    console.log("All numbers are different")
}