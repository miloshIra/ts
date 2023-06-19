"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var char = "Mia";
var inputs = ['H', 'a', 'as'];
// console.log(inputs)
inputs.forEach(function (input) {
    // console.log(input)
});
var guy = 'mario';
var age = 30;
var isBlackBelt = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(2));
// array
var names = ['Ira', 'Mia', 'Lando'];
console.log(names);
names.push('Toad');
console.log(names);
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
console.log(ninjas.name);
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
var greet = function () {
    console.log('Hello darkness');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'twenty');
var minus = function (a, b) {
    console.log("".concat(a, " plus ").concat(b));
    return a + b;
};
var result = minus(10, 6);
console.log(result);
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, "e for ").concat(this.details);
    };
    return Invoice;
}());
var invoices = [];
var invOne = new Invoice('mario', 'food', 250);
var invTwo = new Invoice('Ira', 'games', 250);
var invThree = new Invoice('Mia', "looks", 250);
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
