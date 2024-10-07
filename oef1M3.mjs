import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

for (let teller = 1; teller <= 20; teller++) {
    if (teller % 2 == 0) {
        console.log(teller);
    }
}