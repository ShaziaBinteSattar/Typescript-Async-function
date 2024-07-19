"use strict";
//Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve 
//and then returns a new Promise that resolves with the result multiplied by 2. 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function that simulates fetching an employee's salary  
function getEmployeeSalary() {
    // Simulating an asynchronous operation (e.g., fetching from a database)  
    return new Promise((resolve) => {
        setTimeout(() => {
            // Example salary   
            const salary = 10000;
            resolve(salary);
            // Resolves after 1 second 
        }, 1000);
    });
}
// Async function that waits for the salary Promise to resolve and returns the incremented salary  
function employeesSalary_increment() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Wait for the salary to be fetched  
            const salary = yield getEmployeeSalary();
            // Return a new Promise that resolves with the salary multiplied by 2  
            return new Promise((resolve) => {
                resolve(salary * 2);
            });
        }
        catch (error) {
            console.error("Error fetching salary:", error);
            // Re-throw error for callers to handle         
            throw error;
        }
    });
}
// Example usage of the employeesSalary_increment function  
employeesSalary_increment()
    .then((newSalary) => {
    console.log(" A new Promise that resolves with the result multiplied by 2.\n New salary after increment:", newSalary);
})
    .catch((error) => {
    console.error("Error:", error);
});
