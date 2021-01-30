function solution(numbers, target) {
  // console.log(numbers, target);

  // 타겟을 찾았을 때 증가시켜줄 변수선언
  let result = 0;
  let jegwi = function (numList, sum) {
    // console.log(sum);
    // 탈출구
    // numLIst 의 length 가 0일때
    // 타겟과 비교하고 일치하면 result++
    if (numList.length === 0) {
      if (sum === target) {
        result++;
      }
      return;
    }

    // 경우의수 나누기
    // 첫번째 부터 더하거나 빼는 경우를 나눈다.
    let temp1 = sum;
    let temp2 = sum;
    // console.log(temp1);
    // for (let i = 0; i < numList.length; i++) {
    temp1 += numList[0];
    // console.log(temp1);
    jegwi(numList.slice(1), temp1);
    temp2 -= numList[0];
    jegwi(numList.slice(1), temp2);
    // }
  };
  jegwi(numbers, 0);
  return result;
}
console.log(solution([1, 1, 1, 1, 1], 3));

// 주어지는 숫자는 2개 이상 20개 이하
// 각 숫자는 1이상 50이하 자연수
// 타겟 넘버는 1 이상 1000 이하 자연수
