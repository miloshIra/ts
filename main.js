"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_js_1 = require("./src/models/invoice.js");
var payment_js_1 = require("./src/models/payment.js");
var docOne;
var docTwo;
docOne = new invoice_js_1.Invoice('yoshi', 'web work', 250);
docTwo = new payment_js_1.Payment('mario', 'plumbing work', 500);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// let inputs:string[] = ['H', 'a', 'as'];
// // console.log(inputs)
// inputs.forEach(input => {
//     // console.log(input)
// })
// let guy:string = 'mario';
// let age:number = 30;
// let isBlackBelt:boolean = false;
// const circ = (diameter:number) => {
//     return diameter * Math.PI
// };
// console.log(circ(2));
// array
var names = ['Ira', 'Mia', 'Lando'];
// console.log(names)
names.push('Toad');
// console.log(names)
names.push('Hi');
var numbers = [10, 20, 30, 50];
numbers.push(40);
var hi = "hi";
names[0] = "Ira";
// object 
var ninjas = {
    name: 'Ira',
    girl: 'Mia',
    belt: 'Black',
    age: 30,
};
// console.log(ninjas.name)
var signal;
var run = function (name) {
    signal = true;
    if (signal = true) {
        var message = 'My name is ${name}';
        // console.log(message)
        console.log("RUN " + name + " RUN!");
    }
};
// run('Forest')
// Basic function >>
var greet = function () {
    console.log('Hello darkness');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    // console.log(a+b)
    // console.log(c)
};
add(5, 10, 'twenty');
var minus = function (a, b) {
    // console.log(`${a} plus ${b}`)
    return a + b;
};
var result = minus(10, 6);
// console.log(result)
var invoices = [];
var invOne = new invoice_js_1.Invoice('mario', 'food', 250);
var invTwo = new invoice_js_1.Invoice('Ira', 'games', 250);
var invThree = new invoice_js_1.Invoice('Mia', "looks", 250);
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
var me = {
    name: 'Ira',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var someone;
var greetPerson = function (person) {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
