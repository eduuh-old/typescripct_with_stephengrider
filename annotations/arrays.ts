const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// helps incompatible values

// carMakers.push(30);
// Help with 'map

//flexible types
// Arrays are use as a collection of differenct records.
const importantDates  = [new Date(), '2010-10-10'];
importantDates.push('2030-30-10');
importantDates.push(new Date());


