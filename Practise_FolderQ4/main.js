"use strict";
//Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array. 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function resolveAfterDelay(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
function waitForPromises() {
    return __awaiter(this, void 0, void 0, function* () {
        const result1 = yield resolveAfterDelay("Promise 1 resolved", 2000);
        const result2 = yield resolveAfterDelay("Promise 2 resolved", 3000);
        return [result1, result2];
    });
}
waitForPromises().then((results) => {
    // This will log ["Promise 1 resolved", "Promise 2 resolved"] after both Promises have resolved  
    console.log(results);
});
function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`User data for user ${userId}`);
        }, 2000);
    });
}
function getUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        const userData1 = yield fetchUserData(1);
        const userData2 = yield fetchUserData(2);
        return [userData1, userData2];
    });
}
getUserData().then((userData) => {
    // This will log ["User data for user 1", "User data for user 2"] after both Promises have resolved  
    console.log(userData);
});
