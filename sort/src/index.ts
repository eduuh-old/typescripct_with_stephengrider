import { Sorter } from "./sorter";
import { NumbersCollections } from "./numberscollectins";
import { CharacterCollection } from "./CharacterCollection";

const numbercollections = new NumbersCollections([20, 10, 3, -5, 0]);
const sort = new Sorter(numbercollections);
sort.sort();
console.log(numbercollections);

const charactercollections = new CharacterCollection("Edwin kamau");
const sorter = new Sorter(charactercollections);
sorter.sort();
console.log(charactercollections);
