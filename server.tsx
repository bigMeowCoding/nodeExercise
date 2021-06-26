import express = require("express");
import { makePrizeList } from "./utils/prize";
const cors = require("cors");
const app = express();
const port = 9103;
import Home from "./components/home";
import { renderToString } from "react-dom/server";
const content = renderToString(<Home />);

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
    data: [0, 1, 2, 4, 5, 3, 8],
  });
});
app.get("/server", (req, res) => {
  res.send(
    `
    <html>
      <head> 
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
   `
  );
});

app.post("/mock/getForm", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: [0, 1, 2, 4, 5, 3, 8],
  });
});
app.post("/mock/myPrize", (req, res) => {
  // throw new Error('ss')
  setTimeout(() => {
    res.send({
      code: {
        errcode: "0",
      },
      errcode: "0",
      errmsg: "处理成功",
      globalTicket: "",
      monitorTrackId: "",
      data: {
        prizeList: makePrizeList(100),
      },
    });
  }, 100000);
});
app.post("/mock/legoConfig", (req, res) => {
  let data;
  if (req.body.type === "home") {
    data = [
      {
        id: "key1",
        name: "Affix",
        config: {
          top: 20,
          right: 16,
          icon: "https://i.loli.net/2021/05/22/iqOZCsyLnhPXo9z.png",
        },
        events: ["skipActivityRule"],
      },
      {
        id: "key2",
        name: "Affix",
        config: {
          top: 480,
          right: 16,
          icon: "https://i.loli.net/2021/05/25/GkuN1cswf3a76et.png",
        },
        events: ["openLotteryChanceSheet"],
      },
      {
        id: "key3",
        name: "Affix",
        config: {
          top: 82,
          right: 16,
          icon: "https://i.loli.net/2021/05/22/drNFeXLAtMmWVJy.png",
        },
        events: ["skipMyPrize"],
      },
      {
        id: "key4",
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
        id: "key5",
        name: "HeaderBg",
        config: {
          marginTop: 26,
        },
        events: [],
      },
      {
        id: "key6",
        name: "AwardCarousel",
        config: {
          // width: 250,
          marginTop: 10,
          // icon: "https://i.loli.net/2021/05/22/drNFeXLAtMmWVJy.png",
        },
        events: [],
      },
      {
        id: "key7",
        name: "Bigwheel",
        config: {
          top: 82,
          right: 16,
          icon: "https://i.loli.net/2021/05/22/drNFeXLAtMmWVJy.png",
        },
        events: [
          "beforeStartBigwheel",
          "startBigwheel",
          "endBigwheel",
          "getActivityMaterial",
          "onCompleteHandle",
        ],
      },
      {
        id: "key8",
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
        events: ["getCurrentChanceSubject"],
      },
      {
        id: "key9",
        name: "ChanceActionSheet",
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
        events: ["creditExchange"],
      },
      {
        id: "key10",
        name: "Poster",
        config: {
          marginTop: "13",
        },
        events: ["creditExchange"],
      },
      {
        id: "key11",
        name: "PrizeDialog",
        config: {
          win: "https://i.loli.net/2021/05/27/LYouOn8ckyH1MCX.png",
          fail: "https://i.loli.net/2021/05/27/Tmps2DiWc7ZbI19.png",
        },
        events: ["creditExchange"],
      },
      {
        id: "key12",
        name: "Alert",
        config: {},
        events: [],
      },
      {
        id: "key13",
        name: "PrizeCodeActionSheet",
        config: {},
        events: ["exchangeCode"],
      },
      {
        id: "key14",
        name: "ExchangeInfoActionSheet",
        config: {},
        events: ["perfectInfo"],
      },
      {
        id: "key15",
        name: "DeliveryAddressActionSheet",
        config: {},
        events: ["perfectDeliveryAddress"],
      },
    ];
  } else {
    data = [
      {
        id: "key1",
        name: "RulePrizeBanner",
        config: {
          noPrizeBg: "https://i.loli.net/2021/06/05/D4jK69QBerFdWiE.png",
          memberShipBg: "https://i.loli.net/2021/06/04/jcFOMHBfbCUsxqV.png",
        },
        events: ["skipActivityRule"],
      },
      {
        id: "key2",
        name: "StoreActionSheet",
        config: {
          noPrizeBg: "https://i.loli.net/2021/06/05/D4jK69QBerFdWiE.png",
          memberShipBg: "https://i.loli.net/2021/06/04/jcFOMHBfbCUsxqV.png",
        },
        events: ["getStoreList"],
      },
    ];
  }
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data,
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
        {
          name: "二等奖共同系列陶瓷杯",
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870141314,2670732159&fm=26&gp=0.jpg",
          introduce:
            "当奖品类型为优惠券-券包时：展示优惠券列表填写字段按照商家勾选字段进行填写，点击地址打开地址选",
          count: 20,
        },
      ],
      activityTimeStart: "2012-11-15 11:12:2",
      activityTimeEnd: "2012-12-14 10:2:3",
      store: Array.from(new Array(100)).map((item, index) => {
        return {
          name: "store" + index,
          address: "address" + index,
        };
      }),
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
      page: {
        drawerTop: "https://i.loli.net/2021/05/26/ayJeiu6LPKYtGh9.png",
        drawerClose: "https://i.loli.net/2021/05/26/vpFJgYnT61hzor2.png",
        backgroundImage: "https://i.loli.net/2021/05/24/6TxQFrZOX2KtP59.png",
        posterImage: "https://i.loli.net/2021/05/26/DH1ASptfZgdyocG.png",
        musicOn: true,
        headerBg: "https://i.loli.net/2021/05/24/UFgwoGtVJ2n3T9d.png",
        pic_homepage_horseracelamp:
          "https://i.loli.net/2021/05/27/JAE1XY3DGaBMmsn.png",
        music:
          "https://c.weimobwmc.com/activity/df5163e4410f4f899212636d6b0e31d8.mp3",
      },
      color: {
        ThemeColor_Color1: "255,108,0,1", // 活动主题色
        ThemeColor_Color2: "255, 108, 0, 0.05", // 用于优惠券背景、获取机会弹窗背景、标签背景
        ThemeColor_Color3: "255,241,230, 1", // 用于奖品状态标签颜色
        ThemeColor_Color4: "255,255,255, 1", // 用于主题的按钮的颜色
        NeutralColor_Grey1: "51,51,51,1", // 重要文字
        NeutralColor_Grey2: "102,102,102,1", // 描述文字
        NeutralColor_Grey3: "153,153,153,1", // 次要描述文字
        NeutralColor_Grey4: "204,204,204", // 表单未填写下的默认提示文字
        NeutralColor_Grey5: "204,204,204", // 禁用按钮文字
        NeutralColor_Grey6: "245,245,245", // 禁用按钮按钮
        NeutralColor_Grey7: "0,0,0, .05", // 分割线
        NeutralColor_Grey8: "255,255,255, 1", // 按钮文字/卡片背景
        NeutralColor_Grey9: "0, 0, 0, 0.8", // 普通遮罩背景色
        NeutralColor_Grey10: "0, 0, 0, 0.9", // 奖品弹窗遮罩背景色
        NeutralColor_Grey11: "242,242,242,1", // 背景色
        NeutralColor_Grey12: "248,248,248,1", // 背景色
      },
      icon: {
        icon_explain_applicablestores:
          "https://i.loli.net/2021/06/05/4IPYp1HDAMXS2W3.png", // 活动规则_适用门店
        icon_explain_activitytime:
          "https://i.loli.net/2021/06/05/SHgZOw3KEatPsbl.png", // 活动规则_活动时间
        icon_explain_activityprizes:
          "https://i.loli.net/2021/06/05/ZTqYHvSApkexJaC.png", // 活动规则_活动奖品
        icon_explain_acticitydescription:
          "https://i.loli.net/2021/06/05/hZ87mWbCzJOeXv6.png", // 活动规则_活动介绍
        icon_explain_countdown:
          "https://i.loli.net/2021/06/05/ouVE5rZPqjxihvs.png", // 奖品说明_兑奖期限
        icon_explain_coupons:
          "https://i.loli.net/2021/06/05/NvQEKMih9A7HpOn.png", // 奖品说明_优惠券
        icon_explain_growthvalue:
          "https://i.loli.net/2021/06/05/35yWOaFnqJRkdsY.png", // 奖品说明_成长值
        icon_explain_integral:
          "https://i.loli.net/2021/06/05/IpJlMmWQRPhci5B.png", // 奖品说明_积分"
        icon_explain_balance:
          "https://i.loli.net/2021/06/05/bXDHtwSj54Ff7BA.png", // 奖品说明_余额
        icon_explain_operatinghints:
          "https://i.loli.net/2021/06/05/OTe4bjD7zsM9k1W.png", // 奖品说明_操作提示
        icon_explain_virtualcode:
          "https://i.loli.net/2021/06/05/2aOlsbVKA8XECW4.png", // 奖品说明_虚拟码
        icon_explain_redenvelopes:
          "https://i.loli.net/2021/06/05/Eq34KZikjnofMTF.png", // 奖品说明_红包
        icon_memeber_ship: "https://i.loli.net/2021/06/04/1IpWFSqfetc3Mr9.png",
        icon_opportunitiespopup_integral:
          "https://i.loli.net/2021/05/26/1czJmWbrf9TS46C.png",
        pic_homepage_closebanner:
          "https://i.loli.net/2021/05/27/XvAdlL8SWsiKETI.png",
      },
    },
  });
});
app.post("/mock/getChance", (req, res) => {
  // res.send({
  //   code: {
  //     errcode: "0",
  //   },
  //   errcode: "0",
  //   errmsg: "处理成功",
  //   globalTicket: "",
  //   monitorTrackId: "",
  //   data: {
  //     count: 122,
  //   },
  // });
  res.send({
    errcode: 2900000000001,
    errmsg: "查询用户信息失败！",
    data: null,
    globalTicket: "11049--10.252.3.28-1389-3410193010",
  });
});
app.post("/mock/creditExchange", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: true,
  });
});
app.post("/mock/getComponentById", (req, res) => {
  res.send({
    code: {
      errcode: "00006666",
    },
    errcode: "0",
    errmsg: "getComponentIderror",
    globalTicket: "",
    monitorTrackId: "",
    data: {
      prizeList: [
        {
          name: "p1",
          prizename: "p1",
          prizeid: "p1",
          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p2",
          prizename: "p2",
          prizeid: "p2",
          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p3",
          prizename: "p3",
          prizeid: "p3",
          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p4",
          prizename: "p4",
          prizeid: "p4",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p5",
          prizename: "p5",
          prizeid: "p5",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p6",
          prizename: "p6",
          prizeid: "p6",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p7",
          prizename: "p7",
          prizeid: "p7",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p8",
          prizename: "p8",
          prizeid: "p8",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
      ],
    },
  });
});
app.get("/mock/test", (req, res) => {
  res.send({
    code: {
      errcode: "00006666",
    },
    errcode: "0",
    errmsg: "getComponentIderror",
    globalTicket: "",
    monitorTrackId: "",
    data: true,
  });
});
app.post("/mock/getActivityMaterial", (req, res) => {
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
          name: "p1",
          prizename: "p1",
          prizeid: "p1",
          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p2",
          prizename: "p2",
          prizeid: "p2",
          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p3",
          prizename: "p3",
          prizeid: "p3",
          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p4",
          prizename: "p4",
          prizeid: "p4",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p5",
          prizename: "p5",
          prizeid: "p5",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p6",
          prizename: "p6",
          prizeid: "p6",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p7",
          prizename: "p7",
          prizeid: "p7",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
        {
          name: "p8",
          prizename: "p8",
          prizeid: "p8",

          src:
            "https://image-c.weimobwmc.com/activity/297f948d6d3e4c7ca2742fcd6cbe35f4.png",
        },
      ],
    },
  });
});
app.post("/mock/startBigWheel", (req, res) => {
  setTimeout(() => {
    res.send({
      errcode: 0,
      errmsg: "处理成功",
      data: {
        propPicture: null,
        checkMessageMockBOS: [
          {
            code: "900001",
            linkUrl:
              "http://master.saas.weimobqa.com/app/markethd/1122/1180222/market/center",
            message: "没有抽奖机会",
            class:
              "com.weimob.lcode.activity.domain.bo.drawplay.CheckMessageMockBO",
          },
          {
            code: "900002",
            linkUrl: "https://master.weimob.com/console/solution/list",
            message: "没有参与活动资格",
            class:
              "com.weimob.lcode.activity.domain.bo.drawplay.CheckMessageMockBO",
          },
          {
            code: "900003",
            linkUrl: null,
            message: "需要完善用户信息",
            class:
              "com.weimob.lcode.activity.domain.bo.drawplay.CheckMessageMockBO",
          },
          {
            code: "900004",
            linkUrl: null,
            message: "需要关注公众号",
            class:
              "com.weimob.lcode.activity.domain.bo.drawplay.CheckMessageMockBO",
          },
          {
            code: "900005",
            linkUrl: null,
            message: "总抽奖次数用完",
            class:
              "com.weimob.lcode.activity.domain.bo.drawplay.CheckMessageMockBO",
          },
        ],
        propId: null,
        prizes: [
          {
            prizeName: null,
            winnerId: null,
            prizeType: null,
            photo: null,
            redeemWay: null,
            operationPrompt: null,
            class:
              "com.weimob.lcode.activity.domain.bo.drawplay.PlayGamePrizeBO",
            prizeId: "-111",
          },
        ],
        count: null,
        class: "com.weimob.lcode.activity.domain.bo.drawplay.PlayGameBO",
        propName: null,
        errMessage: null,
        status: "0",
      },
      globalTicket: "27670--10.252.4.115-1433-3506710621",
    });
  }, 10000);
});
app.post("/mock/exchangePrizeCode", (req, res) => {
  res.send({
    code: { errcode: "222", errmsg: "success" },
    data: true,
    errcode: "0",
    errmsg: "success",
    exp: null,
    globalTicket: "646231106068647424",
    monitorTrackId: "f03a9e4f-b82a-49a9-a8e1-e3b4cc9f9f71",
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
app.post("/mock/exchangeCode", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: true,
  });
});
app.post("/mock/perfectInfo", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: true,
  });
});
app.post("/mock/perfectDeliveryAddress", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: true,
  });
});
app.post("/mock/getStore", (req, res) => {
  res.send({
    code: {
      errcode: "0",
    },
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: Array.from(new Array(20)).map((item, index) => {
      return {
        name: "store" + index,
      };
    }),
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
