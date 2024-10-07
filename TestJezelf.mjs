import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; i++){
        console.log(i)
    }
    console.log(j)
}
