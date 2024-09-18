// Conditional statement

// 01.Simple if

// if (true) {
//   //    statement1
// }

// 02. if else

// if (condition) {
//   // statement 1
// } else {
//   // statement 2
// }

// 03. else if

// if (condition) {
//   // statement 1
// } else if (condition) {
//   // statement 2
// } else {
//   // statement 3
// }

// // 04. nested if else

// if (condition) {
//   if (condition) {
//     // statement 1
//   } else {
//     // statement 2
//   }
// } else {
//   // statement 3
// }

let n = 11;

// if (n > 0) {
//   console.log("n is positive");
// } else {
//   console.log("n is negative");
// }

// if (n>0) {
//     console.log("n is positive");
// } else if(n<0) {
//     console.log("n is negative")
// } else{
//       console.log("n is zero")
// }  

if (n>0) {
   if (n%2==0) {
        console.log("n is Even");
   } else {
        console.log("n is Odd");
   }
} else if(n<0) {
    console.log("n is negative")
} else{
      console.log("n is zero")
}  