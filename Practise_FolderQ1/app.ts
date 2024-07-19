// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World". 
// Function 2: Write a TypeScript function that uses async/await to wait for 1 second, prints "Hello" to the console, and then returns a string "World".
// Function 3: Write a TypeScript function that uses async/await to wait for 1 second, prints "Hello" to the console, waits for 1 more second, prints "World" to the console, and then returns a string "!".
// I tried this code but it  work:

//Question1:
async function helloWorld(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Hello! World my learning is good going Alhamdulillah!";
}


helloWorld().then(result => {  
    console.log(result);  
}).catch(error => {  
    console.error(error);  
});
// Function2:


async function message(): Promise<string> {  
    await new Promise(resolve => setTimeout(resolve, 2000));  
    return "Hello World im learning typescript day by day alhamdulillah!";  
}  

message().then(result => {  
    console.log(result);  
}).catch(error => {  
    console.error(error);  
});

//Function3:

async function secretMessage(): Promise<string> {  
    await new Promise(resolve => setTimeout(resolve, 2000));  
    console.log("Hello");  

    await new Promise(resolve => setTimeout(resolve, 2000));  
    console.log("World");  

    return "!";  
}  

secretMessage().then(result => {  
    console.log(result);  
}).catch(error => {  
    console.error(error);  
});
