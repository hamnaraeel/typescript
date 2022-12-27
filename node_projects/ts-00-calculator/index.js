import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Let's start the calculation"); // start
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _______________________________
    |  _________________________  |
    |  |                    0. |  |
    |  |                       |  |
    |  |_______________________|  |
    |                             |
    |  -----  ----- -----  -----  |
    |  | 7 |  | 8 | | 9 |  | + |  |
    |  -----  ----- -----  -----  |
    |  -----  ----- -----  -----  |
    |  | 4 |  | 5 | | 6 |  | - |  |
    |  -----  ----- -----  -----  |
    |  -----  ----- -----  -----  |
    |  | 1 |  | 2 | | 3 |  | * |  |
    |  -----  ----- -----  -----  |
    |  -----  ----- -----  -----  |
    |  | . |  | 0 | | = |  | / |  |
    |  -----  ----- -----  -----  |
    |_____________________________|

    `);
}
await welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        // Pass your questions in here
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1: ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2: "
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
