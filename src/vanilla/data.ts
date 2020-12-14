import { Bitch, Fuckboi, Couple, Ceremony } from "./types";

export const noMatchPairs: string[] = [
  `${Bitch.Shanley}_${Fuckboi.Chris}`,
  `${Bitch.Jessica}_${Fuckboi.Ethan}`,
  `${Bitch.Simone}_${Fuckboi.John}`,
  `${Bitch.Jessica}_${Fuckboi.Dillan}`,
  `${Bitch.Jessica}_${Fuckboi.Dillan}`,
  `${Bitch.Ashleigh}_${Fuckboi.Dre}`,
];

export const perfectMatches: string[] = [
  `${Bitch.Coleysia}_${Fuckboi.Dillan}`,
  `${Bitch.Paige}_${Fuckboi.Chris}`,
];

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
  {
    numberOfMatches: 2, // prediction is 3 maybe 4
    couples: [
      `${Bitch.Coleysia}_${Fuckboi.Dillan}`, // REPEAT   maybe
      `${Bitch.Paige}_${Fuckboi.Scali}`, // REPEAT   good chance
      `${Bitch.Jessica}_${Fuckboi.Wes}`, // YESYESYES
      `${Bitch.Simone}_${Fuckboi.Dre}`, // good chance
      `${Bitch.Brittany}_${Fuckboi.Ryan}`, // no
      `${Bitch.Kayla}_${Fuckboi.Ethan}`, // probs not
      `${Bitch.Amber}_${Fuckboi.Adam}`, // probs not
      `${Bitch.Ashleigh}_${Fuckboi.Chris}`, // REPEAT  no idea
      `${Bitch.Shanley}_${Fuckboi.John}`, // no
      `${Bitch.Jacy}_${Fuckboi.Joey}`, // no idea
    ],
  },
  {
    numberOfMatches: 5,
    couples: [
      `${Bitch.Coleysia}_${Fuckboi.Dillan}`, // yes
      `${Bitch.Amber}_${Fuckboi.Ethan}`, // no
      `${Bitch.Jessica}_${Fuckboi.Joey}`, // no
      `${Bitch.Kayla}_${Fuckboi.Wes}`, // no
      `${Bitch.Jacy}_${Fuckboi.John}`, // yes
      `${Bitch.Simone}_${Fuckboi.Scali}`, // yes
      `${Bitch.Shanley}_${Fuckboi.Adam}`, // yes
      `${Bitch.Paige}_${Fuckboi.Chris}`, // no
      `${Bitch.Brittany}_${Fuckboi.Dre}`, // yes
      `${Bitch.Ashleigh}_${Fuckboi.Ryan}`, // no
    ],
  },
  {
    numberOfMatches: 5,
    couples: [
      `${Bitch.Jacy}_${Fuckboi.John}`,
      `${Bitch.Kayla}_${Fuckboi.Wes}`,
      `${Bitch.Shanley}_${Fuckboi.Dre}`, // lol no
      `${Bitch.Brittany}_${Fuckboi.Scali}`, // lol no
      `${Bitch.Ashleigh}_${Fuckboi.Adam}`,
      `${Bitch.Simone}_${Fuckboi.Joey}`, // no
      `${Bitch.Jessica}_${Fuckboi.Ryan}`,
      `${Bitch.Amber}_${Fuckboi.Ethan}`,
      `${Bitch.Coleysia}_${Fuckboi.Dillan}`,
      `${Bitch.Paige}_${Fuckboi.Chris}`,
    ],
  },
];

//ALYSSAS FINAL PREDICTION:
// Shanley_Adam,	Paige_Joey,	Kayla_Ryan,	Amber_Chris,	Jessica_Wes,	Brittany_Dre,	Jacy_John,	Ashleigh_Ethan,	Simone_Scali,	Coleysia_Dillan

/// SECOND PREDICTION:
// Shanley_Adam,	Paige_Chris,	Kayla_Wes,	Amber_Ethan,	Jessica_Ryan,	Brittany_Joey,	Jacy_Scali,	Ashleigh_John,	Simone_Dre,	Coleysia_Dillan
