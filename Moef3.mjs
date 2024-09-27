import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Welkom bij de quiz beantwoord de volgende 5 vragen:")
console.log("Wat is de hoofdstad van Frankrijk?")
let vraag1 = await userInput.question("Jouw antwoord: ")

if (vraag1 == "Parijs")
{
    console.log("Goed antwoord!")
}
else {
    console.log("Fout antwoord. Het juiste antwoord is: Parijs")
}

console.log("Hoeveel planeten zijn er in ons zonnenstelsel?")
let vraag2 = await userInput.question("Jouw antwoord: ")

if (vraag2 == 8)
{
    console.log("Goed antwoord!")
}
else {
    console.log("Fout antwoord. Het juiste antwoord is: 8")
}

console.log("Wat is het grootste zoogdier ter wereld??")
let vraag3 = await userInput.question("Jouw antwoord: ")

if (vraag3 == "Blauwe vinvis")
{
    console.log("Goed antwoord!")
}
else {
    console.log("Fout antwoord. Het juiste antwoord is: Blauwe vinvis")
}

console.log("Wie schreef het toneelstuk 'Romeo en Julia'?")
let vraag4 = await userInput.question("Jouw antwoord: ")

if (vraag4 == "Shakespeare")
{
    console.log("Goed antwoord!")
}
else {
    console.log("Fout antwoord. Het juiste antwoord is: Shakespeare")
}

console.log("Hoeveel poten heeft een spin?")
let vraag5 = await userInput.question("Jouw antwoord: ")

if (vraag5 == 8)
{
    console.log("Goed antwoord!")
}
else {
    console.log("Fout antwoord. Het juiste antwoord is: 8")
}

