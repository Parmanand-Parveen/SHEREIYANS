// 1 - Sum of two integers

// let a = 10
// let b = 20
// let sum = a+b
// console.log(sum)


// ********************************************************************************************************************


// 2- Print the messege along with values and sum
// 	Ex - The sum of 45 & 12  = 57

// let a = 9
// let b = 12
// let sum = a+b
// console.log(`The sum of ${a} & ${b} = ${sum}`)


// ********************************************************************************************************************


// 3- Accept two integers from user and print the sum
// 	Ex - The sum of 45 & 12 = 57

// let a = +prompt("Enter first number")
// let b = +prompt("Enter second number")
// let sum = a+b
// console.log(`The sum of ${a} & ${b} = ${sum}`)


// ********************************************************************************************************************


// 4- Accept the User's name, age and print in following manner
// 	Ex - Hello Shery, you are 12 years old.

// let name = prompt("Enter your name")
// let age = prompt("Enter your age")
// console.log(`Hello ${name}, you are ${age} years old.`)


// ********************************************************************************************************************


// 5- Solve Increment & decrement operator questions on
	// https://javaconceptoftheday.com/quiz-on-increment-and-decrement-operators/


    
// ********************************************************************************************************************


// 6- Accept two numbers from user and swap their values
//                 Part 2 - Swap without using third variable

//Using a third variable

// let a = 10
// let b = 20
// let temp = a
// a = b
// b = temp
// console.log(a,b)


//Without using third variable

// let a = 10
// let b = 20
// a = a+b
// b = a-b
// a = a-b
// console.log(a,b)


// ********************************************************************************************************************


// 7- Accept the length and width of a rectangle. Calculate & print the area and perimiter.

// let length = +prompt("Enter the length of rectangle")
// let width = +prompt("Enter the brath of rectangle")
// console.log(`The area of rectangle is ${length*width}`)
// console.log(`The perimiter of rectangle is ${2*(length+width)}`)


// ********************************************************************************************************************


// 8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

// let p = +prompt("Enter the principle amount")
// let r = +prompt("Enter the rate of interest")/100
// let t = +prompt("Enter the time in years")
// let n = +prompt("Enter the number of times interest applied per time period")


// let ci = p*Math.pow(1+r/n,t*n)
// let intrest = ci-p
// console.log("Simple interest :",intrest.toFixed(2))
// console.log("Total amount :",ci.toFixed(2))


// ********************************************************************************************************************


// 9- Accept the three sides of triangle and calculate the area using herons formula

//   let a = +prompt("Enter the first side of triangle")
//   let b = +prompt("Enter the second side of triangle")
//   let c = +prompt("Enter the third side of triangle")
//   let s = (a+b+c)/2
//   let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//   console.log(area.toFixed(2))


// ********************************************************************************************************************


// 10- Find surface area of sphere

// let r = +prompt("Enter the radius of sphere")
// let area = 4*Math.PI*r*r
// console.log(area.toFixed(2))


// ********************************************************************************************************************

// 11- Find circumference and area of circle

// let r = +prompt("Enter the radius of circle")
// let circumference = 2*Math.PI*r
// console.log(circumference.toFixed(2))


// ********************************************************************************************************************

// 12- Accept two numbers and print the greatest between them

// let a = +prompt("Enter the first number")
// let b = +prompt("Enter the second number")
// if(a>b){
//     console.log(a)
// }else if(b>a){
//     console.log(b)
// }else {
//     console.log("both are equal")
// }


// ********************************************************************************************************************


// 13- Accept the gender from the user as char and print the respective greeting message
//       Ex - Good Morning Sir (on the basis of gender)


// let gender = prompt("Enter your gender")
// if(gender == "m"){
//     console.log("Good Morning Sir")
// }else if(gender == "f"){
//     console.log("Good Morning Madam")
// }else{
//     console.log("Invalid input")
// }


// ******************************************************************************************************************


// 14- Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Maam for input F or f 
//       else print Wrong Input


// let gender = prompt("Enter your gender")
// if(gender == "m" || gender == "M"){
//     console.log("Good Morning Sir")
// }else if(gender == "f" || gender == "F"){
//     console.log("Good Morning Maam")
// }else{
//     console.log("Wrong Input")
// }


// ******************************************************************************************************************


// 15- Accept an integer and check whether it is an even number or odd.

// let n = +prompt("Enter a number")
// if(n%2 == 0){
//     console.log("Even number")
// }else{
//     console.log("Odd number")
// }


// ******************************************************************************************************************


// 16- Accept name and age from the user. Check if the user is a valid voter or not.
//       Vaid - Hello Shery, You are a valid voter.
//       Invalid - Sorry Shery, you can't cast the vote.

// let name = prompt("Enter your name")
// let age = +prompt("Enter your age")

// if(age>=18){
//     console.log(`Hello ${name}, You are a valid voter`)
// }else{
//     console.log(`Sorry ${name}, you can't cast the vote`)
// }

//	Part 2 - Print after how many years the user will be eligible


// let name = prompt("Enter your name")
// let age = +prompt("Enter your age")

// if(age>=18){
//     console.log(`Hello ${name}, You are a valid voter`)
// }else{
//     console.log(`Sorry ${name}, you will be eligible for voting after ${18-age} years `)
// }



// ***************************************************************************************************************


// 17- Accept a day number between 1-7 and print the corresponding dayname.


// let day = +prompt("Enter the day number")

// if(day == 1){
//     console.log("Monday")
// }else if(day == 2){
//     console.log("Tuesday")
// }else if(day == 3){
//     console.log("Wednesday")
// }else if(day == 4){
//     console.log("Thursday")
// }else if(day == 5){
//     console.log("Friday")
// }else if(day == 6){
//     console.log("Saturday")
// }else if(day == 7){
//     console.log("Sunday")
// }else{
//     console.log("Invalid input")
// }



// ****************************************************************************************************************


// 18- Accept three numbers and print the greatest among them

// let a = +prompt("Enter the first number")
// let b = +prompt("Enter the second number")
// let c = +prompt("Enter the third number")
// if(a>b && a>c){
//         console.log(a)
// }else if(b>c && b>a){
//     console.log(b)
// }else if(c>a && c>b){
//     console.log(c)
// }else{
//     console.log("all are equal")
// }


// ******************************************************************************************************************


// 19- Accept a year and check if it a leap year or not (google to find out what's a leap year)


// let year = +prompt("Enter the year")

// if(year%4 == 0){
//     if(year%100 == 0){
//         if(year%400 == 0){
//             console.log("Leap year")
//         }else{
//             console.log("Not a leap year")
//         }
//     }else{
//         console.log("Leap year")
//     }
// }else{
//     console.log("Not a leap year")
// }


// ******************************************************************************************************************


// 20- Shop discount - Description on Graphic
    // if the bil is <= 1000 then 10% discount
	// if the bil is <= 2000 then 20% discount
	// if the bil is > 2000 then 30% discount


	// let billamount = +prompt("Enter the bill amount")
	// if(billamount <= 1000){
	// 	console.log(`The total bill amount is ${billamount-(billamount*10/100)}`)
	// }else if(billamount <= 2000){
	// 	console.log(`The total bill amount is ${billamount-(billamount*20/100)}`)
	// }else{
	// 	console.log(`The total bill amount is ${billamount-(billamount*30/100)}`)
	// }


// *****************************************************************************************************************


// 21- Bijli Bill - Description on Graphic
//    1 to 100 = Rs 10
//    100 to 200 = Rs 15
//    200  to 300 = Rs 20
//    >300 = Rs 25 


// let unit = +prompt("Enter the unit")

// if(unit <= 100){
// 	console.log(`The total bill amount is ${unit*10}`)	
// }else if(unit <= 200){
// 	console.log(`The total bill amount is ${unit*15}`)
// }else if(unit <= 300){
// 	console.log(`The total bill amount is ${unit*20}`)
// }else{
// 	console.log(`The total bill amount is ${unit*25}`)
// }




// *****************************************************************************************************************


// 22- Accept an english alphabet from user and check if it is a consonent or a vowel;


//  let alphabet = prompt("Enter the alphabet")
//  if(alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u"){
//      console.log("Vowel")
//  }else{
//      console.log("Consonent")
//  }


//******************************************************************************************************************


// 23- Accept an integer and Print hello world n times


// let n = +prompt("Enter the number")

// for(let i=1;i<=n;i++){
//     console.log("Hello World",i)
// }


//******************************************************************************************************************


// 24- Print natural number up to n. 


// let n = +prompt("Enter the number")

// for(let i=1;i<=n;i++){
//     console.log(i)
// }


// ******************************************************************************************************************


// 25- Reverse for loop. Print n to 1.


// let n = +prompt("Enter the number")

// for(let i=n;i>=1;i--){
//     console.log(i)
// }


// ******************************************************************************************************************

// 26- Take a number as input and print its table
//        5 * 1 = 5
//        5 * 2 = 10 ... up to 10 terms


// let n = +prompt("Enter the number")
// for(let i=1;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i}`)
// }


// ******************************************************************************************************************


// 27- Sum up to n terms.

// let n = +prompt("Enter the number")

// let sum = 0
// for(let i=1;i<=n;i++){
//     sum = sum+i
// }
// console.log(sum)


// ******************************************************************************************************************


// 28- Factorial of a number

// let n = +prompt("Enter the number")

// let fact = 1
// for(let i=1;i<=n;i++){
//     fact = fact*i
// }
// console.log(fact)


// ******************************************************************************************************************


// 29- Print the sum of all even & odd numbers in a range seperately


// let n = +prompt("Enter the starting number")
// let m = +prompt("Enter the ending number")

// let even = 0
// let odd = 0
// for(let i=n;i<=m;i++){
//     if(i%2 == 0){
//         even = even+i
//     }else{
//         odd=odd+i
//     }
// }

// console.log(`Even sum is ${even} and odd sum is ${odd}`)


// ****************************************************************************************************************


// 30- Print all the factors of a number.


// let n = +prompt("Enter the number")

// for(let i=1;i<=n;i++){
//     if(n%i == 0){
//         console.log(i)
//     }
// }


// let arr = [1,2,3,4,5,6,7,8,9,10]


// console.log(arr.splice(2,3)	)


// *******************************************************************************************************************

// 31- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43


// let n = +prompt("Enter the number")

// let sum = 0

// for(let i=1;i<=n/2;i++){
//     if(n%i == 0){
//         sum = sum+i
//     }
// }
// console.log(sum)


//*******************************************************************************************************************


// 32- Check if the number is Prime or not.


// let n = +prompt("Enter the number")
// let flag =  true
// for(let i=2;i<=n/2;i++){
//     if(n%i == 0){
//         flag = false
//         break
//     }else{
//         flag=true
//     }
// }

// console.log(flag?"Prime":"Not Prime")


//****************************************************************************************************************

// 33- Write a program to take two inputs a, b & find the value of a  raised to the power of b. 
// 	Ex - a = 2, b = 5
// 	OP - 2^5 = 32

// Without using loop

// let a = +prompt("Enter the number")
// let b = +prompt("Enter the number")
// let ans = a**b
// console.log(ans)


// By using loop

// let a = +prompt("Enter the number")
// let b = +prompt("Enter the number")
// let ans = 1
// for(let i=1;i<=b;i++){
// 	ans = ans*a
// }
// console.log(ans)


//****************************************************************************************************************

// 34- Seprate each digit of a number and print it on the new line ex - 123 
// 	OP
// 		3
// 		2
// 		1

// let a = +prompt("Enter the number")

// while(a>0){
// 	let rem = a%10
// 	console.log(rem)
// 	a = Math.floor(a/10)
// }


//****************************************************************************************************************


// 35- Sum of digits of a number, 936 = 18


// let a = +prompt("Enter the number")
// let sum = 0
// while(a>0){
// 	let rem = a%10
// 	sum = sum+rem
// 	a = Math.floor(a/10)
// }
// console.log(sum)


//****************************************************************************************************************


// 36- Accept a number and print its reverse


// let a = +prompt("Enter the number")

// let rev = 0
// while(a>0){
// 	rev =( rev*10) + (a%10)
// 	a = Math.floor(a/10)
// }

// console.log(rev)


//****************************************************************************************************************


// 37- Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
//        Ex - 12321 - Rerverse - 12321


// let a = +prompt("Enter the number")
// let temp = a

// let rev = 0
// while(a>0){
// 	rev =( rev*10) + (a%10)
// 	a = Math.floor(a/10)
// }

// console.log(rev == temp?"Palindrome":"Not Palindrome")


//****************************************************************************************************************


// 38- Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
//        Ex- 145 = 1! + 4! + 5! = 145


// let a = +prompt("Enter the number")
// let temp = a

// let sum = 0
// while(a>0){
// 	let rem = a%10
// 	let fact = 1
// 	for(let i=1;i<=rem;i++){
// 		fact = fact*i
// 	}
// 	sum = sum+fact
// 	a = Math.floor(a/10)
// }
// console.log(sum == temp?"Strong Number":"Not Strong Number")


//****************************************************************************************************************


// Automorphic number 5 = 25 ,625 = 390625, 6=36, 76 = 5776


// let a = +prompt("Enter the number")

// let square = a**2


// let flag = true
// while(a>0){
// 	let rem = a%10
   
//    if(rem == square%10){
//    	  flag = true
//    }else{
//    	 flag =false
//    	 break
//    }
//    a = Math.floor(a/10)
//    square = Math.floor(square/10)
// }


// console.log(flag?"Automorphic Number":"Not Automorphic Number")


//*******************************************************************************************************************************


// 40- Print hello until user gives wrong input using do while


// let i = 0
// do {
// 	i = +prompt("Enter the number")
// 	console.log("Hello World")
// } while (i!=10);


//************************************************************************************************************************


// 41- Make a choice based calculator using do while

// let i 

// do {
//    console.log("Menu\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus\n6.Exit")
//    i = +prompt("Enter your choice")
//    if(i==1){
//    	let a = +prompt("Enter the number")
//    	let b = +prompt("Enter the number")
//    	console.log("Addition",a+b)
//    }else if(i==2){
//    	let a = +prompt("Enter the number")
//    	let b = +prompt("Enter the number")
//    	console.log("Subtraction",a-b)
//    }else if(i==3){
//    	let a = +prompt("Enter the number")
//    	let b = +prompt("Enter the number")
//    	console.log("Multiplication",a*b)
//    }else if(i==4){
//    	let a = +prompt("Enter the number")
//    	let b = +prompt("Enter the number")
//    	console.log("Division",a/b)
//    }else if(i==5){
//    	let a = +prompt("Enter the number")
//    	let b = +prompt("Enter the number")
//    	console.log("Mod",a%b)
//    }else{
//        console.log("Invalid Input")
//    }
	
// } while (i!=0);


//*************************************************************************************************************************


// 42- Print Weekday using Switch


// let i = +prompt("Enter the number")


// switch(i){	
// 	case 1:
// 		console.log("Monday")
// 		break
// 	case 2:
// 		console.log("Tuesday")
// 		break
// 	case 3:
// 		console.log("Wednesday")
// 		break
// 	case 4:
// 		console.log("Thursday")
// 		break
// 	case 5:
// 		console.log("Friday")
// 		break
// 	case 6:
// 		console.log("Saturday")
// 		break
// 	case 7:
// 		console.log("Sunday")
// 		break
// 	default:
// 		console.log("Invalid Input")
// }


//*************************************************************************************************************************


// 43- Question 22 using Switch

// 22- Accept an english alphabet from user and check if it is a consonent or a vowel;


//  let alphabet = prompt("Enter the alphabet")

//  switch(alphabet){
//  	case "a":
//  	case "e":
//  	case "i":
//  	case "o":
//  	case "u":
//  		console.log("Vowel")
//  		break
//  	default:
//  		console.log("Consonent")
//  }


//*************************************************************************************************************************


// 44- Project - Guess Game
//       Write a program that generates a random number and asks the user to guess what the number is.
//       If the user's guess is higher than the random number, the program should display "Too high, try again."
//       If the user's guess is lower than the random number, the program should display "Too low, try again."
//       The program should use a loop that repeats until the user correctly guesses the random number.


// let i  = Math.floor(Math.random() * 100)
// console.log(i)
// let j ;

// do{
// 	j = +prompt("Enter the number")

// 	if(j>i){
// 		console.log("Too high, try again")
// 	}else if(j<i){
// 		console.log("Too low, try again")
// 	}else{
// 		console.log("Correct")
// 	}

// }while(j!=i)


//*************************************************************************************************************************



// 46- Right Triangle - Star
// 	*
// 	* *
// 	* * *
// 	* * * *
// 	* * * * *


// for(let i = 0 ; i<5; i++){
// 	let pattern = ""
// 	for(let j = 0 ; j<=i ; j++){
// 		pattern+="*"
// 	}
// 	console.log(pattern) 
// }


//************************************************************************************************************************


// 47- Right Triangle - Number
// 	1
// 	1 2
// 	1 2 3 
// 	1 2 3 4
// 	1 2 3 4 5


// for(let i = 0 ; i<5; i++){
// 	let pattern = ""
// 	for(let j = 1 ; j<=i+1 ; j++){
// 		pattern+=j
// 	}
// 	console.log(pattern) 
// }


//************************************************************************************************************************


// 48- Right Triangle - Alphabet
// 	A
// 	A B
// 	A B C
// 	A B C D
// 	A B C D E


// for(let i = 0 ; i<5; i++){
// 	let pattern = ""
// 	for(let j = 0 ; j<=i ; j++){
// 		pattern+=String.fromCharCode(65+j)
// 	}
// 	console.log(pattern) 
// }


//************************************************************************************************************************

// 49- Inverted Right Triangle
// 	* * * * *
// 	* * * *
// 	* * *
// 	* *
// 	*


// let n = +prompt("Enter the number")

// for(let i = 0 ; i<n; i++){
// 	let pattern = ""
// 	for(let j = 0 ; j<n-i ; j++){
// 		pattern+="*"
// 	}
// 	console.log(pattern) 
// }


//************************************************************************************************************************


// 50- Mirrored Right Triangle
// 	        *
// 	      * *
// 	    * * *
// 	  * * * *
// 	* * * * *

// let n = +prompt("Enter the number") 

// for(let i = 0 ; i<n; i++){
// 	let pattern = ""
// 	for(let j = 0 ; j<n-i ; j++){
// 		pattern+=" "
// 	}
// 	for(let j = 0 ; j<=i ; j++){
// 		pattern+="*"
// 	}
// 	console.log(pattern) 
// }


//************************************************************************************************************************


// 51- Triangle
// 	    *
// 	   * *
// 	  * * *
// 	 * * * *
// 	* * * * *	


// let n = +prompt("Enter the number")

// for(let i = 0 ; i<n; i++){
// 	let pattern = ""
// 	for(let j = 0 ; j<n-i ; j++){
// 		pattern+=" "
// 	}
// 	for(let j = 0 ; j<=i ; j++){
// 		pattern+="* "
// 	}
// 	console.log(pattern) 
// }


//************************************************************************************************************************


// 52- V - Min Height = 3
// 		*       * 
// 		 *     *  
// 		  *   *   
// 		   * *    
// 		    * 

// for(let row = 0 ; row<5; row++){
//   let pattern = " "
//  for(let col =  0 ; col<(5*2) ; col++){
// 	if(row==col || row+col==(5*2)-1){
// 		pattern+="*"
// 	}else{
// 		pattern+=" "
// 	}
//  }
//  console.log(pattern)
// }


//************************************************************************************************************************

// 53- X
// 	   *     *
// 	    *   *
// 	     * *
// 	      *
// 		 * *
// 		*   *
// 	   *  	 * 

// for(let row = 0 ; row<5*2; row++){
//   let pattern = " "
//  for(let col =  0 ; col<(5*2) ; col++){
// 	if(row==col || row+col==(5*2)-1){
// 		pattern+="*"
// 	}else{
// 		pattern+=" "
// 	}
//  }
//  console.log(pattern)
// }


//************************************************************************************************************************


// 54- Accept size n from user and create a n size array then take n inputs into the and finally 
//       Print the sum & Avg of all elements.


// let n = +prompt("Enter the number")

// let arr = []
// for(let i = 0 ; i<n; i++){
// 	arr[i] = +prompt("Enter the number")
// }

// let sum = arr.reduce((a,b)=>a+b,0)
// let avg =(sum/n).toFixed(1)
// console.log(`The number you entered is ${arr} and the sum is ${sum} and the avg is ${avg}`)


//************************************************************** *************************************************************


// 55- Find the greatest element.
//       {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index

// Method 1 using inbuilt function
// let ans = Math.max(2, 96, 69, 77, 145, 20)
// console.log(ans)

// Method 2 

// let arr = [2, 96, 69, 77, 145, 20]
// let max = 0
// arr.forEach((e,i)=>{
// 	if(e>arr[max]){
// 		max = i
// 	}
//  })
// console.log(arr[max],max)


//***************************************************************************************************************************


// 56- Find the second greatest element 
//       {2, 96, 69, 77, 145, 20} = Second greatest element = 96


// let arr = [2, 96, 69, 77, 145, 20]

// for(let i = 0 ; i<arr.length ; i++){
//     for(let j = i+1 ; j<arr.length ; j++){
// 		if(arr[i]>arr[j]){
// 			let temp = arr[i]
// 			arr[i] = arr[j]
// 			arr[j] = temp
// 		}
// 	}
// }

// console.log(arr.at(-2))


//***************************************************************************************************************************

// 57- Check if array is sorted in increasing order or not.
//        Ex 1 - { 1, 5, 8,  9, 10, 15 } - OP = "YES"
//        Ex 2 - { 1, 8, 6, 9, 10, 15 } - OP = "NO"

// let arr = [1, 6, 9, 10, 15]

// let flag = true

// arr.forEach((e,i)=>{
// 	if(e>arr[i+1]){
// 		flag = false
// 	}
// })

// console.log(flag)


//************************************************************************************************************************


// 58- Take n integer inputs from user and store them in an array. 
//        Now, copy all the elements in an another array but in reverse order and print it.


// let n = +prompt("Enter the length of the array")

// let arr = []

// for(let i = 0 ; i<n ; i++){
// 	arr[i] = +prompt("Enter the number")
// }

// let arr2 = arr.reverse()
// console.log(arr2)


//************************************************************************************************************************


// 59- Array left Rotation by 1


// let arr = [1,2,3,4,5]
 
// let temp = arr[0]
// for(let i = 0 ; i<arr.length-1 ; i++){
// 	arr[i] = arr[i+1]
// }
// arr[arr.length-1] = temp
// console.log(arr)
//************************************************************************************************************************


// 60- Array left rotation by K elements

// let arr = [1,2,3,4,5]

// let k = 4

// for(let i = 0 ; i<k ; i++){
// 	let temp = arr[0]
// 	for(let j = 0 ; j<arr.length-1 ; j++){
// 		arr[j] = arr[j+1]
// 	}
// 	arr[arr.length-1] = temp
// }
// console.log(arr)


//************************************************************************************************************************


// 61- Array Reverse Without Using Extra space



//************************************************************************************************************************


// 62- Linear Search an array - If element found print the index else -1

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let target = 9

// let flag = -1

// arr.forEach((e,i)=>{
// 	if(e == target){
// 		flag = i
// 	}
// })

// console.log(flag)


//************************************************************************************************************************


// 63- Binary Search. If element found print the index else -1

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let target = 12

// let s = 0
// let e = arr.length-1
// let mid = 0
// let flag = -1
// while(s<=e){
// 	mid = Math.floor((s+e)/2)
// 	if(arr[mid] == target){
// 		flag = mid
// 		break
// 	}else if(arr[mid] > target){
// 		e = mid-1
// 	}else{
// 		s = mid+1
// 	}
// }

// console.log(flag)


//************************************************************************************************************************


// 64- Bubble Sort. 

// let arr = [10, 7, 8, 9, 1, 5]

// for(let i = 0 ; i<arr.length-1 ; i++){
// 	for(let j = 0 ; j<arr.length-i-1 ; j++){
// 		if(arr[j]>arr[j+1]){
// 			let temp = arr[j]
// 			arr[j] = arr[j+1]
// 			arr[j+1] = temp
// 		}
// }}

// console.log(arr)


//************************************************************************************************************************


// 65- Move all the negative elements on left side and positive elements on right side O(n).


// let arr = [-1, 2, -4, 5, 6, -7, 8, -9, 10]

// for(let i = 0 ; i<arr.length ; i++){
// 	if(arr[i]<0){
// 		arr.unshift(arr[i])
// 		arr.splice(i+1,1)
// 	}
// }

// console.log(arr)


//************************************************************************************************************************


// 66- Print the count of subarrays whose sum is equal to the target.
// 	Ex - {1,2,3,7,5}, T = 12  O/P - 2 - [ {2,3,7}, {7,5} ] - Both the subarrays has sum 12 

// let arr = [1,2,3,7,5]

// let target = 12

// let count = 0
// let sum = 0
// let i = 0
// let j = 0
// while(j<arr.length){
// 	sum += arr[j]
// 	while(sum>target){
// 		sum -= arr[i]
// 		i++
// 	}
// 	if(sum == target){
// 		count++
		
// 	}
// 	j++
// }
// console.log(count)


//************************************************************************************************************************


//67- Strong number using methods


// let num = 145 
// let temp = num
// let sum = 0

// function fact(n){
// 	let fact = 1
// 	for(let i = 1 ; i<=n ; i++){
// 		fact *= i
// 	}
// 	return fact
// }

// while(num>0){
// 	let rem = num%10
// 	sum += fact(rem)
// 	num = Math.floor(num/10)
// }
// if(sum == temp){
// 	console.log("Strong Number")
// }else{
// 	console.log("Not Strong Number")

// }
	



// console.log(sum==temp ? "Strong Number" : "Not Strong Number")
 

//************************************************************************************************************************


// 68- Special number using methods.


//************************************************************************************************************************


// 69- Leetcode 1929 - Concatenation of array 

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.


// let hero = [1,2,3]


// // let ans=arr.concat(arr) 

// function concat(arr){
// 	let ans = []
// 	for(let i = 0 ; i<arr.length ; i++){
// 		ans.push(arr[i])
// 	}
// 	ans = [...arr,...ans]
// 	return ans
// }

// console.log(concat(hero))


//************************************************************************************************************************


// 70- Leetcode 1920 - Build Array from Permutation


//************************************************************************************************************************

// 71- Accept a string from user and print its each character on a new line

// let s  = prompt("Enter the string")


// s.split("").forEach((value)=>console.log(value))


//************************************************************************************************************************


// 72- Accept a string and print it in reverse order

// let s = prompt("Enter the string")

// s.split("").reverse().forEach((value)=>console.log(value))


//************************************************************************************************************************


// 73- Check if the string is Pallindromic or not

// let s = prompt("Enter the string")


// let check  =  s.split("").reverse().join("")



// console.log(s==check? "Pallindromic":"Not Pallindromic")


//************************************************************************************************************************


// 74- Pallindromic String using method and Two pointer algorithm (hint: Array reverse algo)


// let string = prompt("Enter the string")


// function checkStringPalindrom(s){
// 	let flag = true

// 	for(let i = 0 ; i<s.length ; i++){
// 		let left = i
// 		let right = s.length-i-1
// 		while(left<right){
// 			if(s[left] != s[right]){
// 				flag = false
// 				break
// 			}
// 			left++
// 			right--
// 		}
	
// 	}
// 	console.log(flag? "Pallindromic":"Not Pallindromic")
// }



// checkStringPalindrom(string)


//************************************************************************************************************************


// 77- Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix.
//        Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
//                         Output: 2

// let words = ["pay","attention","practice","attend"]
// let pref = "at"

// let count = 0
// words.forEach((e)=>{
// 	if(e.includes(pref)){
// 		console.log(e)
//           count++
// 	}
// })


//************************************************************************************************************************


// 78- Accept a space seperated sentence and split in into words. Print each word on a new line with first letter capitalized.
//       IN-      Hello bhai kaise ho
//       OP-     Hello
//                  Bhai
//                  Kaise
//                  Ho


// let sentence = "hello bhaiyo kaise ho"

// sentence.split(" ").forEach((e)=>{console.log(e[0].toUpperCase()+e.slice(1))})
   

//************************************************************************************************************************


// 79- Extend the prev question and capitalize first & last character of each word in the sentence and print the new sentence
//       Ex - 	Hello bhai Kaise ho a
// 	HellO BhaI KaisE HO A

// let sentence = "hello bhaiyo kaise ho"


// sentence.split(" ").forEach((e)=>{console.log(e[0].toUpperCase()+e.slice(1,-1)+e[e.length-1].toUpperCase())})
