import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Pi = 3.14
let straal = 0
let zijde1 = 0
let zijde2 = 0
let basis = 0
let hoogte = 0
let uitkomst = 0

let keuze = await userInput.question("Kies een berekening(Cirkel, Driehoek, Rechthoek, Vierkant): ")

switch(keuze){
    case "Cirkel":
        straal = parseFloat(await userInput.question("Geef de straal in: "))
        OPPCirkcel(straal, Pi)
        console.log(uitkomst)
        break;
    
    case "Driehoek":
        basis = parseFloat(await userInput.question("Geef de basis in: "))
        hoogte = parseFloat(await userInput.question("Geef de hoogte in: "))
        OPPDriehoek(basis, hoogte)
        console.log(uitkomst)
        break;
    
    case "Rechthoek":
        zijde1 = parseFloat(await userInput.question("Geef zijde1 in: "))
        zijde2 = parseFloat(await userInput.question("Geef zijde2 in: "))
        OPPRechthoek(zijde1, zijde2)
        console.log(uitkomst)
        break;

    case "Vierkant":
         zijde1 = parseFloat(await userInput.question("Geef zijde1 in: "))
         zijde2 = parseFloat(await userInput.question("Geef zijde2 in: "))
        OPPVierkant(zijde1, zijde2)
        console.log(uitkomst)
        break;

    default:
        console.log("Je hebt een foute keuze ingevoerd!")
        break;
}

function OPPCirkcel(Pi, straal, output){
uitkomst = Pi * straal * straal
return uitkomst
}

function OPPDriehoek(basis, hoogte){
uitkomst = basis * hoogte / 2
return uitkomst
}

function OPPRechthoek(zijde1, zijde2){
uitkomst = zijde1 * zijde2
return uitkomst
}

function OPPVierkant(zijde1, zijde2){
OPPRechthoek(zijde1, zijde2)
}