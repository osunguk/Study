function solution(id_list, report, k) {
  const reportResult = {};
  const reportList = id_list.reduce((acc, cur) => {
    return { ...acc, [cur]: [] };
  }, {});

  report.forEach((el) => {
    const [reporter, reported] = el.split(" ");
    if (!reportResult[reported]) reportResult[reported] = 0;
    if (reportList[reporter].includes(reported)) return;
    reportResult[reported] = reportResult[reported] + 1;
  });

  console.log(reportList);

  const badUser = [];

  id_list.forEach((el) => {
    if (reportResult[el] >= k) badUser.push(el);
  });

  const result = new Array(id_list.length).fill(0);

  id_list.forEach((el, index) => {
    badUser.forEach((bad_user) => {
      if (reportList[el].includes(bad_user)) {
        console.log(el);
        result[index] = result[index] + 1;
      }
    });
  });

  return result;
}

const result = solution(
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3
);

console.log(result);
