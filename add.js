//this is a program that can add two numbers and log the result in the console

const add = function(num1, num2){
    
    if(isNaN(num1) || isNaN(num2)){
        return "num1 and num2 must be numbers for arithmetic operations"
    };

    return num1 + num2

};

console.log(add(1,2)); //this should log 3 - on the terminal/ console
console.log(add("njau","john")); //this will log "num1 and num2....." because my program did not permit it
                                //if i did not specify the Number type constraint, it would have logged "njaujohn"