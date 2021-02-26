import express = require("express");
import { fill } from "./utils/utils";
import { NUM_OF_TRACKS, subTracTitles, tracTitles } from "./utils/config";
import {
  buildActivity,
  buildAssignSubtrack,
  buildTrack,
} from "./utils/build-track";
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies

app.post("/api/activityCalendar", (req, res) => {
  const trackTitles = tracTitles.slice(0);
  const tracks = fill(NUM_OF_TRACKS).reduce((acc, i) => {
    const track = buildTrack(i + 1, trackTitles.pop());
    acc[track.id] = track;
    return acc;
  }, {});
  setTimeout(()=> {
    res.send({
      errcode: "0",
      errmsg: "处理成功",
      globalTicket: "",
      monitorTrackId: "",
      data: [
        {
          pluginType: "egg",
          pluginName: "砸金蛋",
          styleColor: "#FFDDFF",
          list: buildActivity(100, "砸金蛋"),
        },
        {
          pluginType: "bigwheel",
          pluginName: "大转盘",
          styleColor: "#A190FFFF",
          list: buildActivity(10, "大转盘"),
        },
      ],
    });
  },0)

  // res.send({
  //   errcode: "0",
  //   errmsg: "处理成功",
  //   globalTicket: "",
  //   monitorTrackId: "",
  //   data: [
  //
  //   ],
  // });
});

app.post("/api/load-more", (req, res) => {
  console.log("params", req.body);

  const currentCount = req.body.currentCount;
  let titles = [];
  if (currentCount < 3) {
    titles = subTracTitles.slice(0, currentCount + 1);
  }
  res.send({
    code: {
      errcode: "0",
    },
    data: titles.map((item) => {
      return buildAssignSubtrack(Math.random(), Math.random(), item);
    }),
  });
});
app.post("/report/link/offerTsoTicket", (req, res) => {
  res.send({
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data: [
    ],
  });

});

app.post("/report/link/findTsoTicket", (req, res) => {
  res.send({
    errcode: "0",
    errmsg: "处理成功",
    globalTicket: "",
    monitorTrackId: "",
    data:{
      pid:1,
      wid:22,
      tsoTicketTag:1,
      tsoTicket:1_1_1_1_1
    },
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log("serve open");
