//Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and 
//then logs the error to the consol

//Example :1 when we lost match//

function MatchlostAfterDelay(delay: number): Promise<never> {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            reject("we lost this time:'Promise rejected'");  
        }, delay);  
    });  
}  

async function waitForAndLogError() {  
    try {  
        await MatchlostAfterDelay(2000);  
    } catch (error) {  
        console.error("An error occurred:", error);  
    }  
}  

  
waitForAndLogError();


//Example:2 entry problem with student id//

function rejectAfterDelayWithStudentId(studentId: number, delay: number): Promise<never> {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            reject(`Error: Student with ID ${studentId} not found`);  
        }, delay);  
    });  
}  

async function waitForAndLogError2(studentId: number) {  
    try {  
        await rejectAfterDelayWithStudentId(studentId, 2000);  
    } catch (error) {  
        console.error("An error occurred:", error);  
    }  
}  

  
const studentId = 123456;  
waitForAndLogError2(studentId);