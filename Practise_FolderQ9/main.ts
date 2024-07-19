// Question 9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds. 


// Function to be called repeatedly  
function studentLogIn() {  
    console.log("Student logged in at:", new Date().toLocaleTimeString());  
}  

// Function to set up repeated calls to studentLogIn  
function callStudentLogInRepeatedly() {  
// Call the function immediately  
    studentLogIn();  
    
// Set up the next call after 2 seconds (2000 milliseconds)  
    setTimeout(callStudentLogInRepeatedly, 2000);  
}  

// Start the repeated calls  
callStudentLogInRepeatedly();