//Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
//I am trying to create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second. Here's the code I have so far:

function delay(callback: () => void) {
  setTimeout(callback, 1000);
}
 
function myCallback(): void {  
    console.log("Callback executed after 1 second");  
}  

delay(myCallback);



