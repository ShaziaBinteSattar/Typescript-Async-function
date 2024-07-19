// Function to be called repeatedly  
function everyGuest_inWedding() {
    console.log("A guest arrived at the wedding at:", new Date().toLocaleTimeString());
}
// Function to set up repeated calls to everyGuest_inWedding  
function callEveryGuestInWeddingRepeatedly() {
    // Call the function immediately  
    everyGuest_inWedding();
    // Set up the next call after 2 seconds (2000 milliseconds)  
    setTimeout(callEveryGuestInWeddingRepeatedly, 2000);
}
// Start the repeated calls  
callEveryGuestInWeddingRepeatedly();
