import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let height = 5; 

if (height % 2 === 0) {
    console.log("Height must be an odd number!");
} else {

    for (let i = 0; i < Math.floor(height / 2) + 1; i++) {
        let spaces = ' '.repeat(Math.floor(height / 2) - i);
        let stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }


    for (let i = Math.floor(height / 2) - 1; i >= 0; i--) {
        let spaces = ' '.repeat(Math.floor(height / 2) - i);
        let stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }
}
