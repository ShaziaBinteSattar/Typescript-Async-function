"use strict";
//Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and 
//then logs the error to the consol
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Example :1 when we lost match//
function MatchlostAfterDelay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("we lost this time:'Promise rejected'");
        }, delay);
    });
}
function waitForAndLogError() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield MatchlostAfterDelay(2000);
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    });
}
waitForAndLogError();
//Example:2 entry problem with student id//
function rejectAfterDelayWithStudentId(studentId, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Error: Student with ID ${studentId} not found`);
        }, delay);
    });
}
function waitForAndLogError2(studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield rejectAfterDelayWithStudentId(studentId, 2000);
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    });
}
const studentId = 123456;
waitForAndLogError2(studentId);
