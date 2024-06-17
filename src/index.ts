// *** Ignore the following lines ***
import chalk from "chalk";
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

function runExerciseSeven() {
  let bodyTempC: number = Number(readLine("Enter your body temp(C): "));

  console.log(bodyTempC > 37 ? "Fever" : "No fever");
  
}

function runExerciseEight() {
  let grade: string = readLine("Enter your grade: ").toUpperCase();
  
  switch (grade) {
    case "A":
      console.log(`You got an ${grade}! Congratulations`);
      break;
    case "B":
      console.log(`You got a ${grade}! :)`);
      break;
    case "C":
      console.log(`You got a ${grade}! :|`);
      break;
    case "D":
      console.log(`You got a ${grade}! :(`);
      break;
    case "E":
      console.log(`You got an ${grade}! :'(`);
      break;
    default:
      console.log(chalk.red("You didn't get a grade!"));
      break;
  }
}

function runExerciseNine() {
  let originalInput: string = readLine("Enter a palindrome: ");
  let input = originalInput.trim().toLowerCase().replace(/\W/g, "");
  let inputArray = input.split("");
  let reverseInput = inputArray.reverse().join("");

  if (reverseInput === input) {
    console.log(chalk.green(`"${originalInput}" is a palindrome`));
  } else {
    console.log(chalk.red(`"${originalInput}" is not a palindrome`));
  }
}

function runExerciseTen() {
  //A
  let str = "The quick fox jumped over the DOG";
  let newStr = str.replace("quick", "brown").replace("DOG", "lazy dog");
  console.log(newStr);

  //B
  let firstWord = readLine("Enter a word: ").toLowerCase().trim();
  let secondWord = readLine("Enter a word: ").toLowerCase().trim();

  if (firstWord === secondWord) {
    console.log("The words are the same");
  } else {
    console.log("The words are not the same");
  }

  //C
  let word = readLine("Enter Donkey: ");
  word = word.replace("D", "M");
  console.log(word);

  //D
  let str2 = "I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin show during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.";
  let arr = str2.split(" ")
  let newArr = arr.map((word) => {
    if (word == "I") {
      return "We";
    } else if(word == "am") {
      return "are";
    } else {
      return word;
    }
  })
  console.log(newArr.join(" "));
  
  //E
  let str3 = "She is the popular singer";
  let midPoint = str3.indexOf("popular");
  let part1 = str3.slice(0, midPoint);
  let part2 = str3.slice(midPoint, str3.length);
  
  let updatedStr = part1 + "most " + part2;
  console.log(updatedStr);

  //F
  let startString = "A friend is the asset of your life"
  let friendIndex = startString.indexOf("friend");
  
  let stringWithFriend = startString.slice(0, friendIndex) + "true " + startString.slice(friendIndex, startString.length)

  let assetIndex = stringWithFriend.indexOf("asset");
  let finalString = stringWithFriend.slice(0, assetIndex) + "greatest " + stringWithFriend.slice(assetIndex, stringWithFriend.length)
  console.log(finalString);

  //G
  let fullStr = "My name is Sebastian Vallin";
  let index = fullStr.indexOf("Sebastian");
  let name = fullStr.slice(index, fullStr.length)
  console.log(name);

  //H
  let str1 = "Arrays are very common in programming, they look something like: [1,2,3,4,5]"
  let index2 = str1.indexOf("[");
  let res = str1.slice(index2, str1.length)
  console.log(res);
}

function runExerciseEleven() {
  let operator: string = readLine("Enter an operator(+ - * /): ");
  let num1: number = Number(readLine("Enter a number: "))
  let num2: number = Number(readLine("Enter a number: "))

  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log(chalk.red("Error"));
      break;
  }
  
}

function runExerciseTwelve() {
  let input: number = Number(readLine("Enter a number smaller than 100: "))

  for (let index = 1; index <= input; index++) {
    console.log(chalk.blue(index));
  }
  for (let index = input; index > 0; index--) {
    console.log(chalk.green(index));
  }

  let i: number = 1;
  while (i <= input) {
    console.log(chalk.blue(i));
    i++;
  }

  let j: number = input;
  do {
    console.log(chalk.green(j));
    j--;
  } while (j > 0);
}

function runExerciseThirteen() {
  let secretNumber: number = Math.ceil(Math.random() * 10);

  let keepGuessing: string = "";
  while (keepGuessing !== "no") {
    let guess: number = Number(readLine("Guess a number 1-10: "))
    if (guess === secretNumber) {
      console.log(chalk.green(`${guess} was correct!`));
      break;
    }
    console.log(chalk.red(`${guess} was incorrect!`));

    keepGuessing = readLine("Do you want to guess again? (yes/no): ");
  }
}

interface MultiplicationTable {
  [index: number]: {
    [index: number]: number
  }
}

function runExerciseFourteen() {
  let multTable: MultiplicationTable = {};
  for (let i = 1; i <= 10; i++) {
    multTable[i] = {};
    for (let j = 1; j <= 10; j++) {
      multTable[i][j] = i * j;
    }
  }

  console.table(multTable)
}

function runExerciseFifteen() {
//    *********
//     *******
//      *****
//       ***
//        *
  let line: string = "";
  let starCount: number = 9;
  let stars: string = "";
  let spaceCount: number = 4;
  let space: string = "";
  for (let index = 0; index < 5; index++) {
    line = "";
    stars = "";
    for (let index = starCount; index > 0; index--) {
      stars += "*"
    }
    space = " ".repeat(spaceCount);
    line = space + stars + space;
    starCount = starCount - 2;
    spaceCount++;

    if (index % 2 === 0) {
      console.log(chalk.yellow.bgBlue(line));
    } else {
      console.log(chalk.blue.bgYellow(line));
    }

  }
}

function runExerciseSixteen() {
  console.log("Keep entering numbers until you enter 0");

  let num: number = Number(readLine("Number:"))
  let sum: number = num;
  let count: number = 0;

  while (num !== 0) {
    num = Number(readLine("Number:"))
    sum += num;
    count++;
  }

  console.log(`Sum: ${sum}`);
  console.log(`Average: ${sum / count}`);
}

function runExerciseSeventeen() {
  let num = Number(readLine("How many fibonacci numbers? "))

  let seq: number[] = [];

  for (let index = 0; index < num; index++) {
      if (seq.length > 1) {
          seq.push(seq[index - 1] + seq[index-2]);
      } else {
          seq.push(index);
      }
  }
  console.log(seq.toString());
}

function runExercisenNineteen() {
  console.log("--Calculate triangle area--");
  const height: number = Number(readLine("Enter height: "));
  const width: number = Number(readLine("Enter width: "));
  const area = height * width / 2;
  console.log(`Area: ${area}`);
  return area;
}

function runExerciseTwenty() {
  let x = 20;
  let y = 5;
  console.log(x, y);
  
  function swap(a: number, b: number) {
    let temp = a;
    a = b;
    b = temp;

    return [a, b];
  }

  [x, y] = swap(x, y);
  console.log(x, y);
}

function runExerciseTwentyOne() {
  const birthdate: Date = new Date(readLine("Enter bithday: "))
  const today: Date = new Date();
  let diff: number = today.getFullYear() - birthdate.getFullYear();
  
  if (today.getDate() < birthdate.getDate() && today.getMonth() <= birthdate.getMonth()) {
    diff--;
  }

  console.log(diff);
  return diff;

}

function runExerciseTwentyTwo() {
  const name = readLine("Enter Name: ");
  console.log(`Hello ${name}!`);
  const age = runExerciseTwentyOne();
  if (age > 18) {
    serveDrink()
  } else {
    let sodaAnswer: string = readLine("Do you want a soda? (yes/no): ");
    switch (sodaAnswer) {
      case "yes":
        console.log("Soda is served");
        break;
      default:
        console.log("No more options");
        break;
    }
  }
}

function serveDrink() {
  let beerAnswer: string = readLine("Do you want a beer? (yes/no): ");
  switch (beerAnswer) {
    case "yes":
      console.log("Beer is served");
      break;
    case "no":
      let sodaAnswer: string = readLine("Do you want a soda? (yes/no): ");
      switch (sodaAnswer) {
        case "yes":
          console.log("Soda is served");
          break;
        default:
          console.log("No more options");
          break;
      }
      break;
    default:
      console.log("No more options");
      break;
  }
}

function runExerciseTwentyThree() {
  let arr = [5, 21, 7, 12, 9]
  let max = findMax(arr);
  console.log(max);
  

}

function findMax(arr: number[]) {
  return Math.max(...arr);
}
function findMin(arr: number[]) {
  return Math.min(...arr);
}

function runExerciseTwentyFour() {
  const input: string = readLine("Enter a string of numbers: (2,7,1,20,13): ");
  const inputArr: number[] = input.split(",").map((element) => {
    return Number(element)
  });
  const max = findMax(inputArr);
  const min = findMin(inputArr);

  const sum = inputArr.reduce((total, num) => {
    return total + num;
  }, 0)

  const average = sum / inputArr.length;

  console.log(max);
  console.log(min);
  console.log(average);
}

function runExerciseTwentyFive() {
  let totalArr: number[] = [];
  let oddArr: number[] = [];
  let evenArr: number[] = [];
  for (let index = 0; index < 20; index++) {
    let rand = Math.ceil(Math.random() * 10);
    totalArr.push(rand);
    if (rand % 2 === 0) {
      evenArr.push(rand);
    } else {
      oddArr.push(rand);
    }
  }
  console.log("All:", totalArr.toString());
  console.log("Even:", evenArr.toString());
  console.log("Odd:", oddArr.toString());
  
}

function runExerciseTwentySix() {
  let arr: number[] = []
  for (let index = 0; index < 10; index++) {
    arr.push(Number(readLine("Enter a number: ")))
  }
  console.log(arr.filter((num) => {
    return num < 0;
  }));
  
}

function runExerciseTwentySeven() {
  let arr: number[] = []
  for (let index = 0; index < 5; index++) {
    arr.push(Number(readLine("Enter a positive number: ")))
  }

  let odd = arr.filter((num) => {
    return num % 2 !== 0;
  })
  let even = arr.filter((num) => {
    return num % 2 === 0;
  })

  console.log(arr.toLocaleString());
  console.log(odd.toLocaleString());
  console.log(even.toLocaleString());
  
}



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
      case 11:
        runExerciseEleven();
        break;
      case 12:
        runExerciseTwelve();
        break;
      case 13:
        runExerciseThirteen();
        break;
      case 14:
        runExerciseFourteen();
        break;
      case 15:
        runExerciseFifteen();
        break;
      case 16:
        runExerciseSixteen();
        break;
      case 17:
        runExerciseSeventeen();
        break;
      case 19:
        runExercisenNineteen();
        break;
      case 20:
        runExerciseTwenty();
        break;
      case 21:
        runExerciseTwentyOne();
        break;
      case 22:
        runExerciseTwentyTwo();
        break;
      case 23:
        runExerciseTwentyThree();
        break;
      case 24:
        runExerciseTwentyFour();
        break;
      case 25:
        runExerciseTwentyFive();
        break;
      case 26:
        runExerciseTwentySix();
        break;
      case 27:
        runExerciseTwentySeven();
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
