import { ALEF_CHAR_CODE, TAV_CHAR_CODE } from "./constants";

export function isHebrewLetter(char: string) : boolean
{
  if (char.length > 1)
  {
    throw new Error("char must be of length 1");
  }
  const charCode = char.charCodeAt(0);
  return ALEF_CHAR_CODE <= charCode && charCode <= TAV_CHAR_CODE;
}

export function randInt(upper: number, lower = 0)
{
  return Math.floor(Math.random() * upper - lower) + lower;
}