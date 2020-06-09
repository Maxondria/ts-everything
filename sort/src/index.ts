import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";

const numbersCollection = new NumbersCollection([-0, 1, 10, 5, -9]);
const charactersCollection = new CharactersCollection("moureen");

numbersCollection.sort();
charactersCollection.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
