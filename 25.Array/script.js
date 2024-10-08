// // Array are hetrogenous data type

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr)

// *********************************************************************

// //Accessing elements
// console.log(arr[0])
// console.log(arr[5])
// console.log(arr.at(-1))

// *****************************Updating elements****************************************

// arr[0] = 100
// console.log(arr)

// let res1 = arr.push(11,12,13)// These are mutable methods  and also return the new length of the array
// let res2 = arr.unshift(15,16,17)// These are mutable methods and also return the new length of the array

// console.log(arr)
// console.log(res1,res2)

// ****************************Delete elements****************************************

// console.log(arr.pop()) //Delete last element
// console.log(arr.shift()) //Delete first element
// console.log(arr.splice(1,2))  // Delete 2 elements from index 1 . first argument is the index from where we want to delete the elements and second is the number of elements to be deleted

//Traversing an array

// for(let element of arr){
//     console.log(element)
// }

// Foreach vs map

//***************************************foreach****************************************************************

// console.log(arr)
// arr.forEach((element,index) =>  {    //It is a mutable method  means it changes the original array
//    arr[index]= element*2
//     console.log(element,index)
// })
// console.log(arr)

//****************************************map*******************************************************************

// let arrcopy = arr.map((element,index) =>  {       //It is a immutable method that means it doesn't change the original array
//      return element*2
// })

// console.log(arr)
// console.log(arrcopy)
// console.log(arr)

//*******************************************************filter*******************************************************************

// let filteredData = arr.filter((element,index) =>  {       //It is a immutable method that means it doesn't change the original array
//      return element%2==0
//  })

//  console.log(filteredData)
//  console.log(arr)

//***********************************************************************find***********************************************

// let filteredData = arr.find((element,index) =>  {       //It is a immutable method that means it doesn't change the original array)
//      return element%2==0
//   })

//   console.log(filteredData)
//   console.log(arr)

//***********************************************************************findIndex***********************************************

// let filteredData = arr.findIndex((element,index) =>  {       //It is a immutable method that means it doesn't change the original array)
//      return element%2==0
//   })


//*********************************************************includes***************************************************************

// console.log(arr.includes(5))


//*********************************************************some******************************************************************

// let x = arr.some((element,index) =>  {       
//          return element%2==0
//     })
// console.log(x)


// *********************************************************every******************************************************************


// let y = arr.every((element,index) =>  {       
//          return element%2==0
//     })

// console.log(y)


// *********************************************************reduce******************************************************************


// let sum = arr.reduce((accumulator,current) =>  {      
     // console.log(accumulator,current)
//     return accumulator+current
//     },0)

// console.log(sum)


// *****************************************************Array Destructuring*****************************************************************

// let [a,b,c] = arr
// console.log(a,b,c)

// let[,,,e,f,g,h] = arr

// console.log(e,f,g,h)


// *****************************************************Object Destructuring*****************************************************************

// let obj = {
//     name: "John",
//     age: 30
// }

// let {name,age} = obj
// console.log(name,age)