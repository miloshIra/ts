const char = "Mia"

let inputs:string[] = ['H', 'a', 'as'];
// console.log(inputs)
inputs.forEach(input => {
    // console.log(input)
})


let guy:string = 'mario';
let age:number = 30;
let isBlackBelt:boolean = false;

const circ = (diameter:number) => {
    return diameter * Math.PI
};

console.log(circ(2));


// array

let names:string[] = ['Ira', 'Mia', 'Lando'];
console.log(names)

names.push('Toad')
console.log(names)
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

console.log(ninjas.name)

let signal:boolean



let run = (name:string) => {
    signal = true
    if (signal=true) {
    const message = 'My name is ${name}';
    console.log(message)
    console.log("RUN " + name + " RUN!")
    }
}

run('Forest')
