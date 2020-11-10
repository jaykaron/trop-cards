
export const ETNAHTA = String.fromCharCode(1425);
export const SEGOL = String.fromCharCode(1426);
export const SHALSHELET = String.fromCharCode(1427);
export const ZAQEF_QATAN = String.fromCharCode(1428);
export const ZAQEF_GADOL = String.fromCharCode(1429);
export const TIPEHA = String.fromCharCode(1430);
export const REVIA = String.fromCharCode(1431);
export const ZARQA = String.fromCharCode(1432);
export const PASHTA = String.fromCharCode(1433);
export const YETIV = String.fromCharCode(1434);
export const TEVIR = String.fromCharCode(1435);
export const GERESH = String.fromCharCode(1436);

export const GERSHAYIM = String.fromCharCode(1438);
export const QARNEY_PARA = String.fromCharCode(1439);
export const TELISHA_GEDOLA = String.fromCharCode(1440);
export const PAZER = String.fromCharCode(1441);
export const ATNAH_HAFUKH = String.fromCharCode(1442);
export const MUNAH = String.fromCharCode(1443);
export const MAHAPAKH = String.fromCharCode(1444);
export const MERKHA = String.fromCharCode(1445);
export const MERKHA_KEFULA = String.fromCharCode(1446);
export const DARGA = String.fromCharCode(1447);
export const QADMA = String.fromCharCode(1448);
export const TELISHA_KETANA = String.fromCharCode(1449);
export const YERAH_BEN_YOMO = String.fromCharCode(1450);

export const STANDARD_SYMBOLS = [
  { name: "ETNAHTA", char: ETNAHTA},
  { name: "SEGOL", char: SEGOL},
  { name: "ZAQEF_QATAN", char: ZAQEF_QATAN},
  { name: "ZAQEF_GADOL", char: ZAQEF_GADOL},
  { name: "TIPEHA", char: TIPEHA},
  { name: "REVIA", char: REVIA},
  { name: "ZARQA", char: ZARQA},
  { name: "PASHTA", char: PASHTA},
  { name: "YETIV", char: YETIV},
  { name: "TEVIR", char: TEVIR},
  { name: "GERESH", char: GERESH},
  { name: "GERSHAYIM", char: GERSHAYIM},
  { name: "TELISHA_GEDOLA", char: TELISHA_GEDOLA},
  { name: "PAZER", char: PAZER},
  { name: "MUNAH", char: MUNAH},
  { name: "MAHAPAKH", char: MAHAPAKH},
  { name: "MERKHA", char: MERKHA},
  { name: "DARGA", char: DARGA},
  { name: "QADMA", char: QADMA},
  { name: "TELISHA_KETANA", char: TELISHA_KETANA},
];

export const RARE_SYMBOLS = [
  { name: "SHALSHELET", char: SHALSHELET},
  { name: "QARNEY_PARA", char: QARNEY_PARA},
  { name: "ATNAH_HAFUKH", char: ATNAH_HAFUKH},
  { name: "MERKHA_KEFULA", char: MERKHA_KEFULA},
  { name: "YERAH_BEN_YOMO", char: YERAH_BEN_YOMO}
];

export const ALL_SYMBOLS = [...STANDARD_SYMBOLS, ...RARE_SYMBOLS];