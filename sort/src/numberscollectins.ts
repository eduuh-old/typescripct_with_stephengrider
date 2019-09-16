export class NumbersCollections{
  data: number[];
  get length(): number{
    return this.data.length;
  }
  constructor(data: number[]) {
    this.data = data;
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