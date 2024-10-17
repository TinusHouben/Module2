import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

for (let i = 0; i < 100; i++){
if (i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz")
}
 else if (i % 3 == 0){
    console.log("Fizz")
}
else if (i % 5 == 0){
    console.log("Fizz")
}
else{
    console.log(i)
}
}