import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question("Geef je naam in: ")

begroeting(naam)

function begroeting(naam){
    console.log("Dag " + naam + " ik wens je een fijne dag!")
}
