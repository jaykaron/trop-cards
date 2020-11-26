import { CompletedExample, Example} from "../trop";
import * as NAMES from "../tropNames";
import { ALL_NAMES } from "../tropNames";
import { LEV_AUDIO } from "../../audio";


export const STANDARD : Example[] = [
  { text: "אֶתְנַחְתָּ֑א", name: NAMES.ETNAHTA },
  { text: "סֶגּוֹל֒", name: NAMES.SEGOL },
  { text: "זָקֵף קָטָ֔ן", name: NAMES.ZAQEF_QATAN },
  { text: "זָקֵף גָּד֕וֹל", name: NAMES.ZAQEF_GADOL },
  { text: "טִפְחָ֖א‎", name: NAMES.TIPEHA },
  { text: "רְבִ֗יע", name: NAMES.REVIA },
  { text: "זַרְקָא֮", name: NAMES.ZARQA },
  { text: "פַּשְׁטָא֙", name: NAMES.PASHTA },
  { text: "יְ֚תִיב", name: NAMES.YETIV },
  { text: "תְּבִ֛יר", name: NAMES.TEVIR },
  { text: "פָּזֵ֡ר", name: NAMES.PAZER },
  { text: "תְּ֠לִישָא גְדוֹלָה", name: NAMES.TELISHA_GEDOLA },
  { text: "אַזְלָא-גֵּ֜רֵשׁ‎‎", name: NAMES.GERESH },
  { text: "גֵּרְשַׁ֞יִם", name: NAMES.GERSHAYIM },
  { text: "מֵרְכָ֥א", name: NAMES.MERKHA },
  { text: "מֻנַּ֣ח", name: NAMES.MUNAH },
  { text: "מַהְפַּ֤ך", name: NAMES.MAHAPAKH },
  { text: "דַּרְגָּ֧א", name: NAMES.DARGA },
  { text: "קַדְמָ֨א", name: NAMES.QADMA },
  { text: "תְּלִישָא קְטַנָּה֩", name: NAMES.TELISHA_KETANA },
].map(({ text, name }) => ({
  name,
  word: { text, name },
  trop: [],
  audio: [LEV_AUDIO[name as ALL_NAMES] as string]
}));

export const RARE : CompletedExample[] = [
  { text: "שַׁלְשֶׁ֓לֶת", name: NAMES.SHALSHELET },
  { text: "קַרְנֵי פָרָ֟ה", name: NAMES.QARNEY_PARA },
  { text: "מֵרְכָא כְּפוּלָ֦ה", name: NAMES.MERKHA_KEFULA },
  { text: "יֵרֶח בֶּן יוֹמ֪וֹ", name: NAMES.YERAH_BEN_YOMO },
]

// export const ARCHETYPES : CompletedExample[] = [
//   ...STANDARD,
//   ...RARE
// ]; 


