let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Build in objects
let myNumbers: number[] = [1, 2, 3];
let now: Date = new Date();
let colors: string[] = ['red', 'green', 'blue'];
let truths: boolean[] = [true, true, true];

//classes
class Car{

}

let car: Car = new Car();
//object literal

let point : { x: number; y: number } = {
    x: 10,
    y: 40
};

//When to use annotations
// 1) functions that returns the 'any' type

const json = '{"x":10,"y":20}';
const coordinate: { x: number;y:number}= JSON.parse(json);
console.log(coordinate);



let words = ['red', 'green', 'blue'];
// 2) Variable declared and initialized later.
let foundWord = false;

for (let i = 0; i < words.length; i++){
    if (words[i] === 'green'){
        foundWord = true;
        }
}

// 3) variables whose type cannot be infereed correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 10; i < numbers.length; i++){
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
