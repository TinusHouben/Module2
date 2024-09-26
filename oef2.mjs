import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimum = 5
let maximum = 75

let Getal = parseFloat(await userInput.question('Voer een getal in tussen de 5 en 75: '))

if (Getal > minimum && Getal < maximum)
{
    console.log("Je getal ligt tussen " + minimum + " en " + maximum )
} else
{
    console.log("Je getal ligt niet tussen " + minimum + " en " + maximum)
}