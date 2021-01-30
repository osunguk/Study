function solution(genres, plays) {
  let obj = {};
  for (let i = 0; i < genres.length; i++) {
    if (obj.hasOwnProperty(genres[i])) {
      obj[genres[i]].album.push({ [i]: plays[i] });
      obj[genres[i]].sum += plays[i];
    } else {
      obj[genres[i]] = { album: [{ [i]: plays[i] }], sum: plays[i] };
    }
  }

  let sorted = Object.keys(obj).sort((a, b) => {
    if (obj[a].sum > obj[b].sum) {
      return -1;
    } else if (obj[a].sum < obj[b].sum) {
      return 1;
    } else if (obj[a].sum === obj[b].sum) {
      return 1;
    }
  });
  let result = [];
  for (let genre of sorted) {
    obj[genre].album.sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0];
    });

    if (obj[genre].album.length > 2) obj[genre].album.length = 2;

    obj[genre].album.map((el) => {
      result.push(Number(Object.keys(el)[0]));
    });
  }
  return result;
}

solution(
  ["classic", "pop", "classic", "classic", "pop", "rock&roll"],
  [500, 600, 150, 800, 2500, 300000]
);
