const myName: string = "Aurel";
const myAge: number = 17;
const isMinor: boolean = false;

const persons: string[] = ["Alice", "Bob", "Charlie"];

const tuple: [string, number, boolean, string] = ["Dave", 25, false, "Eve"];

let t: any = [1, "test", false];
//t = 1;
//t = "test";

let u: unknown = [];

let whatsThis:unknown = [];
let myNumber: any;

myNumber = whatsThis;

let notGoingToHappen: never ;

function displayError(): never {
    throw new Error("something bad happened");
}

const something = displayError();
console.log(something);

function displayName(name: string){
    console.log(name);
}

const personName: any = null;

displayName("Aurel");
displayName(null);
