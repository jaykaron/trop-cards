
import { isHebrewLetter } from "./utils";

export interface Word {
  name: string;
  text: string;
}

export const WORDS : Word[] = [
  {
    name: "bara",
    text: "בָּרָא"
  }
]

export interface PlacedTrop {
  spot: number;
  char: string;
}

export interface Example {
  name: string;
  word: Word;
  trop: PlacedTrop[],
}
export interface CompletedExample {
  text: string;
  name: string;
}

export const exampleToString = (example: Example) : string => {
  let text = example.word.text;
  return example.trop
    .reduce((word, { char, spot }) => applyTropToWord(char, word, spot), text);
};

export function applyTropToWord(trop: string, word: string, letterIndex: number) : string {
  let currentLetterIndex = -1;
  return Array.from(word)
    .reduce((acc, char) => {
      acc += char;
      if (isHebrewLetter(char)) {
        currentLetterIndex += 1;
        if (currentLetterIndex === letterIndex){
          acc += trop;
        }
      }
      return acc;
    }, "");
}