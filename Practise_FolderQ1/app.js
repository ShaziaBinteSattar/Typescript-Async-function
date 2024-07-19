"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World". 
// Function 2: Write a TypeScript function that uses async/await to wait for 1 second, prints "Hello" to the console, and then returns a string "World".
// Function 3: Write a TypeScript function that uses async/await to wait for 1 second, prints "Hello" to the console, waits for 1 more second, prints "World" to the console, and then returns a string "!".
// I tried this code but it doesn't work:
// ```
function helloWorld() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 2000));
        return "Hello! World my learning is good going Alhamdulillah!";
    });
}
helloWorld().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
// This code works:
function message() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 2000));
        return "Hello World im learning typescript day by day alhamdulillah!";
    });
}
message().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
function secretMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Hello");
        yield new Promise(resolve => setTimeout(resolve, 2000));
        console.log("World");
        return "!";
    });
}
secretMessage().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
