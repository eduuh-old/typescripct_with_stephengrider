import { Sorter } from "./sorter";
import { NumbersCollections } from "./numberscollectins";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from './LinkedList';
//
// const numbercollections = new NumbersCollections([20, 10, 3, -5, 0]);
// const sort = new Sorter(numbercollections);
// sort.sort();
// console.log(numbercollections);

const charactercollections = new CharacterCollection("Edwin kamau");
charactercollections.sort();
console.log(charactercollections);


const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(3);
linkedlist.add(3);
linkedlist.sort();
linkedlist.print();
// linkedsorter.sort();
// linkedlist.print();
const numbercollections = new NumbersCollections([20, 10, 3, -5, 0]);
numbercollections.sort();
console.log(numbercollections);