// Fetch takes the api and returns the string data in first then block , we have to convert the string data into the JSON by data.json() and we call another then which gives the fonal result afte that we put a catch for error handling


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data=>data.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// promises are used to handle error of async code


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// async function getData(){
//     try {
//         console.log("Application started")
//         let stringResult= await fetch("https://jsonplaceholder.typicode.com/users")
//         let jsonResult = await stringResult.json()
//         console.log(jsonResult)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let mypromise = new Promise((resolve,reject)=>{
//     fetch("https://fakestoreapi.com/users")
//     .then(data=>data.json())
//     .then(data=>resolve(data))
//     .catch(err=>reject(err))
// })

// async function getData(){
//     try {
//         console.log("Starting...")
//         let result = await mypromise
//         console.log(result)
//         console.log("Ending...")
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData()