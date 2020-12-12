import * as fs from "fs";

import { noMatchPairs, ceremonies } from "../vanilla/data";
import { Bitch, bitches, Fuckboi, fuckbois, Ceremony } from "./types";
import { intersection } from "lodash";

export function generateCombinations(
  bitches: Bitch[],
  fuckbois: Fuckboi[],
  pairings: string[] = [],
  combinations: string[][] = []
): string[][] {
  if (bitches.length === 0) {
    return [pairings];
  }

  const bitch: Bitch = bitches[0];
  const leftOverBitches: Bitch[] = bitches.slice(1);
  return fuckbois.reduce((acc, fuckboi, i) => {
    const couple: string = `${bitch}_${fuckboi}`;
    if (noMatchPairs.includes(couple)) {
      return acc;
    }

    const leftOverFuckBois: Fuckboi[] = [
      ...fuckbois.slice(0, i),
      ...fuckbois.slice(i + 1),
    ];
    const res = generateCombinations(
      leftOverBitches,
      leftOverFuckBois,
      [...pairings, `${bitch}_${fuckboi}`],
      combinations
    );

    return [...acc, ...res];
  }, []);
}

function filterByCeremonies(combinations: string[][]): string[][] {
  return combinations.filter((comb: string[]) =>
    ceremonies.every(
      (ceremony: Ceremony) =>
        intersection(comb, ceremony.couples).length === ceremony.numberOfMatches
    )
  );
}

const stringCombinations: string[][] = filterByCeremonies(
  generateCombinations(bitches, fuckbois)
);

console.log("stringCombinations: ", stringCombinations.length);

var file = fs.createWriteStream("season_1_combinations_expanded.csv");
file.on("error", function (err) {
  console.log(err);
});
file.write(`${bitches.join(",\t")}\n`);
stringCombinations.forEach((comb) => {
  file.write(`${comb.join(",\t")}\n`);
});
file.end();
console.log("FINISHED WRITING TO COMBO");

function getOccurrences(combinations: string[][]): Record<string, number> {
  const allPairsObj: Record<string, number> = {};
  bitches.forEach((bitch) => {
    fuckbois.forEach((fuckboi) => {
      allPairsObj[`${bitch}_${fuckboi}`] = 0;
    });
  });

  combinations.forEach((combo) => {
    combo.forEach((couple) => {
      allPairsObj[couple] = allPairsObj[couple] + 1;
    });
  });
  return allPairsObj;
}

const occurrences: Record<string, number> = getOccurrences(stringCombinations);

var file = fs.createWriteStream("occurrences.csv");
file.on("error", function (err) {
  console.log(err);
});
for (let couple in occurrences) {
  file.write(`${couple},${occurrences[couple]}\n`);
}
file.end();
console.log("FINISHED WRITING TO OCCURANCES");
