import { Sorter } from './sorter';
export class NumbersCollections extends Sorter{

  get length(): number{
    return this.data.length;
  }
  constructor(public data: number[]) {
    super();
  }
  compare(leftindex:number,rightindex:number): boolean{
    return this.data[leftindex] > this.data[rightindex];
  }
  swap(leftindex:number,rightindex:number): void{
    const lefthand = this.data[leftindex];
    this.data[leftindex] = this.data[rightindex];
    this.data[rightindex] = lefthand;
  }

  
}