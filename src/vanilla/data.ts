import { Bitch, Fuckboi, Couple, Ceremony } from "./types";

export const noMatchPairs: string[] = [
  `${Bitch.Shanley}_${Fuckboi.Chris}`,
  `${Bitch.Jessica}_${Fuckboi.Ethan}`,
  `${Bitch.Simone}_${Fuckboi.John}`,
  `${Bitch.Jessica}_${Fuckboi.Dillan}`,
];

export const perfectMatches: string[] = [];

export const ceremonies: Ceremony[] = [
  {
    numberOfMatches: 2,
    couples: [
      `${Bitch.Kayla}_${Fuckboi.Wes}`,
      `${Bitch.Shanley}_${Fuckboi.Ethan}`,
      `${Bitch.Brittany}_${Fuckboi.Adam}`,
      `${Bitch.Jacy}_${Fuckboi.Dre}`,
      `${Bitch.Simone}_${Fuckboi.John}`,
      `${Bitch.Jessica}_${Fuckboi.Chris}`,
      `${Bitch.Paige}_${Fuckboi.Joey}`,
      `${Bitch.Ashleigh}_${Fuckboi.Chris}`,
      `${Bitch.Amber}_${Fuckboi.Ryan}`,
      `${Bitch.Coleysia}_${Fuckboi.Dillan}`,
    ],
  },
  {
    numberOfMatches: 4,
    couples: [
      `${Bitch.Jacy}_${Fuckboi.John}`,
      `${Bitch.Jessica}_${Fuckboi.Dillan}`,
      `${Bitch.Paige}_${Fuckboi.Chris}`,
      `${Bitch.Simone}_${Fuckboi.Scali}`,
      `${Bitch.Shanley}_${Fuckboi.Adam}`,
      `${Bitch.Coleysia}_${Fuckboi.Wes}`,
      `${Bitch.Amber}_${Fuckboi.Ethan}`,
      `${Bitch.Brittany}_${Fuckboi.Joey}`,
      `${Bitch.Kayla}_${Fuckboi.Ryan}`,
      `${Bitch.Ashleigh}_${Fuckboi.Dre}`,
    ],
  },
  {
    numberOfMatches: 2,
    couples: [
      `${Bitch.Coleysia}_${Fuckboi.Dillan}`, // REPEAT 1
      `${Bitch.Jessica}_${Fuckboi.John}`,
      `${Bitch.Kayla}_${Fuckboi.Ryan}`, // REPEAT 2
      `${Bitch.Amber}_${Fuckboi.Ethan}`, // REPEAT 2
      `${Bitch.Ashleigh}_${Fuckboi.Dre}`, // REPEAT 2
      `${Bitch.Simone}_${Fuckboi.Chris}`,
      `${Bitch.Brittany}_${Fuckboi.Adam}`, // REPEAT 1
      `${Bitch.Paige}_${Fuckboi.Scali}`,
      `${Bitch.Shanley}_${Fuckboi.Joey}`,
      `${Bitch.Jacy}_${Fuckboi.Wes}`,
    ],
  },
];
