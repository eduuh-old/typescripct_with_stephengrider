class Vehicle {
  constructor(public color:string) {
    
  }
  

 public drive(): void{
    console.log('chugga chugga');
  }
protected honk(): void{
    console.log('beep')
  }
}
class Car extends Vehicle{
  constructor(public wheels: number, color: string) {
    super(color);
  }
   drive(): void{
    console.log('vroom');
  }
  startDrivingProcess(): void{
    this.drive();
  }
}
const vehicle = new Vehicle("orange");
console.log(vehicle.color);
const car = new Car(4,"orange");
car.startDrivingProcess();

// interfaces and classes has strong code reuse in TS
// design patterns