import { Bitch, bitches, Fuckboi, fuckbois, Couple } from "./types";

export function generateCombinations(
  bitches: Bitch[],
  fuckbois: Fuckboi[],
  pairings: Couple[] = [],
  combinations: Couple[][] = []
): Couple[][] {
  if (bitches.length === 0) {
    return [pairings];
  }

  const bitch: Bitch = bitches[0];
  const leftOverBitches: Bitch[] = bitches.slice(1);
  return fuckbois.reduce((acc, fuckboi, i) => {
    const couple = {
      bitch,
      fuckboi,
    };
    const leftOverFuckBois: Fuckboi[] = [
      ...fuckbois.slice(0, i),
      ...fuckbois.slice(i + 1),
    ];
    const res = generateCombinations(
      leftOverBitches,
      leftOverFuckBois,
      [...pairings, couple],
      combinations
    );

    return [...acc, ...res];
  }, []);
}

console.log(
  " END RESULT: ",
  JSON.stringify(generateCombinations(bitches, fuckbois))
);
