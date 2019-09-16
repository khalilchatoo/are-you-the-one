import { generatePairs } from './generatePairs';
import { generateCombs } from './generateCombs';

const { pairs, pairStringToIdMap } = generatePairs();
const { combinations } = generateCombs(pairs, pairStringToIdMap);

console.log(pairs.length);
console.log(combinations.length);