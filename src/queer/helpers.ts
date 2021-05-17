import { Pair } from "./types";

export const generatePairString = (pair: Pair) => [...pair].sort().join();

export const eqSet = (as: Set<any>, bs: Set<any>) => {
    if (as.size !== bs.size) return false;
    for (const a of as) if (!bs.has(a)) return false;
    return true;
}
