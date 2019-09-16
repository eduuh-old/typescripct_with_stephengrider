interface Sortable {
  length: number;
  compare(leftindex: number, rightindex: number): boolean;
  swap(leftindex: number, rightindex: number): void;
}
export class Sorter {
  //union type operator
  constructor(public collection: Sortable) {
    this.collection = collection;
  }
  //implemetation of Bubble sort algorithm
  sort(): void {
    // object destructuring

    //if collection is an arrays of numbers
    //type guard
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
