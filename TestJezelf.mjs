import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let TVSerie = await userInput.question("Geef een TV serie in: ")
Tvseriecheck(TVSerie);

function Tvseriecheck (TVSerie){
    switch(TVSerie){
        case "Simpsons":
            console.log("Je gekozen tv serie bevind zich in amerika!")
            break;

            default:
                console.log("Sorry, ik weet niet waar de serie " + TVSerie + " zich afspeelt")
    }
}