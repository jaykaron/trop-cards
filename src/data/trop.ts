
import { ALL_SYMBOLS, PASHTA, PAZER } from "./tropSymbols";

interface Word {
  name: string;
  text: string;
  possibleTropLocations: number[];
}

export const WORDS : Word[] = [
  {
    name: "bara",
    text: "בָּרָא",
    possibleTropLocations: [3, 5, 6]
  }
]

interface PlacedTrop {
  spot: number;
  char: string;
}

interface Example {
  name: string;
  word: Word;
  trop: PlacedTrop[]
}

export const EXAMPLES: Example[] = [
  {
    name: "Bara Pashta 1",
    word: WORDS[0],
    trop: [{ spot: 0, char: PASHTA  }, { spot: 2, char: PASHTA }]
  },
  {
    name: "Bara Pashta 2",
    word: WORDS[0],
    trop: [{ spot: 2, char: PASHTA }]
  },
  {
    name: "Bara Pazer 1",
    word: WORDS[0],
    trop: [{ spot: 0, char: PAZER }]
  },
  {
    name: "Bara Pazer 2",
    word: WORDS[0],
    trop: [{ spot: 1, char: PAZER }]
  },
];

let ALL_BARA : Example[] = [];
ALL_SYMBOLS.forEach(({name, char}, i) => {
  ALL_BARA.push({
    name: `${name} 1`,
    word: WORDS[0],
    trop: [{ spot: 0, char }]
  });
  ALL_BARA.push({
    name: `${name} 2`,
    word: WORDS[0],
    trop: [{ spot: 1, char }]
  });
});
export { ALL_BARA };

export const exampleToString = (example: Example) : string => {
  let text = example.word.text;
  [...example.trop].reverse().forEach((trop) => {
    const tropIndex = example.word.possibleTropLocations[trop.spot];
    const firstHalf = text.slice(0, tropIndex);
    const secondHalf = text.slice(tropIndex);

    text = `${firstHalf}${trop.char}${secondHalf}`;
  });
  return text;
};

