function solution(bridge_length, weight, truck_weights) {
  let q = new Array(bridge_length).fill(0);
  let sum = 0;
  let t = 0;

  for (let truck of truck_weights) {
    let front = q.shift();
    sum -= front;
    if (sum + truck <= weight) {
      q.push(truck);
      console.log(q);
      sum += truck;
      t++;
    } else {
      q.push(0);
      sum += 0; // 나중에 지우기
      while (sum + truck > weight) {
        let front = q.shift();
        sum -= front;
        q.push(0);
        console.log(q);
        sum += 0;
        t++;
      }
      q.pop();
      q.push(truck);
      console.log(q);
      sum += truck;
      t++;
    }
  }

  t += q.length;
  return t;
}

console.log(solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1]));
