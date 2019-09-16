import * as fs from 'fs';

import { generatePairs } from './generatePairs';
import { generateCombs } from './generateCombs';
import { generatePairString } from './helpers';
import { n, perfectMatches } from './names';
import { Combination, IDPair } from './types';

const { pairs, pairStringToIdMap, pairsMap } = generatePairs();
const { combinations } = generateCombs(pairs, pairStringToIdMap);

export const ceremonyOne: Combination = [
    new Set([n.Paige, n.Aasha]),
    new Set([n.Brandon, n.Remy]),
    new Set([n.Max, n.Justin]),
    new Set([n.Basit,n.Jonathan]),
    new Set([n.Nour,n.Amber]),
    new Set([n.Kylie,n.Kari]),
    new Set([n.Jasmine,n.Jenna]),
    new Set([n.Kai,n.Danny])
].map((val) => pairStringToIdMap[generatePairString(val)]);

export const ceremonyTwo: Combination = [
    new Set([n.Brandon, n.Aasha]),
    new Set([n.Danny, n.Remy]),
    new Set([n.Jasmine, n.Justin]),
    new Set([n.Basit,n.Jonathan]),
    new Set([n.Nour,n.Amber]),
    new Set([n.Kylie,n.Kari]),
    new Set([n.Max,n.Paige]),
    new Set([n.Kai,n.Jenna])
].map((val) => pairStringToIdMap[generatePairString(val)]);

export const ceremonyThree: Combination = [
    new Set([n.Jenna, n.Justin]),
    new Set([n.Paige, n.Amber]),
    new Set([n.Brandon, n.Jonathan]),
    new Set([n.Remy,n.Basit]),
    new Set([n.Kai,n.Danny]),
    new Set([n.Kylie,n.Kari]),
    new Set([n.Jasmine,n.Nour]),
    new Set([n.Max,n.Aasha])
].map((val) => pairStringToIdMap[generatePairString(val)]);

export const ceremonyFour: Combination = [
    new Set([n.Danny, n.Basit]),
    new Set([n.Jonathan, n.Kylie]),
    new Set([n.Aasha, n.Remy]),
    new Set([n.Kari,n.Kai]),
    new Set([n.Jasmine,n.Brandon]),
    new Set([n.Max,n.Justin]),
    new Set([n.Amber,n.Nour]),
    new Set([n.Paige,n.Jenna])
].map((val) => pairStringToIdMap[generatePairString(val)]);

export const ceremonyFive: Combination = [
    new Set([n.Jonathan, n.Basit]),
    new Set([n.Aasha, n.Brandon]),
    new Set([n.Danny, n.Kai]),
    new Set([n.Kari,n.Paige]),
    new Set([n.Jenna,n.Amber]),
    new Set([n.Nour,n.Remy]),
    new Set([n.Max,n.Justin]),
    new Set([n.Kylie,n.Jasmine])
].map((val) => pairStringToIdMap[generatePairString(val)]);

export const perfectMatchesId = perfectMatches.map((val) => pairStringToIdMap[generatePairString(val)]);
const filteredCombinations: Combination[] = combinations.filter((comb) => {
    const mergedSet1 = new Set([...comb, ...ceremonyOne]);
    const mergedSet2 = new Set([...comb, ...ceremonyTwo]);
    const mergedSet3 = new Set([...comb, ...ceremonyThree]);
    const mergedSet4 = new Set([...comb, ...ceremonyFour]);
    const mergedSet5 = new Set([...comb, ...ceremonyFive]);
    const perfectMatchSet = new Set([...comb, ...perfectMatchesId]);

    return mergedSet4.size === 15 &&
        mergedSet3.size === 14 &&
        mergedSet2.size === 14 &&
        mergedSet1.size === 14 &&
        mergedSet5.size === 13 &&
        perfectMatchSet.size === 8;
    // return false;
})

const countOccurenciesOfPairs = (filteredCombinations: Combination[]) => {
    const pairIDToOccurence: Record<number, number> = {}

    filteredCombinations.map((comb) => {
        comb.forEach((id) => {
            const current = pairIDToOccurence[id] || 0;
            pairIDToOccurence[id] = current + 1;
        })
    })

    return pairIDToOccurence;
}

const pairIDToOccurence = countOccurenciesOfPairs(filteredCombinations);
const calculateProbabilities = (pairs: IDPair[], pairIDToOccurence: Record<number,number>, numberOfCombinations: number) => {
    return pairs.reduce((acc, { id, pair }) => {
        const pairString = generatePairString(pair);
        const probability = (pairIDToOccurence[id]/numberOfCombinations) || 0;

        // const probability = `${(probabilityValue).toPrecision(4)}%`
        return [...acc, {
            pair: pairString,
            probability
        }];
    }, [])
}

const probabilities = calculateProbabilities(pairs, pairIDToOccurence, filteredCombinations.length);

var file = fs.createWriteStream('combinations.csv');
file.on('error', function(err) { console.log(err) });
probabilities.forEach(({pair, probability}) => { file.write(`${pair},${probability}\n`); });
file.end();

console.log(pairs.length);
console.log(filteredCombinations.length);
console.log(probabilities);
console.log('Filtered Combinations: ', filteredCombinations.length);

const stringCombinations = filteredCombinations.map((comb) => {
    return comb.map((id) => pairsMap[id]);
});

console.log(stringCombinations);

var file = fs.createWriteStream('combinations_expanded.csv');
file.on('error', function(err) { console.log(err) });
stringCombinations.forEach((comb) => { file.write(`${comb.join("\t")}\n`); });
file.end();
