"use strict";
const char = "Mia";
let inputs = ['H', 'a', 'as'];
// console.log(inputs)
inputs.forEach(input => {
    // console.log(input)
});
let guy = 'mario';
let age = 30;
let isBlackBelt = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(2));
// array
let names = ['Ira', 'Mia', 'Lando'];
console.log(names);
names.push('Toad');
console.log(names);
names.push('Hi');
let numbers = [10, 20, 30, 50];
numbers.push(40);
var hi = "hi";
names[0] = "Ira";
// object 
let ninjas = {
    name: 'Ira',
    girl: 'Mia',
    belt: 'Black',
    age: 30,
};
console.log(ninjas.name);
let signal;
let run = (name) => {
    signal = true;
    if (signal = true) {
        const message = 'My name is ${name}';
        console.log(message);
        console.log("RUN " + name + " RUN!");
    }
};
run('Forest');
