//Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array. 



function resolveAfterDelay(value: string, delay: number): Promise<string> {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve(value);  
        }, delay);  
    });  
}  

async function waitForPromises(): Promise<string[]> {  
    const result1 = await resolveAfterDelay("Promise 1 resolved", 2000);  
    const result2 = await resolveAfterDelay("Promise 2 resolved", 3000);  
    
    return [result1, result2];  
}  
 
waitForPromises().then((results) => {  
 // This will log ["Promise 1 resolved", "Promise 2 resolved"] after both Promises have resolved  
 console.log(results);
});




function fetchUserData(userId: number): Promise<string> {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve(`User data for user ${userId}`);  
        }, 2000);  
    });  
}  

async function getUserData(): Promise<string[]> {  
    const userData1 = await fetchUserData(1);  
    const userData2 = await fetchUserData(2);  

    return [userData1, userData2];  
}  

  
getUserData().then((userData) => {  
// This will log ["User data for user 1", "User data for user 2"] after both Promises have resolved  
   console.log(userData);
});