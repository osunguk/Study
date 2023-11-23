const show = [];
const compare = (banned, shouldCheck) => {
  if (banned.length !== shouldCheck.length) return false;
  for (let i in shouldCheck) {
    if (banned[i] === "*" || banned[i] === shouldCheck[i]) continue;
    return false;
  }
  return true;
};

function solution(user_id, banned_id) {
  let cnt = 0;

  const recursion = (userIdList, bannedIdList, acc) => {
    if (bannedIdList.length === 0) {
      cnt++;
      show.push(acc);
      return;
    }

    bannedIdList.forEach((el, idx, org) => {
      for (let i in userIdList) {
        if (compare(el, userIdList[i])) {
          const restBannedIds = org.filter((el, index) => index !== idx);
          const restUserIds = userIdList.filter(
            (el, index) => index !== Number(i)
          );
          recursion(restUserIds, restBannedIds, [...acc, [el, userIdList[i]]]);
          break;
        }
      }
      return;
    });
  };

  recursion(user_id, banned_id, []);
  console.log(cnt);
  console.log(show);
  return cnt;
}

const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
const banned_id = ["*rodo", "*rodo", "******"];
// ["*rodo", "*rodo", "******"]
// ["fr*d*", "abc1**"];
const result = solution(user_id, banned_id);
