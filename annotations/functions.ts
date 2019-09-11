const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number):number {
    return a / b;
};

const multiply = function (a: number, b: number): number {
    return a * b;
};
const logger = (message: string):void => {
    console.log(message);
};

const throwErrow = (message: string): never => {
    if (!message)
        throw new Error(message);
};

const forecast = {
    date: new Date(),
    weather: "sunny"
};
const logWeather = ({date,Weather}: {date: Date; Weather: string }) => {
    console.log(date);
    console.log(Weather);
};



