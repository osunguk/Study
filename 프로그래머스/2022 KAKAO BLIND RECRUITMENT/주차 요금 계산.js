function solution(fees, records) {
  const MAX_TIME = 23 * 60 + 59;
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const timeToMinute = (hour, minute) => {
    return hour * 60 + minute;
  };
  const processedRecords = records.reduce((acc, cur) => {
    const [time, carNumber, state] = cur.split(" ");
    const [hour, minute] = time.split(":").map((el) => Number(el));

    switch (state) {
      case "IN":
        if (!acc[carNumber]) {
          const record = {
            [carNumber]: {
              isIn: true,
              useStartTime: timeToMinute(hour, minute),
              useTime: 0,
            },
          };
          return { ...acc, ...record };
        } else {
          acc[carNumber].isIn = true;
          acc[carNumber].useStartTime = timeToMinute(hour, minute);
          return acc;
        }

      case "OUT":
        const calculateUseTime =
          timeToMinute(hour, minute) - acc[carNumber].useStartTime;
        acc[carNumber].isIn = false;
        acc[carNumber].useTime = calculateUseTime + acc[carNumber].useTime;
        acc[carNumber].useStartTime = 0;
        return acc;
      default:
        return acc;
    }
  }, {});

  const arrayRecord = [];

  for (let car in processedRecords) {
    const carRecord = processedRecords[car];
    let uncalculatedTime = 0;
    if (carRecord.isIn) {
      uncalculatedTime = MAX_TIME - carRecord.useStartTime;
    }
    arrayRecord.push({
      carNumber: car,
      useTime: carRecord.useTime + uncalculatedTime,
    });
  }

  const sorted = arrayRecord.sort((a, b) => Number(a.carNumber) - b.carNumber);
  return sorted.map((el) => {
    if (el.useTime <= basicTime) return basicFee;

    return basicFee + Math.ceil((el.useTime - basicTime) / unitTime) * unitFee;
  });
}

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
// [14600, 34400, 5000]
[123, 3].reduce;
