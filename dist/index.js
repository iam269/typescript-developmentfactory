"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myName = "Aurel";
const myAge = 17;
const isMinor = false;
const persons = ["Alice", "Bob", "Charlie"];
const tuple = ["Dave", 25, false, "Eve"];
let t = [1, "test", false];
//t = 1;
//t = "test";
let u = [];
let whatsThis = [];
let myNumber;
myNumber = whatsThis;
let notGoingToHappen;
function displayError() {
    throw new Error("something bad happened");
}
function displayName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    return fullName;
}
const personName = null;
displayName("Aurel", "Bogdan");
let myFunc;
myFunc = displayName;
myFunc("Aurel", "Bogdan");
const person1 = {
    firstName: "aurel",
    lastName: "bogdan",
    age: 17
};
const person2 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};
function displayPerson(person) {
    console.log(`${person.firstName} ${person.lastName} age: ${person.age}`);
}
displayPerson(person1);
//# sourceMappingURL=index.js.map