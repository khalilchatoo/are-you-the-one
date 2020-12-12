export enum Bitch {
  Shanley = "Shanley", // mean brunette
  Paige = "Paige", // blonde southern with nice tits
  Kayla = "Kayla", // popular romantic
  Amber = "Amber", // the one julia doesnt like
  Jessica = "Jessica", // pretty face ugly shorts
  Brittany = "Brittany", // crazy hot and crazy
  Jacy = "Jacy", // needs toner
  Coleysia = "Coleysia", // good friend
  Simone = "Simone", // will tell you to shut up
  Ashleigh = "Ashleigh", // the girl with no screen time
}

export const bitches: Bitch[] = [
  Bitch.Shanley,
  Bitch.Paige,
  Bitch.Kayla,
  Bitch.Amber,
  Bitch.Jessica,
  Bitch.Brittany,
  Bitch.Jacy,
  Bitch.Ashleigh,
  Bitch.Simone,
  Bitch.Coleysia,
];

export enum Fuckboi {
  Adam = "Adam", // insecure fuckboi
  Scali = "Scali", // blue eyes brooklyn
  Dre = "Dre", // big dick
  Ryan = "Ryan", // jaw line
  Ethan = "Ethan", // pretty boy face
  Dillan = "Dillan", // slim shady
  Chris = "Chris", // ugly douche tattoo
  John = "John", // fucking goof
  Wes = "Wes", // friendzone
  Joey = "Joey", // the guy with no screen time
}

export const fuckbois: Fuckboi[] = [
  Fuckboi.Adam,
  Fuckboi.Scali,
  Fuckboi.Dre,
  Fuckboi.Ryan,
  Fuckboi.Ethan,
  Fuckboi.Dillan,
  Fuckboi.Chris,
  Fuckboi.John,
  Fuckboi.Wes,
  Fuckboi.Joey,
];

export interface Couple {
  bitch: Bitch;
  fuckboi: Fuckboi;
}

export interface Ceremony {
  numberOfMatches: number;
  couples: string[];
}
