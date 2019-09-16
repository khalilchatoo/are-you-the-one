export type Pair = Set<string>;
export type PairID = number;

export interface IDPair {
    id: number,
    pair: Pair
};

export type Combination = PairID[];
