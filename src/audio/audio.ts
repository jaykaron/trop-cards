import { ALL_NAMES } from "../data/tropNames";

const AUDIO : { [key in ALL_NAMES]?: string } = {
  REVIA: require("./REVIA.mp3").default
};

export const LEV_AUDIO : { [key in ALL_NAMES]?: string } = {
  ZARQA: require("./lev/ZARQA.m4a").default,
  DARGA: require("./lev/DARGA.m4a").default,
  ETNAHTA: require("./lev/ETNAHTA.m4a").default,
  GERESH: require("./lev/GERESH.m4a").default,
  GERSHAYIM: require("./lev/GERSHAYIM.m4a").default,
  MAHAPAKH: require("./lev/MAHAPAKH.m4a").default,
  MERKHA: require("./lev/MERKHA_TIPECHA.m4a").default,
  MUNAH: require("./lev/MUNAH.m4a").default,
  PASHTA: require("./lev/PASHTA.m4a").default,
  PAZER: require("./lev/PAZER.m4a").default,
  // QADMA_AZLA: require("./lev/QADMA_AZLA.m4a").default,
  REVIA: require("./lev/REVIA.m4a").default,
  SEGOL: require("./lev/SEGOL.m4a").default,
  // SOF_PASUK: require("./lev/SOF_PASUK.m4a").default,
  TELISHA_GEDOLA: require("./lev/TELISHA_GEDOLA.m4a").default,
  TELISHA_KETANA: require("./lev/TELISHA_KETANA.m4a").default,
  TEVIR: require("./lev/TEVIR.m4a").default,
  TIPEHA: require("./lev/TIPEHA.m4a").default,
  YETIV: require("./lev/YETIV.m4a").default,
  ZAQEF_GADOL: require("./lev/ZAQEF_GADOL.m4a").default,
  ZAQEF_QATAN: require("./lev/ZAQEF_QATAN.m4a").default,
};

export default AUDIO;