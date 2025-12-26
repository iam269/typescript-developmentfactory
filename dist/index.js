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
const something = displayError();
console.log(something);
function displayName(name) {
    console.log(name);
}
const personName = null;
displayName("Aurel");
displayName(null);
//# sourceMappingURL=index.js.map