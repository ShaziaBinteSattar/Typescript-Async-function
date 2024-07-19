"use strict";
//Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises 
//to resolve and then returns an array of their results. 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function waitForPromises(promises) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Wait for all promises to resolve  
            const results = yield Promise.all(promises);
            // Return an array of results
            return results;
        }
        catch (error) {
            // Handle any errors that occurred during the promises execution  
            throw new Error(`Error while waiting for promises: ${error}`);
        }
    });
}
// applying  testPromise  function 
function testPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        const promiseA = Promise.resolve("A");
        const promiseB = Promise.resolve("B");
        const promiseC = Promise.resolve("C");
        //mportant point
        //Promise.all(promises) method is used to wait for all provided Promises to resolve. 
        //If all Promises resolve successfully, it returns an array of their resolved values.
        const results = yield waitForPromises([promiseA, promiseB, promiseC]);
        // Promises: [A, B, C]  are resolved to get the results
        console.log("Promises: ", [promiseA, promiseB, promiseC]);
        console.log("Results; All provided Promises are resolved :", results);
    });
}
// Call the testPromise function to see the output  
testPromise();
