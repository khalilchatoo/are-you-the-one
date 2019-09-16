import { Pair } from "./types";

enum n {
    Nour = "Nour",
    Remy = "Remy",
    Justin = "Justin",
    Amber = "Amber",
    Kari = "Kari",
    Basit = "Basit",
    Kylie = "Kylie",
    Max = "Max",
    Jonathan = "Jonathan",
    Brandon = "Brandon",
    Danny = "Danny",
    Aasha = "Aasha",
    Jenna = "Jenna",
    Kai = "Kai",
    Paige = "Paige",
    Jasmine = "Jasmine"
}

export const names: string[] = [
    n.Nour,
    n.Remy,
    n.Justin,
    n.Amber,
    n.Kari,
    n.Basit,
    n.Jasmine,
    n.Kylie,
    n.Max,
    n.Jonathan,
    n.Brandon,
    n.Danny, 
    n.Aasha,
    n.Jenna,
    n.Kai,
    n.Paige
];

export const noMatchPairs: Pair[] = [
    new Set([n.Jasmine, n.Paige]), 
    new Set([n.Kai, n.Aasha]),
    new Set([n.Kai, n.Jenna]),
    new Set([n.Jenna, n.Kylie]),
    new Set([n.Jenna, n.Danny]),
    new Set([n.Kari, n.Danny]),
    new Set([n.Remy, n.Brandon]),
    new Set([n.Max, n.Brandon]),
    new Set([n.Jonathan, n.Justin]),
    new Set([n.Kari, n.Kylie]),
    new Set([n.Remy, n.Basit]),
    new Set([n.Nour, n.Amber]),
    new Set([n.Nour, n.Justin])
];