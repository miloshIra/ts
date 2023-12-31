
import { Invoice } from "./src/models/invoice.js"
import { Payment } from "./src/models/payment.js"
import { HasFormatter } from "./src/interfaces/HasFormatter.js";

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'plumbing work', 500)

let docs: HasFormatter[] = []

docs.push(docOne)
docs.push(docTwo)

console.log(docs)

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

let names:string[] = ['Ira', 'Mia', 'Lando'];
// console.log(names)

names.push('Toad')
// console.log(names)
names.push('Hi')

let numbers:number[] = [10, 20, 30, 50];
numbers.push(40);

var hi = "hi"

names[0] = "Ira"

// object 

let ninjas = {
    name: 'Ira',
    girl: 'Mia',
    belt: 'Black',
    age: 30,
}

// console.log(ninjas.name)

let signal:boolean



let run = (name:string) => {
    signal = true
    if (signal=true) {
    const message = 'My name is ${name}';
    // console.log(message)
    console.log("RUN " + name + " RUN!")
    }
}
// run('Forest')



// Basic function >>
let greet:Function = () => {
    console.log('Hello darkness');
}

const add = (a:number, b:number, c:number|string = 10) => {
   // console.log(a+b)
   // console.log(c)
}

add(5, 10, 'twenty')

const minus:Function = (a:number, b:number) => {

    // console.log(`${a} plus ${b}`)
    return a + b
}

let result:number = minus(10,6)
// console.log(result)


let invoices: Invoice[] = [];

const invOne = new Invoice('mario', 'food', 250)
const invTwo = new Invoice('Ira','games', 250)
const invThree = new Invoice('Mia', "looks", 250)

invoices.push(invOne)
invoices.push(invTwo)
invoices.push(invThree)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.details, inv.amount, inv.format());
//     console.log(inv.get_client());
// })


interface IsPerson {
    name:string
    age:number

    speak(word:string): void
    spend(money:number): void
    
}

const me: IsPerson = {
    name:'Ira',
    age:30,
    speak(text:string): void{
        console.log(text)
    },
    spend(amount:number) {
        console.log('I spent', amount)
        return amount
    }
};

let someone: IsPerson;

const greetPerson = (person:IsPerson) => {
    console.log('hello', person.name)

}

greetPerson(me)
console.log(me)