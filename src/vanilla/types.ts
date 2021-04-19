export enum Bitch {
  Jasmine = "Jasmine",
  Jenni = "Jenni", // small town MN
  Tyler = "Tyler",
  Jessica = "Jessica", // make up face
  Paris = "Paris",
  Briana = "Briana", // broken nose
  Ellie = "Ellie", // will tell you to shut up
  Alexandria = "Alexandria", // forgotten azn gurl
  Ashley = "Ashley", // no view time
  Christina = "Christina", // ruined the algo
  Shelby = "Shelby", // whomst
}

export const bitchesWithoutChristina: Bitch[] = [
  Bitch.Jasmine,
  Bitch.Jenni,
  Bitch.Tyler,
  Bitch.Jessica,
  Bitch.Paris,
  Bitch.Briana,
  Bitch.Alexandria,
  Bitch.Ellie,
  Bitch.Ashley,
  Bitch.Shelby,
];

export enum Fuckboi {
  Brandon = "Brandon", // vegas skinny fucc boi
  Alex = "Alex",
  Layton = "Layton", // smol town big boi
  Anthony = "Anthony", // Parker
  TylerPratt = "TylerPratt", // goofy sci fi nerd
  Curtis = "Curtis",
  John = "John", // broke bri's nose
  Garland = "Garland", // friendzone
  Dario = "Dario", // no view time
  Nathan = "Nathan", // smol tattoo'd dude
}

export const fuckbois: Fuckboi[] = [
  Fuckboi.Brandon,
  Fuckboi.Alex,
  Fuckboi.Layton,
  Fuckboi.Anthony,
  Fuckboi.TylerPratt,
  Fuckboi.Curtis,
  Fuckboi.John,
  Fuckboi.Garland,
  Fuckboi.Dario,
  Fuckboi.Nathan,
];

export interface Couple {
  bitch: Bitch;
  fuckboi: Fuckboi;
}

export interface Ceremony {
  numberOfMatches: number;
  couples: string[];
}
