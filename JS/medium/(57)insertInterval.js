/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let beforeIndex;
  let afterIndex = intervals.length;
  let beforeArray = [];
  let afterArray = [];
  let collapsedInterval = newInterval;

  if (intervals.length === 0) {
    return [newInterval];
  }

  intervals.forEach((interval, index) => {
    if (interval[1] < newInterval[0]) {
      beforeIndex = index;
    }
    if (interval[0] > newInterval[1] && afterIndex === intervals.length) {
      afterIndex = index;
    }
  });

  if (typeof beforeIndex === "number") {
    beforeArray = intervals.slice(0, beforeIndex + 1);
    if (beforeIndex + 1 < intervals.length) {
      collapsedInterval[0] = Math.min(
        intervals[beforeIndex + 1][0],
        newInterval[0]
      );
    }
  } else {
    collapsedInterval[0] = Math.min(intervals[0][0], newInterval[0]);
  }

  if (afterIndex < intervals.length) {
    afterArray = intervals.slice(afterIndex);
    if (afterIndex - 1 >= 0) {
      collapsedInterval[1] = Math.max(
        intervals[afterIndex - 1][1],
        newInterval[1]
      );
    }
  } else {
    collapsedInterval[1] = Math.max(
      intervals[afterIndex - 1][1],
      newInterval[1]
    );
  }

  return [...beforeArray, collapsedInterval, ...afterArray];
};
