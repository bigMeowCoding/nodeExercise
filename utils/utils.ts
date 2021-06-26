import {
  MAX_ELEMENT_GAP,
  MAX_MONTH_SPAN,
  MAX_NUM_OF_SUBTRACKS,
  MIN_MONTH_SPAN,
  NUM_OF_MONTHS,
  START_YEAR,
} from "./config";
import { daysInMonth, randomTitle } from "./random-title";

export const fill = (n) => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }
  return arr;
};
const COLORS = [
  "FF005D",
  "0085B6",
  "0BB4C1",
  "00D49D",
  "FEDF03",
  "233D4D",
  "FE7F2D",
  "FCCA46",
  "A1C181",
  "579C87",
];
export const colourIsLight = (r, g, b) => {
  const a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return a < 0.5;
};
export const hexToRgb: (hex: string) => [number, number, number] = (hex) => {
  const v = parseInt(hex, 16);
  const r = (v >> 16) & 255;
  const g = (v >> 8) & 255;
  const b = v & 255;
  return [r, g, b];
};
export const randomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];

let color = -1;
export const nextColor = () => {
  color = (color + 1) % COLORS.length;
  return COLORS[color];
};
export const buildElementGap = () =>
  Math.floor(Math.random() * MAX_ELEMENT_GAP);
export const buildElement = ({ trackId, start, end, i }) => {
  const bgColor = nextColor();
  const color = colourIsLight(...hexToRgb(bgColor)) ? "#000000" : "#ffffff";
  return {
    id: `t-${trackId}-el-${i}`,
    title: randomTitle(),
    start,
    end,
    style: {
      backgroundColor: `#${bgColor}`,
      color,
      textTransform: "capitalize",
    },
  };
};
export const buildDaysElements = (trackId) => {
  const v = [];
  let i = 1;
  let month = Math.random() < 0.5 ? 1 : 2;

  // while (month < NUM_OF_MONTHS) {
  // let monthSpan =
  //   Math.floor(Math.random() * (MAX_MONTH_SPAN - (MIN_MONTH_SPAN - 1))) +
  //   MIN_MONTH_SPAN;
  //
  // if (month + monthSpan > NUM_OF_MONTHS) {
  //   monthSpan = NUM_OF_MONTHS - month;
  // }
  const dayStart = getRandomInt(1, daysInMonth(month, START_YEAR) - 1);
  const dayEnd = getRandomInt(dayStart, daysInMonth(month, START_YEAR));
  const start = new Date(`${START_YEAR}-${month}-${dayStart}`);
  const end = new Date(`${START_YEAR}-${month}-${dayEnd}`);
  v.push(
    buildElement({
      trackId,
      start,
      end,
      i,
    })
  );
  // const gap = buildElementGap();
  // month += monthSpan + gap;
  i += 1;
  // }

  return v;
};
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max - min) + min); //不含最大值，含最小值
}
