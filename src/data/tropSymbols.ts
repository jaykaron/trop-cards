import * as NAMES from "./tropNames";

const ETNAHTA = String.fromCharCode(1425);
const SEGOL = String.fromCharCode(1426);
const SHALSHELET = String.fromCharCode(1427);
const ZAQEF_QATAN = String.fromCharCode(1428);
const ZAQEF_GADOL = String.fromCharCode(1429);
const TIPEHA = String.fromCharCode(1430);
const REVIA = String.fromCharCode(1431);
const ZARQA = String.fromCharCode(1432);
const PASHTA = String.fromCharCode(1433);
const YETIV = String.fromCharCode(1434);
const TEVIR = String.fromCharCode(1435);
const GERESH = String.fromCharCode(1436);

const GERSHAYIM = String.fromCharCode(1438);
const QARNEY_PARA = String.fromCharCode(1439);
const TELISHA_GEDOLA = String.fromCharCode(1440);
const PAZER = String.fromCharCode(1441);
const ATNAH_HAFUKH = String.fromCharCode(1442);
const MUNAH = String.fromCharCode(1443);
const MAHAPAKH = String.fromCharCode(1444);
const MERKHA = String.fromCharCode(1445);
const MERKHA_KEFULA = String.fromCharCode(1446);
const DARGA = String.fromCharCode(1447);
const QADMA = String.fromCharCode(1448);
const TELISHA_KETANA = String.fromCharCode(1449);
const YERAH_BEN_YOMO = String.fromCharCode(1450);

export interface Symbol {
  name: NAMES.ALL_NAMES;
  char: string;
}

export const STANDARD_SYMBOLS : Symbol[] = [
  { name: NAMES.ETNAHTA, char: ETNAHTA},
  { name: NAMES.SEGOL, char: SEGOL},
  { name: NAMES.ZAQEF_QATAN, char: ZAQEF_QATAN},
  { name: NAMES.ZAQEF_GADOL, char: ZAQEF_GADOL},
  { name: NAMES.TIPEHA, char: TIPEHA},
  { name: NAMES.REVIA, char: REVIA},
  { name: NAMES.ZARQA, char: ZARQA},
  { name: NAMES.PASHTA, char: PASHTA},
  { name: NAMES.YETIV, char: YETIV},
  { name: NAMES.TEVIR, char: TEVIR},
  { name: NAMES.GERESH, char: GERESH},
  { name: NAMES.GERSHAYIM, char: GERSHAYIM},
  { name: NAMES.TELISHA_GEDOLA, char: TELISHA_GEDOLA},
  { name: NAMES.PAZER, char: PAZER},
  { name: NAMES.MUNAH, char: MUNAH},
  { name: NAMES.MAHAPAKH, char: MAHAPAKH},
  { name: NAMES.MERKHA, char: MERKHA},
  { name: NAMES.DARGA, char: DARGA},
  { name: NAMES.QADMA, char: QADMA},
  { name: NAMES.TELISHA_KETANA, char: TELISHA_KETANA},
];

export const RARE_SYMBOLS : Symbol[] = [
  { name: NAMES.SHALSHELET, char: SHALSHELET},
  { name: NAMES.QARNEY_PARA, char: QARNEY_PARA},
  { name: NAMES.ATNAH_HAFUKH, char: ATNAH_HAFUKH},
  { name: NAMES.MERKHA_KEFULA, char: MERKHA_KEFULA},
  { name: NAMES.YERAH_BEN_YOMO, char: YERAH_BEN_YOMO}
];

export const ALL_SYMBOLS : Symbol[] = [...STANDARD_SYMBOLS, ...RARE_SYMBOLS];