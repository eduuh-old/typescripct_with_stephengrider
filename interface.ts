// interface is an structure of the object
interface Reportable{
    summary():string;
}
const oldCivic = {
    name: 'civil',
    year: new Date(),
    isBroken: true,
    
    summary(): string  {
    return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    cabornated: true,
    sugar: 20,
    summary(): string{
        return `My drink has ${this.color} color and is ${this.sugar}`;
    }
};
// This type annotation is very long => We use interface to solve this prob
const printSummary = (item:Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

// Using interfaces for gate keeping
// create funtions that accept arguments that are typed with interfaces.
// objects/class ca decide to implemnt a given interfac to work with the fuction.


