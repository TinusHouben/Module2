import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Kies een optie:")
console.log("1.Optellen")
console.log("2.Verschil")
console.log("3.Product")
console.log("4.Deling")
let keuze = parseFloat(await userInput.question("Geef je optie in: "))

let getal1 = parseFloat(await userInput.question("Voer het eerste getal in: "))
let getal2 = parseFloat(await userInput.question("Voer het tweede getal in: "))
let uitkomst

switch(keuze)
{
    case 1:
        uitkomst = getal1 + getal2
        console.log("Uitkomst: " + uitkomst)
        break
    case 2:
        uitkomst = getal1 - getal2
        console.log("Uitkomst: " + uitkomst)
        break
    case 3:
        uitkomst = getal1 * getal2
        console.log("Uitkomst: " + uitkomst)
        break
    case 4:
        uitkomst = getal1 / getal2
        console.log("Uitkomst: " + uitkomst)
        break
    default:
        console.log("Je hebt een foute optie ingegeven!")
        break
}