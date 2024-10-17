import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = 10
let getal2 = 50



function som(getal1, getal2){
    let som = getal1 + getal2
    console.log(som)
}

som()
