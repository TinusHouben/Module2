import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let keuzegebruiker = parseFloat(await userInput.question("Geef een getal in: "))

delengetal(keuzegebruiker);


function delengetal(keuzegebruiker){
    if (keuzegebruiker % 2 == 0){
        console.log("Deelbaar door 2!")
    } else {
        console.log("Niet deelbaar door 2!")
    }
}