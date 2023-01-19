function solution(numbers) {
  const set = new Set();
  while (numbers.length > 1) {
    const target = numbers.pop();
    for (let i = 0; i < numbers.length; i++) {
      set.add(numbers[i] + target);
    }
  }
  return Array.from(set).sort((a, b) => a - b);
}

solution([5, 0, 2, 7]);
console.log(solution([5, 0, 2, 7]));
