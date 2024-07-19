//Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises 
//to resolve and then returns an array of their results. 

async function waitForPromises<T>(promises: Promise<T>[]): Promise<T[]> {  
    try {  
// Wait for all promises to resolve  
        const results = await Promise.all(promises);  
// Return an array of results
        return results;   
    } catch (error) {  
// Handle any errors that occurred during the promises execution  
        throw new Error(`Error while waiting for promises: ${error}`);  
    }  
}  

// applying  testPromise  function 
async function testPromise() {  
    const promiseA = Promise.resolve("A");  
    const promiseB = Promise.resolve("B");  
    const promiseC = Promise.resolve("C");  
//mportant point
//Promise.all(promises) method is used to wait for all provided Promises to resolve. 
//If all Promises resolve successfully, it returns an array of their resolved values.
    const results = await waitForPromises([promiseA, promiseB, promiseC]);  
// Promises: [A, B, C]  are resolved to get the results
    console.log("Promises: ", [promiseA, promiseB, promiseC]);
    console.log("Results; All provided Promises are resolved :", results); 
}  

// Call the testPromise function to see the output  
testPromise();
