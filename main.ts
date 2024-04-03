#! /usr/bin/env node

import inquirer from "inquirer";

let Balance: number = 10000;
let pin: number = 2843;

console.log("Welcome to Code with aadee -ATM Machine")

let pinAnswer = await inquirer.prompt([
   {
      name: "pin",
      message: "enter your pin code",
      type: "number",
   }
])

if (pinAnswer.pin === pin) 
   console.log("You've enterd correct pin code!!");

let operationAns = await inquirer.prompt([
   {
      name: "operation",
      message: "Please select any option",
      type: "list",
      choices: ["Withdraw" , "Check Balance", "Fast Cash"],
}
]);
console.log("operationAns");

if (operationAns.operation === "Withdraw"){
   let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter yur amount",
        type: "number",
        choices: ["1000" , "2000", "3000","4000" , "5000", "above 5000"],  

   }]);
   console.log(amountAns.amount);

if (amountAns.amount < Balance){
   Balance -= amountAns.amount;
   console.log("your remaining balance4 is:" + Balance);
}
else{
   console.log("insufficinet Balance");
}  
}
else if (operationAns.operation === "Check Balance"){
   console.log("Your Current Account Balance is:" + Balance );
}
else if(operationAns.operation === "Fast Cash"){
   let fast = await inquirer.prompt([{
      name: "fast_atm",
      message: "How much money you wnat to withdraw",
      type: "list",
      choices: ["1000", "2000" , "3000" ,"4000","5000"],
   }
]);
console.log(fast.fast_atm);

if (fast.fast_atm === '1000') {
   Balance -= fast.fast_atm;
   console.log("your remaining balance is:" + Balance);

}}








   
