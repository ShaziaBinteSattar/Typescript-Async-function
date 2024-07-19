//Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise
//that resolves to the square of that number after a delay of 1 second.

function calculateSquareAfterDelay(number: number): Promise<number> {  
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

