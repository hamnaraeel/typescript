import inquirer from "inquirer";

type ansType = {
  userGuess: number;
};

const systemGeneratedNo = Math.floor(Math.random() * 10);

// console.log(systemGeneratedNo);
const answers: ansType = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "Write your Guess between 1 to 10:",
  },
]);

// console.log(answers.userGuess);

const { userGuess } = answers;

if (userGuess === systemGeneratedNo) {
  console.log("Yeaaa your answer is correct");
} else {
  console.log("Please try again Better luck next time");
}
