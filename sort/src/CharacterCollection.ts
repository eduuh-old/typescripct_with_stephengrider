export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftindex: number, rightindex: number): boolean {
    return (
      this.data[leftindex].toLowerCase() > this.data[rightindex].toLowerCase()
    );
  }
  swap(leftindex: number, rightindex: number): void {
    const characters = this.data.split("");

    const lefthand = characters[leftindex];
    characters[leftindex] = characters[rightindex];
    characters[rightindex] = lefthand;
    this.data = characters.join("");
  }
}
