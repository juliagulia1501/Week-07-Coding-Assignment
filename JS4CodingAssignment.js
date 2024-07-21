
//This is the week 7 coding assignment utilizing JS.

//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//      a. Programmatically subtract the value of the first element in the array from the value 
//              in the last element of the array.
//          - Do not use numbers to reference the last element, find it programmatically.
//          - ages[7] - ages[0] is not allowed!
//      b. Add a new age to your array and repeat the step above to ensure it is dynamic. 
//              (works for arrays of different lengths).
//      c. Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Question 1:")

//a. vvvv - subtracting first element from last.

console.log(ages[ages.length-1] - ages[0])

// b. vvvv - add new age and console.log it.

ages.push(32)

console.log(ages[ages.length-1] - ages[0])

// c. vvv - loop through array and calculate average.

let sum =0
for ( i = 0; i<ages.length; i++){

    sum += ages[i]
   
}
console.log(sum / ages.length)

// 2. Create an array called names that contains the following values:
//           'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//      a. Use a loop to iterate through the array and calculate the average number
//              of letters per name.
//      b. Use a loop to iterate through the array again and concatenate all the names
//               together, separated by spaces.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log("Question 2:")

// a. vvv - loop through array and calculate average number of letters per name
    
    let sumLetter =0

    for (i=0; i<names.length; i++) {
        
        sumLetter += names[i].length
        
 }
    console.log(sumLetter / names.length)

// b. vvv - loop through array and concatenate the names separated by spaces.

function arrayLoopFunction(){
let output =''

for (i=0; i<names.length; i++) {
   //let  count = names[i]
   output = output.concat(names[i] + " ")
  
}
    console.log(output)
}
 
arrayLoopFunction()

// 3. How do you access the last element of any array?

console.log("Question 3: In order to access the last element of any array you would call the length of the array minus 1 since the start of the index of an array is 0. For example: array.length-1")
 
// 4. How do you access the first element of any array?

console.log("Question 4: You would access the first element of an array by calling that element based off the location of the first index which is always 0, for example: array[0] calls the first element in array[]")

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously
//       created names array and add the length of each name to the nameLengths array.
//      For example:
//          let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//          let nameLengths = [5, 3, 4];             // create a new array
console.log("Question 5: ")


for ( i=0; i<names.length; i++){

   let nameLengths = [names[i] + ' - ' + names[i].length ]
     console.log( nameLengths )
}


// 6. Write a loop to iterate over the nameLengths array and calculate
//       the sum of all the elements in the array.
console.log("Question 6: ")

let sum2 =0
for ( i=0; i<names.length; i++){

   sum2 += names[i].length
   
}
console.log(sum2)

// 7. Write a function that takes two parameters, word and n, as arguments
//     and returns the word concatenated to itself n number of times. 
//    (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

console.log("Question 7: ")

function wordFunction(word, n){

    return word.repeat(n)
}

console.log(wordFunction("Hello", 3))

// 8. Write a function that takes two parameters, firstName and lastName, 
//      and returns a full name. The full name should be the first and the 
//      last name separated by a space.

console.log("Question 8: ")

function fullNameFunction(firstName, lastName){

    let fullName = firstName + " " + lastName
    return fullName
}

console.log(fullNameFunction('John', 'Doe'))

// 9. Write a function that takes an array of numbers and returns true if 
//      the sum of all the numbers in the array is greater than 100.

console.log("Question 9: ")

function arrayFunction(array){
    let sumArray = 0

    for ( i=0; i < array.length; i++){
       sumArray += array[i]
    }

    if(sumArray ==  100){
        return true
    }
    else {return false}
}

console.log(arrayFunction([10, 90]))
console.log(arrayFunction([90,20]))

// 10. Write a function that takes an array of numbers and returns the 
//      average of all the elements in the array.
console.log("Question 10: ")

function averageArrayFunction(numberArray){
    let avg =0
    for ( i = 0; i<numberArray.length; i++){

    avg += numberArray[i]
   
    }
    return avg / numberArray.length

}

console.log(averageArrayFunction([20,40,60]))
console.log(averageArrayFunction([100,250,700,650]))



// 11. Write a function that takes two arrays of numbers and returns true
//      if the average of the elements in the first array is greater than the 
//      average of the elements in the second array.
console.log("Question 11: ")

function averageCompareFunction(array1, array2){
    let avg1 =0
    let wholeAverage1
    let wholeAverage2
    let avg2 = 0 

    //loop for array1
        for ( i = 0; i<array1.length; i++){

            avg1 += array1[i]
       
        
            }
    // edit - fix of loop vvvv
    
        wholeAverage1 = avg1 / array1.length
         

    //loop for array2 
        for ( i = 0; i<array2.length; i++){

            avg2 += array2[i]
         
            }
    // edit - fox of loop 2 vvvv
    
        wholeAverage2 = avg2 / array2.length


    //if statedment 
    if (wholeAverage1 > wholeAverage2){
        return true
    }
    else { return false }
        
}


console.log(averageCompareFunction([20, 10, 50, 40 ],[250, 340, 500]))
console.log(averageCompareFunction([5,5],[10,10]))


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
//      and a number moneyInPocket, and returns true if it is hot outside and 
//      if moneyInPocket is greater than 10.50.
console.log("Question 12: ")

function willBuyDrink(isHotOutside, moneyInpocket){

    if(isHotOutside && moneyInpocket >= 10.50)
        return true
    else{return false}
}

console.log(willBuyDrink("yes", 9))
console.log(willBuyDrink("yes", 30.10))




// 13. Create a function of your own that solves a problem. In comments, 
//      write what the function does and why you created it.
console.log("Question 13: ")

//This function checks to see if it's a good time for ice cream. 
function myIceCreamFunction(degrees, hungry ){

        if (degrees >= 100){
            console.log(" It is hot enough for ice cream!")
        }
        else{ console.log("It's always a good time for ice cream!")}

        if ( hungry == true){
            console.log(" Get some ice cream!")
        }
        else{ console.log("Treat yourself!")}
}

console.log(myIceCreamFunction(100, true))
console.log(myIceCreamFunction(85, "no"))
