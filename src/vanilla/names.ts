import { Pair, Combination } from "./types";
import { generatePairString } from "./helpers";
import { generatePairs } from "./generatePairs";

export enum Bitch {
    Shanley = 'Shanley', // mean brunette 
    Paige = 'Paige', // blonde southern with nice tits
    Kayla = 'Kayla', // popular romantic
    Amber = 'Amber', // the one julia doesnt like 
    Jessica = 'Jessica', // pretty face ugly shorts
    Brittany = 'Brittany', // crazy hot and crazy
    Jacy = 'Jacy', // needs toner 
    Ashleigh = 'Ashleigh', // good friend
    Coleysia = 'Coleysia', // the girl with no screen time
    Simone = 'Simone', // will tell you to shut up
}

export enum Fuckboi {
    Adam = 'Adam', // insecure fuckboi 
    Scali = 'Scali', // blue eyes brooklyn
    Dre = 'Dre', // big dick
    Ryan = 'Ryan', // jaw line
    Ethan = 'Ethan', // pretty boy face
    Dillan = 'Dillan', // slim shady
    Chris = 'Chris', // ugly douche tattoo
    John = 'John', // fucking goof
    Joey = 'Joey', // the guy with no screen time
    Wes = 'Wes', // friendzone
}

export const noMatchPairs: {bitch: Bitch, fuckBoi: Fuckboi}[] = [
    {
        bitch: Bitch.Shanley,
        fuckBoi: Fuckboi.Chris
    }
];

export const perfectMatches: Pair[] = [

];