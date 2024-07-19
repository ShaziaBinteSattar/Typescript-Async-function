//Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and
//then logs the result to the console.

//a Promise to resolve and then logs the result to the console:


function resolveAfterDelay(value: string, delay: number): Promise<string> {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve(value);  
        }, delay);  
    });  
}  

async function waitForAndLogResult() {  
    try {  
        const result = await resolveAfterDelay("Promise resolved", 2000);  
        console.log(result);  
    } catch (error) {  
        console.error("An error occurred:", error);  
    }  
}  
 
waitForAndLogResult();


// If the Promise rejects, it logs the error instead:
function rejectAfterDelay(delay: number): Promise<never> {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            reject("Promise rejected");  
        }, delay);  
    });  
}  

async function waitForAndLogResult2() {  
    try {  
        const result = await rejectAfterDelay(2000);  
// This will not execute as the Promise rejects  
         console.log(result);
    } catch (error) {  
        console.error("An error occurred:", error);  
    }  
}  

  
waitForAndLogResult2();















// async function waitForPromise(): Promise<string> {
//   const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved!");
//     }, 1000);
//   });

//   const result = await promise;
//   console.log(result);
//   return result;
// }
//  //then logs the result to the console. */


// async function waitForPromise2(): Promise<string> {
//   const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved!");
//     }, 1000);
//   });

//   const result = await promise;
//   console.log(result);
//   return result;
// }

// waitForPromise();

/*

This code defines an asynchronous function `waitForPromise()` that creates a new `Promise` object and resolves it after 1 second with the string "Promise resolved!". The `await` keyword is used to wait for the Promise to resolve before continuing execution.

The resolved value of the Promise is then logged to the console using `console.log(result)`. Finally, the function returns the resolved value.

To use this function, you can call it like this:
*/  

/*

This code calls the `waitForPromise()` function and awaits its resolution, which will log the result "Promise resolved!" to the console after a 1-second delay.

Note that the `async` keyword is used before the function definition to indicate that it uses asynchronous operations (in this case, the `await` keyword is used within the function to wait for the Promise to resolve).
*/

