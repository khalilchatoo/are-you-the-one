import { generatePairString } from "./helpers";
import { IDPair, Pair } from "./types";
import { names } from "./names";

export const generatePairs = () => {
    const namesForPairs: string[] = [...names];
    const pairs: IDPair[] = [];
    const pairsMap: Record<number, string> = {};
    const pairStringToIdMap: Record<string, number> = {};
    let id = 0;

    const generate = () => {
        while (namesForPairs.length) {
          const second = namesForPairs.pop();
          namesForPairs.forEach((val) => {
            const pair: Set<string> = new Set();
            pair.add(val);
            pair.add(second);
            pairs.push({ id, pair });
            pairsMap[id] = generatePairString(pair);
            pairStringToIdMap[generatePairString(pair)] = id;
            id++;
          })
        }
    }

    generate();

    return {
        pairs,
        pairsMap,
        pairStringToIdMap
    }
}