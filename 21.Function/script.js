// Function 

//Function is a block of code which only runs when it is called
//Function is a subprogram that performs a particular task

//Here we are using function paradigm

// function functionname(){
//     console.log("Hello")
// }

// functionname()


// function functionname(){
//     console.log("Hello")
// }

// functionname()
// let x= functionname()

//console.log(x)

//1. By default function returns undefined
//2. Return line be the last line of the function
//3. Only single entity must be returned by the function 
//4. Function call is repalaced by its return value
//5. CODE written after return in the function wull be not reachable or be ignored 


// function func_add(a, b){

//    sum = a+b
//    console.log(sum)
// }


//  func_add("b",2)

// +++++++++++++++++++++++++++++++++++++++++++++++25/09/2024++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Return keyword kisi bhi function ke andar hue operation ko bahar nikalne ke liye use hota hai

 // Function -> not compulsory to return anything
 // Method(object)-> compulsory to return something

//  function getName(){
//     console.log("John")
//  }
 

//  getName() // our function call (non parameterized function)
//  console.log("Hello")   //Js function call (parameterized function call)

// function getName(name){ //parameter(s)
//    console.log(name) 
// }

// getName("John") // argument(s)

// function getname(name,city){
//    console.log(n,c)
// }

// let n = "John"
// let c = "Delhi"
// getname(n,c)

// function getsum(a,b){
//    sum = a+b
//     return sum
// }

// let res = getsum(2,3)
// let multiple = 5

// console.log(res*multiple)

// +++++++++++++++++++++++++++++++++++++++++++++++26/09/2024++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getdetails(name,batch = "Mern12"){
//     console.log(name,batch)
// }

// getdetails("John")
// getdetails("Aman", "Batch12")

// 1. Default parameter must be the last parameter of the function 
// 2. There should only 1 default parameter in the function  


// Rest operator

// function hobbies(...hobbies){
//     console.log(hobbies)
// }

// hobbies("Cricket","Football")
// hobbies("Cricket","Hockey")
// hobbies()

//1. Rest operator must be the last parameter of the function
//2. there must be only one rest parameter in the function

// const greet = ()=> {
//      return "hello"
// }

// const greet = ()=> "hello"

// const sum = (a,b) => a+b;
// sum(2,3)