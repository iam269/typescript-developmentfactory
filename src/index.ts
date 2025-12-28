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


function displayName(firstName: string, lastName: string): string{
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    return fullName;
}

const personName: any = null;

displayName("Aurel", "Bogdan");

let myFunc: (firstName: string, lastName: string) => string;

myFunc = displayName;

myFunc("Aurel", "Bogdan");  

type Person = {
    firstName?: string | undefined;
    lastName?: string;
    age?: number;
}

const person1: Person = {
    firstName: "aurel",
    lastName: "bogdan",
    age: 17
};
const person2: Person = {
    firstName: undefined
};

function displayPerson(person: Person) {
    console.log(`${person.firstName} ${person.lastName} age: ${person.age}`);
}

displayPerson(person1);

const input: number | string = "Ion";