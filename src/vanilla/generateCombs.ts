import * as fs from "fs";

import { noMatchPairs, ceremonies, perfectMatches } from "../vanilla/data";
import {
  Bitch,
  bitchesWithoutChristina,
  bitches,
  Fuckboi,
  fuckbois,
  Ceremony,
} from "./types";
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

function divideWithChristina(
  combinationsWithoutChristina: string[][]
): string[][] {
  const combs = [];

  combinationsWithoutChristina.forEach((combWithout: string[]) => {
    combWithout.forEach((couple) => {
      const [_, fuckBoi]: string[] = couple.split("_");
      const christinaPair: string = `${Bitch.Christina}_${fuckBoi}`;
      const newCombination = [...combWithout, christinaPair];
      if (
        !noMatchPairs.includes(christinaPair) &&
        isCombinationValid(newCombination)
      ) {
        combs.push(newCombination);
      }
    });
  });

  return combs;
}

function isCombinationValid(combination: string[]): boolean {
  return (
    ceremonies.every(
      (ceremony: Ceremony) =>
        intersection(combination, ceremony.couples).length ===
        ceremony.numberOfMatches
    ) &&
    perfectMatches.every((perfectMatch) => combination.includes(perfectMatch))
  );
}

function filterByCeremonies(combinations: string[][]): string[][] {
  return combinations
    .filter((comb: string[]) =>
      ceremonies.every(
        (ceremony: Ceremony) =>
          intersection(comb, ceremony.couples).length ===
          ceremony.numberOfMatches
      )
    )
    .filter((combs: string[]) =>
      perfectMatches.every((perfectMatch) => combs.includes(perfectMatch))
    );
}

const combinationsWithoutChristina = generateCombinations(
  bitchesWithoutChristina,
  fuckbois
);

console.log(
  "FINISHED COMB WITHOUT CHRISTINA ",
  combinationsWithoutChristina.length
);
const combinations = divideWithChristina(combinationsWithoutChristina);
console.log("FINISHED COMB WITH CHRISTINA", combinations.length);

const stringCombinations: string[][] = filterByCeremonies(combinations);
console.log("FINISHED FILTERING BY CEREMONIES");

var file = fs.createWriteStream("season_2_combinations_expanded.csv");
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
let i = 1;
for (let couple in occurrences) {
  file.write(
    `${couple}, ${occurrences[couple]}, ${(
      100 *
      (occurrences[couple] / stringCombinations.length)
    ).toFixed(2)}%\n`
  );
  if (i % 10 === 0) {
    file.write(`-------\n`);
  }
  i++;
}
file.end();
