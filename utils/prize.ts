import { PrizeType, RedeemWay, WinnerState } from "../typing";
import { getRandomInt } from "./utils";
import dayjs = require("dayjs");

export function makePrizeList(count: number) {
  return Array.from(new Array(count)).map((item, index) => {
    return makePrize({ title: "奖品" + index });
  });
}

export function randomWinnerState() {
  return randomEnum(WinnerState);
}
export function randomRedeemWay() {
  return randomEnum(RedeemWay);
}
export function randomPrizeType() {
  return randomEnum(PrizeType);
}
// export function randomEnum(enumValue) {
//   const rand = Math.floor(Math.random() * Object.keys(enumValue).length);
//   return enumValue[Object.keys(enumValue)[rand]];
// }
export function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.keys(anEnum)
    .map((n) => Number.parseInt(n))
    .filter((n) => !Number.isNaN(n)) as unknown) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
}
export function makeCoupon() {
  return Array.from(new Array(getRandomInt(1, 10))).map((i, index) => {
    return {
      prize: 200,
      use: "满200可用",
      title: "优惠券" + index,
      date: "2000",
    };
  });
}

export function makeRedPack() {
  const r = Math.random();
  if (r > 0.5) {
    return Array.from(new Array(getRandomInt(1, 10))).map((i, index) => {
      return {
        prize: 200,
        use: "满200可用",
        title: "优惠券" + index,
        date: "2000",
      };
    });
  } else {
    return null;
  }
}
export function isRedPackPrize(prizeType: PrizeType): boolean {
  return (
    prizeType === PrizeType.RED_PACKET ||
    prizeType === PrizeType.RED_PACKET_APPLET
  );
}
export function isMemberPrize(prizeType: PrizeType): boolean {
  const type = prizeType;
  return (
    type === PrizeType.MEMBER_BALANCE ||
    type === PrizeType.MEMBER_POINTS ||
    type === PrizeType.MEMBER_GROW_POINT
  );
}
export function makePrize({ title }) {
  const type = randomPrizeType();
  const winEnd = dayjs().add(getRandomInt(1, 10), "day");
  return {
    redeemWay: randomRedeemWay(),
    prizeType: type,
    winnerState: randomWinnerState(),
    snCode: getRandomInt(1, 100),
    coupon: type === PrizeType.COUPONS ? makeCoupon() : null,
    prizeName: "一等奖共同系列陶瓷杯",
    prizeComment:
      "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
    count: 10,
    prizeId: Math.random(),
    winnerValidityStartTime: winEnd.subtract(getRandomInt(1, 3), "day"),
    winnerValidityEndTime: winEnd.toString(),
    winTime: winEnd.subtract(1, "day"),
    exchangeDate: "2022",
    operationPrompt: "当ssssssss",
    value:
      isRedPackPrize(type) || isMemberPrize(type) ? getRandomInt(1, 100) : null,
    photo: randomPrizeImg(),
  };
}
function randomPrizeImg() {
  return [
    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1285119317,3053037696&fm=26&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870141314,2670732159&fm=26&gp=0.jpg",
  ][getRandomInt(1, 2) - 1];
}
