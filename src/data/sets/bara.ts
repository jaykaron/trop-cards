import { STANDARD_SYMBOLS } from "../tropSymbols";
import { Example, WORDS } from "../trop";
import AUDIO from "../../audio";

let ALL_BARA: Example[] = [];
STANDARD_SYMBOLS.forEach((s, i) => {
  let audio : string[] = [];
  if (AUDIO[s.name] !== undefined) {
    // @ts-ignore
    audio = [AUDIO[s.name]];
  }

  ALL_BARA.push({
    name: `${s.name} 1`,
    word: WORDS[0],
    trop: [{ spot: 0, symbol: s }],
    audio
  });
  ALL_BARA.push({
    name: `${s.name} 2`,
    word: WORDS[0],
    trop: [{ spot: 1, symbol: s }],
    audio
  });
});
export default ALL_BARA;