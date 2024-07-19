//Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise 
//that resolves with the cube of the number after a delay of 2 second. 
function calculateCubeAfterDelay3(number) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            //Important point to remember:
            //The issue in your code is that you are calculating the cube of the number incorrectly.
            //The cube of a number "𝑛" is calculated as 𝑛^3 or n power 3(or 𝑛∗𝑛∗𝑛), but in your code, 
            //you are using 𝑛𝑢𝑚𝑏𝑒𝑟∗∗9, which calculates the number to the power of 9 instead
            // Resolve with the cube of the input number   // 2-second delay  
            resolve(Math.pow(number, 3));
        }, 2000);
    });
}
// result for cube calculation:  
calculateCubeAfterDelay3(9).then(function (result) {
    // This will give the cube of number 9
    console.log("Cube of the number 9 is:", result);
});
