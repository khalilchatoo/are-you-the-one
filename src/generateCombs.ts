import { names, noMatchPairs } from "./names";
import { Combination, Pair, IDPair } from "./types";
import { generatePairString, eqSet } from "./helpers";
import * as path from 'path';

export const generateCombs = (pairs: IDPair[], pairStringToIdMap: Record<string, number>) => {
    const combinations: Combination[] = [];
    const namesForCombs: string[] = [...names];
    
    const noMatchIds: Set<number> = new Set(
        noMatchPairs.map((noMatchPair) => {
            let noMatchId: number;
            pairs.forEach(({ pair, id }) => {
                if (eqSet(noMatchPair, pair)) {
                    noMatchId = id;
                    return;
                }
            });
            return noMatchId;
        })
    );

    const generate = (unpairedNames: string[], builtPairs: Combination) => {
        if (!unpairedNames.length) {
            combinations.push(builtPairs);
            builtPairs = [];
            return;
        }
        const n = unpairedNames.pop();
        unpairedNames.forEach((val) => {
            const copy = [...unpairedNames];
            const pair: Pair = new Set();
            pair.add(n);
            pair.add(val);
            copy.splice(copy.indexOf(val), 1);
            const pairString = generatePairString(pair);
            const setId = pairStringToIdMap[pairString];
            const newBuiltPairs: Combination = [...builtPairs, setId];
            if (!noMatchIds.has(setId)) {
                generate(copy, newBuiltPairs);
            } 
        });
    }

    generate(namesForCombs, []);

    return {
        combinations
    }
}