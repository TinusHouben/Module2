import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Voer getal1 in: "))
let getal2 = parseFloat(await userInput.question("Voer getal2 in: "))
let getal3 = parseFloat(await userInput.question("Voer getal3 in: "))
let getal4 = parseFloat(await userInput.question("Voer getal4 in: "))
let getal5 = parseFloat(await userInput.question("Voer getal5 in: "))

console.log(math.max(getal1,getal2,getal3,getal4,getal5))
console.log(math.min(getal1,getal2,getal3,getal4,getal5))

let average = (getal1 + getal2 + getal3 + getal4 + getal5) / 5

console.log(average)