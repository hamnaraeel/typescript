import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What do you want to add in todo?",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false,
        },
    ]);
    const { todo, addmore } = answer;
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Please add valid todo");
    }
}
console.log(todos);
if (todos.length > 0) {
    console.log("Your Todo List: \n");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
    // process.exit(0);
}
