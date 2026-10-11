export const bn = (n) => Number(n).toLocaleString("bn-BD");
export const taka = (n) => `${bn(n)} টাকা`;

const UNITS = {
  kg: "কেজি", liter: "লিটার", litre: "লিটার", l: "লিটার",
  dozen: "ডজন", piece: "পিস", pcs: "পিস", pc: "পিস", halee: "হালি", hali: "হালি",
};
export const unitName = (u) => UNITS[String(u).toLowerCase()] || u;
export const unitText = (u) => `প্রতি ${unitName(u)}`;
