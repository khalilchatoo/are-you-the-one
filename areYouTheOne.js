//import { eqSet } from './eqSet';

const names = ["Nour", "Remy", "Justin", "Amber", "Kari", "Basit", "Jasmine", "Kylie", "Max", "Jonathan", "Brandon", "Danny", "Aasha", "Jenna", "Kai", "Paige"];

const namesForPairs = [...names];
const butt = [...names];
const pairs = [];
const pairsMap = {};
const setToIdMap = {};
const combinations = [];
let count = 0;

const noMatch = [
  new Set(["Jasmine","Paige"]), 
  new Set(["Kai","Aasha"]),
  new Set(["Kai","Jenna"]),
  new Set(["Jenna","Kylie"]),
  new Set(["Jenna","Danny"]),
  new Set(["Kari","Danny"]),
  new Set(["Remy","Brandon"]),
  new Set(["Max","Brandon"]),
  new Set(["Jonathan","Justin"]),
  new Set(["Kari","Kylie"]),
  new Set(["Remy","Basit"]),
  new Set(["Nour","Amber"]),
  new Set(["Nour","Justin"])
];

const generatePairs = () => {
  while (namesForPairs.length) {
    const second = namesForPairs.pop();
    namesForPairs.forEach((val) => {
      const pair = new Set();
      pair.add(val);
      pair.add(second);
      pairs.push({ id: count, pair });
      pairsMap[count] = pair;
      setToIdMap[generateSetString(pair)] = count;
      count++;
    })
  }
}

const noMatchIds = noMatch.map((noMatchPair) => {
  let noMatchId;
  pairs.forEach(({ pair, id }) => {
    if (eqSet(noMatchPair, pair)) {
      noMatchId = id;
      return;
    }
  });
  return noMatchId;
})

const generateSetString = (set) => [...set].sort().join();

const generateCombs = (unpairedNames, builtPairs) => {
  if (!unpairedNames.length) {
    console.log(builtPairs);
    combinations.push(builtPairs);
    return;
  }
  const n = unpairedNames.pop();
  unpairedNames.forEach((val) => {
    const copy = [...unpairedNames];
    const set = new Set();
    set.add(n);
    set.add(val);
    copy.splice(copy.indexOf(val), 1);
    builtPairs.push(set);
    const setString = generateSetString(set);
    const setId = setToIdMap[setString];
    if (!noMatchIds.includes(setId)) generateCombs(copy,builtPairs);
  })
}

generatePairs();
generateCombs(butt,[]);
// console.log(pairs);

function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}