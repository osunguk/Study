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

  const recursion = (user, ban, acc) => {
    if (ban.length === 0) {
      cnt++;
      show.push(acc);
      return;
    }

    const target = ban[0];

    for (let i in user) {
      if (compare(target, user[i])) {
        const banRest = ban.slice(1);
        const userRest = user.filter((el) => el !== user[i]);
        recursion(userRest, banRest, [...acc, [ban[0], user[i]]]);
      }
    }
    return;
  };
  recursion(user_id, banned_id, []);

  console.log(cnt);
  console.log(show);
}

const user_id = ["aac", "abc", "ccc"];
const banned_id = ["ab*", "a*c"];
// 1 가능한 경우 2개
// 2 가능한 경우 2개
// 3 가능한 경우 2개
// 1,2 둘다 가능한 경우 2개

// ["*rodo", "*rodo", "******"]
// ["fr*d*", "abc1**"];
const result = solution(user_id, banned_id);

const sss = new Set();
sss.add(1);
sss.add();
console.log(sss);
