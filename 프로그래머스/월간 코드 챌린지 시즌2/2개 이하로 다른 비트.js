function solution(numbers) {
  const binaryDic = {};
  const makeBinary = (num) => {
    if (binaryDic[num]) {
      return binaryDic[num];
    }
    const binary = [];
    let calc = num;
    while (calc > 0) {
      binary.push(calc % 2);
      calc = Math.floor(calc / 2);
    }
    binaryDic[num] = binary;
    return binary;
  };

  const countDiffBitNumber = (target, calc) => {
    let count = 0;
    for (let i = 0; i < calc.length; i++) {
      if (target[i] !== calc[i]) {
        count = count + 1;
      }
    }
    return count;
  };

  const result = numbers.map((num) => {
    const target = makeBinary(num);
    for (i = 1; ; i++) {
      const compareNumber = num + i;
      const calc = makeBinary(compareNumber);
      if (countDiffBitNumber(target, calc) <= 2) {
        return compareNumber;
      }
    }
  });
  return result;
}

console.log(2 * 2 * 2 * 2);
const answer = solution([15, 31]);
console.log(answer);

function solution2(numbers) {
  const result = numbers.map((num) => {
    if (num % 2 === 0) {
      return num + 1;
    }

    let calc = num;
    let count = 0;
    while (calc % 2 === 1) {
      count = count + 1;
      calc = Math.floor(calc / 2);
    }
    return num + 2 ** (count - 1);
  });
  return result;
}

const a = solution2([15]);
