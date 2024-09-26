import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Kies een artiest:")
console.log("1.Red Hot Chilli Peppers")
console.log("2.AC/DC")
console.log("3.Netsky")
console.log("4.De Strangers ")
let keuze = parseFloat(await userInput.question("Geef je keuze in: "))

switch(keuze)
{
    case 1:
        console.log("Je koos voor de Red Hot CHilli Peppers!")
        break
    case 2:
        console.log("Je koos voor AC/DC!")
        break
    case 3:
        console.log("Je koos voor Netsky!")
        break
    case 4:
        console.log("Je koos voor De Strangers")
        break
    default:
        console.log("Je hebt een foute keuze ingegeven!")
        break
}