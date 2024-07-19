"use strict";
function calculateCubeAfterDelay(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Resolve with the cube of the input number (corrected to 3)  
            resolve(number ** 3);
        }, 2000);
    });
}
// result for cube calculation:  
calculateCubeAfterDelay(9).then((result) => {
    console.log("Cube of the number 9 is:", result); // This will now log 729  
});
