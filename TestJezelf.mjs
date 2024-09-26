import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Voer Getal1 in: '))
let getal2 = parseFloat(await userInput.question('Voer Getal2 in: '))

if (getal1 > 0 && getal2 > 0)
{
    console.log("Beide getallen zijn positief.")
} else if (getal1 > 0 && getal2 < 0)
{
    console.log("Het eerste getal is positief en het tweede getal is negatief.")
} else if (getal1 < 0 && getal2 > 0)
{
    console.log("Het eerste getal is negatief en het tweede getal is positief.")
} else if (getal1 < 0 && getal2 < 0)
{
    console.log("Beide getallen zijn negatief.")
} else if (getal1 == 0 || getal2 == 0)
{
    console.log("Eén van de getallen is nul.")
}