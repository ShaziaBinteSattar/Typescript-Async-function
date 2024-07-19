"use strict";
//Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise
//that resolves to the square of that number after a delay of 1 second.
function calculateSquareAfterDelay(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Resolve with the square of the input number  // 1 second delay 
            resolve(number * number);
        }, 1000);
    });
}
calculateSquareAfterDelay(5).then((result) => {
    console.log("Square of the number 5 is :", result);
});
//Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise
//that resolves to the cube of that number after a delay of 2 second.
function calculateCubeAfterDelay2(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            //Important point to remember:
            //The issue in your code is that you are calculating the cube of the number incorrectly.
            //The cube of a number "𝑛" is calculated as 𝑛^3 or n power 3(or 𝑛∗𝑛∗𝑛), but in your code, 
            //you are using 𝑛𝑢𝑚𝑏𝑒𝑟∗∗9, which calculates the number to the power of 9 instead
            // Resolve with the cube of the input number   // 2-second delay 
            resolve(number ** 3);
        }, 2000);
    });
}
// result for cube calculation:  
calculateCubeAfterDelay2(9).then((result) => {
    console.log("Cube of the number 9 is:", result);
});
