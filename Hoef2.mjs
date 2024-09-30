import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Jaartal = parseFloat(await userInput.question("Voer een jaartal in: "))

if (Jaartal % 4 == 0 || Jaartal % 400 == 0)
{
    console.log("Het is een schrikkeljaar!")
} else if (Jaartal % 100 == 0)
{
    console.log("Het is geen schrikkeljaar!")
} else 
{
console.log("Het is geen schrikkeljaar!")
}