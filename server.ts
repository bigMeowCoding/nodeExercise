import express = require("express");
const cors = require("cors");
const app = express();
const port = 9103;
export enum PrizeType {
  GENERAL = 0,
  VIRTUAL = 1,
  RED_PACKET = 2,
  RED_PACKET_APPLET = 3,
  COUPONS = 4,
  MEMBER_POINTS = 5,
  MEMBER_BALANCE = 6,
  MEMBER_GROW_POINT = 7,
  CARD_PACKAGE = 8,
}
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.post("/mock/getForm", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: [2, 3, 4, 5, 0, 7, 8],
  });
});
app.post("/mock/myPrize", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: {
      prizeList: [
        {
          redeemWay: 1,
          prizeType: 0,
          winnerState: 0,
          coupon: {
            prize: 200,
            use: "满200可用",
            title: "200优惠券",
            date: "2000",
          },
          name: "一等奖共同系列陶瓷杯",
          introduce:
            "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
          count: 10,
          winDate: "2021",
          exchangeDate: "2022",
          remind: "当ssssssss",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1285119317,3053037696&fm=26&gp=0.jpg",
        },
        {
          redeemWay: 2,
          prizeType: 0,
          coupon: [
            { prize: 200, use: "满200可用", title: "200优惠券", date: "2000" },
            { prize: 200, use: "满200可用", title: "200优惠券", date: "2000" },
            { prize: 200, use: "满200可用", title: "200优惠券", date: "2000" },
            { prize: 200, use: "满200可用", title: "200优惠券", date: "2000" },
            { prize: 200, use: "满200可用", title: "200优惠券", date: "2000" },
            { prize: 200, use: "满200可用", title: "200优惠券", date: "2000" },
          ],
          winnerState: 0,
          name: "二等奖共同系列陶瓷杯",
          winDate: "2021",
          exchangeDate: "2022",
          remind: "当ssssssss",
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870141314,2670732159&fm=26&gp=0.jpg",
          introduce:
            "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
          count: 20,
        },
        {
          redeemWay: 4,
          remind: "当ssssssss",
          prizeType: 1,
          virtualCode: 22323,
          winnerState: 0,
          name: "二等奖共同系列陶瓷杯",
          winDate: "2021",
          exchangeDate: "2022",
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870141314,2670732159&fm=26&gp=0.jpg",
          introduce:
            "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
          count: 20,
        },
        {
          redeemWay: 4,
          remind: "当ssssssss",
          prizeType: PrizeType.MEMBER_BALANCE,
          value: "22223",
          winnerState: 0,
          name: "二等奖共同系列陶瓷杯",
          winDate: "2021",
          exchangeDate: "2022",
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870141314,2670732159&fm=26&gp=0.jpg",
          introduce:
            "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
          count: 20,
        },
      ],
    },
  });
});
app.post("/mock/legoConfig", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: [
      {
        id: "key",
        name: "Affix",
        config: {
          top: 20,
          right: 16,
          icon: "https://i.loli.net/2021/05/22/iqOZCsyLnhPXo9z.png",
        },
        events: ["skipActivityRule"],
      },
      {
        id: "key",
        name: "Affix",
        config: {
          top: 492,
          right: 16,
          icon: "https://i.loli.net/2021/05/25/GkuN1cswf3a76et.png",
        },
        events: ["addLotteryChance"],
      },
      {
        id: "key",
        name: "Affix",
        config: {
          top: 82,
          right: 16,
          icon: "https://i.loli.net/2021/05/22/drNFeXLAtMmWVJy.png",
        },
        events: ["skipMyPrize"],
      },
      {
        id: "key",
        name: "MusicPlayer",
        config: {
          top: 139,
          right: 16,
          iconPlay: "https://i.loli.net/2021/05/24/41cU9q8EDBowTW5.png",
          iconPause: "https://i.loli.net/2021/05/24/cyw5asl8MHRz7XG.png",
        },
        events: ["skipMyPrize"],
      },
      {
        id: "key",
        name: "HeaderBg",
        config: {
          marginTop: 26,
        },
        events: ["skipMyPrize"],
      },
      {
        id: "key",
        name: "AwardCarousel",
        config: {
          width: 250,
          marginTop: 10,
          icon: "https://i.loli.net/2021/05/22/drNFeXLAtMmWVJy.png",
        },
        events: [],
      },
      {
        id: "key",
        name: "Bigwheel",
        config: {
          top: 82,
          right: 16,
          icon: "https://i.loli.net/2021/05/22/drNFeXLAtMmWVJy.png",
        },
        events: ["beforeStartBigwheel", "startBigwheel", "endBigwheel"],
      },
      {
        id: "key",
        name: "PromotionText",
        config: {
          textLeft: "你还有", // 文本左
          textRight: "次机会", // 文本右
          color: "255, 255, 255, 1", // 颜色
          numberFontSize: 16, // 剩余次数字体大小
          fontSize: 14, // 字体大小
          backgroundColor: "0, 0, 0, 0.2",
          fontWeight: "normal", // 字体加粗
          borderRadius: 30, // 圆角大小
        },
        events: ["restLotteryChance", "getChanceSubject"],
      },
    ],
  });
});

app.post("/mock/activityRule", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: {
      prize: [
        {
          name: "一等奖共同系列陶瓷杯",
          introduce:
            "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
          count: 10,
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1285119317,3053037696&fm=26&gp=0.jpg",
        },
        {
          name: "二等奖共同系列陶瓷杯",
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870141314,2670732159&fm=26&gp=0.jpg",
          introduce:
            "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
          count: 20,
        },
      ],
      time: "2012-33-44",
      store: ["stor1"],
      introduce:
        "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
    },
  });
});
app.post("/mock/themeConfig", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: {
      music:
        "https://c.weimobwmc.com/activity/df5163e4410f4f899212636d6b0e31d8.mp3",
      headerBg: "https://i.loli.net/2021/05/24/UFgwoGtVJ2n3T9d.png",
      mainBg: "https://i.loli.net/2021/05/24/6TxQFrZOX2KtP59.png",
      NeutralColor_grey9: "rgba(0,0,0,.2)",
      NeutralColor_grey1: "#333",
      NeutralColor_grey2: "#666",
      NeutralColor_grey3: "#999",
      NeutralColor_grey4: "#ccc",
      NeutralColor_grey5: "e5e5e5",
      NeutralColor_grey6: "#f7f7f7",
      NeutralColor_grey7: "#f5f5f5",
      NeutralColor_grey8: "fff",
    },
  });
});
app.post("/mock/getChance", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: {
      count: 122,
    },
  });
});

app.post("/report/link/findTsoTicket", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: {
      pid: 1,
      wid: 22,
      tsoTicketTag: 1,
      tsoTicket: 1_1_1_1_1,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log("serve open");
