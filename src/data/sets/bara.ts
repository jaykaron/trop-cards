import { STANDARD_SYMBOLS } from "../tropSymbols";
import { Example, WORDS } from "../trop";

let ALL_BARA: Example[] = [];
STANDARD_SYMBOLS.forEach(({ name, char }, i) => {
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