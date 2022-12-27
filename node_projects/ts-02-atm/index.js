import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Please enter the user id:",
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter the user pin:",
    },
    {
        type: "list",
        name: "accountType",
        message: "Select your account type:",
        choices: ["Current", "Saving"],
    },
    {
        type: "list",
        name: "transactionType",
        message: "Select your transaction type:",
        choices: ["Fast Cash", "Withdraw"],
        when(answer) {
            return answer.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        message: "Select your amount :",
        choices: [1000, 2000, 10000, 50000],
        when(answer) {
            return answer.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your ammount :",
        when(answer) {
            return answer.transactionType == "Withdraw";
        },
    },
]);
console.log(answer);
if (answer.userId && answer.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log("BALANCE:", balance);
    const EnteredAmount = answer.amount;
    if (balance >= EnteredAmount) {
        const remainingAmount = balance - EnteredAmount;
        console.log("REMAINING:", remainingAmount);
    }
    else {
        console.log("Insufficient balance");
    }
}
