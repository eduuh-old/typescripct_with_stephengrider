import faker from 'faker';
import {Mappable} from './CustomMap'
export class Company implements Mappable{
  color:string = 'red';
  companyName: string;
  catchPharase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string{
    return `
         <div>
         <h1>Company Name ${this.companyName}</h1>
         <h3>Company Pharse ${this.catchPharase}</h3>
         </div>
          `;
  }
}