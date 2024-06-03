// *** Ignore the following lines ***
import chalk from "chalk";
import { read } from "fs";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  let firstName = "Victor";
  let lastName = "Rinnegård"

  console.log(`Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`);

}

function runExerciseTwo() {
  let firstName = readLine("First name: ");
  let lastName = readLine("Last name: ");

  console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);
}

function runExerciseThree() {
  let num1 = 20;
  let num2 = 5;

  let sum: number = num1 + num2;
  console.log(sum);

  let odd = 3;
  let even = 8;

  console.log(odd / even);
  
}

function runExerciseFour() {
  let radius = Number(readLine("Enter a radius: "));

  let areaCircle = Math.PI * Math.pow(radius, 2);
  let areaSphere = 4 * Math.PI * Math.pow(radius, 2);

  console.log(`Radius: ${radius}, Circle Area: ${areaCircle}, Sphere Area: ${areaSphere}`);
  

}

function runExerciseFive() {
  console.log("Enter consecutive numbers");
  
  let num1: number = Number(readLine("Number 1: "));
  let num2: number = Number(readLine("Number 2: "));

  if (num1 + 1 === num2 || num2 + 1 === num1) {
    console.log("Consecutive");
  } else {
    console.log("Not consecutive");
    
  }
}

function runExerciseSix() {
  let num: number = Number(readLine("Enter a number: "));
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
    
  }
}

function runExerciseSeven() {}

function runExerciseEight() {}

function runExerciseNine() {}

function runExerciseTen() {}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
