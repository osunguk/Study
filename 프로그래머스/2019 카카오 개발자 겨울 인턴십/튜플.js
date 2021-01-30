function solution(s) {
  let cut = s.slice(1,-1);
  let splited = cut.replace(/},{/g, '} , {');
  let resplited = splited.split(' , ');
  let sorted = resplited.sort((a,b) => {
    if (a.length > b.length) {
      return 1
    } else return -1;
  });
  // console.log(sorted);
  for (let i = 0; i < sorted.length; i++){
    sorted[i] = sorted[i].slice(1,-1);
    sorted[i] = sorted[i].split(',')
  }
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted[i].length; j++) {
      sorted[i][j] = Number(sorted[i][j]);
    }
  }
  // console.log(sorted);
  let result = []
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted[i].length; j++) {
      if (!result.includes(sorted[i][j])) result.push(sorted[i][j]);
    }
  }
  console.log(result);
}

solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")



