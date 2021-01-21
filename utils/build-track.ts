import { MAX_NUM_OF_SUBTRACKS, subTracTitles } from "./config";
import { buildDaysElements, fill, getRandomInt } from "./utils";
import * as dayjs from "dayjs";

export const buildSubtrack = (trackId, subtrackId) => ({
  id: `track-${trackId}-${subtrackId}`,
  title: `Subtrack ${subtrackId}`,
  elements: buildDaysElements(subtrackId),
});
export const buildAssignSubtrack = (trackId, subtrackId, title) => ({
  id: `track-${trackId}-${subtrackId}`,
  title: title,
  elements: buildDaysElements(subtrackId),
});

export const buildTrack = (trackId, title) => {
  let track: any = {
    id: `track-${trackId}`,
    title,
    elements: buildDaysElements(trackId),
    // hasButton: true,
    // link: 'www.google.com',
    isOpen: false,
  };
  let tracks;
  if (title === "砍价") {
    track.currentCount = 1;
    track.pageSize = 1;
    track.total = 3;
    tracks = [buildAssignSubtrack(trackId, 1, subTracTitles[0])];
  } else {
    tracks = fill(
      Math.floor(Math.random() * MAX_NUM_OF_SUBTRACKS) + 1
    ).map((i) => buildSubtrack(trackId, i + 1));
  }

  track.tracks = tracks;
  return track;
};

export function buildActivity(count: number, name: string, months = [2]) {
  return Array.from(new Array(count)).map((item, index) => {
    const year = "2021";
    const month = months[getRandomInt(0, months.length - 1)],
      days = dayjs(`${year}-${month + 1}-1`)
        .subtract(1, "day")
        .date(),
      startDate = getRandomInt(1, days - 1),
      startDay = dayjs(`${year}-${month}-${startDate}`),
      endDay = dayjs(`${year}-${month}-${getRandomInt(startDate + 1, days)}`);
    return {
      activityId: index,
      pid: 1000,
      activityName: name + index,
      activityDesc: `${name}活动描述`,
      acitivityPic: "http://.....jpg",
      state: "进行中",
      startTime: index === 0?'2021-2-2 08:00:00':dayjs(startDay).format("YYYY-MM-DD"),
      endTime: index === 0?'2021-2-2 09:00:00':dayjs(endDay).format("YYYY-MM-DD"),
      operationItems: [
        {
          actionName: "编辑活动",
          action: "http://......editUrl",
          icon: "icon",
        },
      ],
    };
  });
}
