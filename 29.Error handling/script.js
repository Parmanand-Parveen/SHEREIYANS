// Try catch Block is used to handle synchronous ( code which runs line by line) core errors

// try {
//     let a = 10
//     console.log(a+b)
// } catch (error) {
//     console.log(error)   
//     console.log(error.name)
//     console.log(error.message)
// }

// console.log("Hello World")

// try {
//     let a = 10
//     console.log(a+b)
// } catch (error) {
//     console.log(error)   
//     console.log(error.name)
//     console.log(error.message)
// } finally{
//     console.log("kuch bhi ho jaye ,yhe block chalega hi chalega")
// }

// try {
//     let a = 12
//     let b = 5
//     if(a%b ==0){
//         throw new TypeError("Even value Not allowed")
//     }else{
//         throw new EvalError("Odd Values Not allowed")
//     }
// } catch (error) {
//     if(error.name == "TypeError"){
//         console.log(error.message)
//     } else if(error.name == "EvalError"){
//         console.log(error.message)
//     } else{
//         console.log("Something went wrong")
//     }
// }

