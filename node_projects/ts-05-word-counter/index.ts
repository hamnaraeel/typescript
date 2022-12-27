import inquirer from "inquirer";

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter the sentence to count word:",
  },
]);

const words = answers.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
