// Array-like structure where each element represent some proprty of a record
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];
// The order of the array can change.
// when the order change we will lose meanin or the data.
// we have to memorise the value name with order.
const pepsi :Drink= ['brown', true, 40];
const sprite: Drink = ['clear', true, 35];

// where/Why to use this
/* 
    


*/
const carStats = {
    horsepower: 400,
    weight: 3353
};

