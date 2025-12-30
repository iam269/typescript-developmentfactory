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
    firstName: string | undefined;
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

const input: any = "13";

function print(input: number | string) {
    if (typeof input === "string") {
        console.log(input.toLowerCase());
    }else {
        console.log(input);
    }
    
}

print(input);

interface Company {
    name: string;
    employees: number;
}

interface InternationalCompany extends Company {
    country: string;
}

function getCompany(): InternationalCompany {
    const myCompany: InternationalCompany = {
    name: "Tech Corp",
    employees: 500,
    country: "USA"
    };
    return myCompany;
}

const myCompany = getCompany();

console.log(myCompany.country);

const myFirstName: number = "Bogdan" as unknown as number;

type something = "something";

const someValue: something = "something";

function displaySomething(input: something) {
    console.log(input);
}

displaySomething("something");

function configure(x: "one", y: "two") {
    // configure something
}

const configuration = {
    one: "one",
    two: "two"
};

//configure(configuration.one, configuration.two); will show error
configure(configuration.one as "one", configuration.two as "two");


const GASOLINE = "Gasoline";
const DIESEL = "Diesel";
const LPG = "LPG";

enum Fuel {
    GASOLINE = "Gasoline", DIESEL = "Diesel", LPG = "LPG"
}

function startEngine(fuel: Fuel){
    if(fuel === Fuel.LPG){
        throw Error("Engine doesn't work with LPG");
    }
    console.log("Engine has been started with " + fuel);
}

startEngine(Fuel.GASOLINE);
startEngine(Fuel.DIESEL);
//startEngine(Fuel.LPG); will show error

class Programmer <T extends Language>{
    private language: T;

    constructor(language: T) {
        this.language = language;
    }

    canCode(language: T): boolean {
        if(language.name === "C#"){
            console.log("Programmer seems to be a backend developer");
        }
        if(language.name === "JavaScript"){
            console.log("Programmer seems to be a frontend developer");
        }
        return language === this.language;
    }
}
/*
const programmer = new Programmer<string>("TypeScript");

console.log("Programmer can code in TypeScript: " + programmer.canCode("TypeScript"));

enum Language {
    Csharp, Javascript, TypeScript, Python
}

const alex = new Programmer<Language>(Language.Javascript);
console.log("Alex can code in JavaScript: " + alex.canCode(Language.Javascript));
*/

type Language = {
    name: string;
}

const csharp: Language ={
    name: "C#"
}

const js: Language ={
    name: "JavaScript"
}

const ts: Language ={
    name: "TypeScript"
}

const aurel = new Programmer<Language>(csharp);
console.log("Aurel can code in C#: " + aurel.canCode(csharp));

const alex = new Programmer<Language>(js);
console.log("Alex can code in JavaScript: " + alex.canCode(js));