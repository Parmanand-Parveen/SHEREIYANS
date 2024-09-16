// 1. Arithmetic Operators

{
    let m = 15
    let n = 5
    let sum = m+n
    console.log(`the sum of ${m} and ${n} is ${sum}`)
}

{
    let m = 15
    let n = 5
    let sub = m-n
    console.log(`the subtraction of ${m} and ${n} is ${sub}`)
}

{
    let m = 15
    let n = 5
    let mul = m*n
    console.log(`the multiplication of ${m} and ${n} is ${mul}`)
}

{
    let m = 15
    let n = 5
    let div = m/n
    console.log(`the division of ${m} and ${n} is ${div}`)
}

{
    let m = 15
    let n = 5
    let mod = m%n
    console.log(`the modulus of ${m} and ${n} is ${mod}`)

    // Whenever we modulo a small number by a large number it gives us the small number as the answer.
}

{
    let m = 15
    let n = 5
    let exp = m**n
    console.log(`the exponential of ${m} and ${n} is ${exp}`)   
}

//02. pre/post Increment/decrement
{let a =12;

let res = ++a + ++a + ++a + a--

console.log(res)
console.log(a)}

// 03. Comparison operators

// == >= <= != > <  === !==

{let a = 10;
let b = "10"

console.log(a === b)}


//When we compare string with comparison operators , only the first non equal character is compared according to it's ASCII value

{

    let a= "Hiii"
    let b = "Hello"
    console.log(a > b)
}

// 04. Logical operators 

//  &&  ||  !  result (according to the data which is logically compared)
// comparision between bool value 

// true&&true&&false  = false
// true&&true&&true = true

// true||true||false = true
// false||false||false = false

// Falsy value = false , 0 , null , undefined , NaN , "" , big-int

// 0.1 && -10 && null = null