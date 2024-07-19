//Question 3: Write a TypeScript function that returns a Promise that resolves with the value "Resolved!"
//after 3 seconds. 


function delayedResolve(): Promise<string> {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve("Resolved! in 3 seconds");  
        }, 3000);  
    });  
}  


delayedResolve().then((result) => { 

// This will log "Resolved!" to the console after 3 seconds
    console.log(result);   
});





function typeScript(): Promise<string> {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve(" I have diligently worked on learning and practicing to overcome my weakness in  typescript to write coding is :\n Resolved! in 5 seconds");  
        }, 5000);  
    });  

}  


typeScript().then((result) => { 

// This will log "Resolved!" to the console after 5 seconds
    console.log(result);   
});






function ItExam(timeout: number): Promise<string> {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            if (timeout < 1000) {  
                reject("Promise not resolved within specified time in 2 seconds.");  
            } else {  
                resolve("Resolved! if the Promise is resolved within 1 seconds");  
            }  
        }, timeout);  
    });  
}  

// We are passing 4000 milliseconds as the timeout 
ItExam(4000)  
    .then((result1) => {  
// This will log "Resolved!" if the Promise is resolved within 1 seconds
        console.log(result1);   
    })  
    .catch((error1) => { 
 // This will log the error!! message if the Promise is not resolved within 3 seconds 
        console.log(error1);   
    });