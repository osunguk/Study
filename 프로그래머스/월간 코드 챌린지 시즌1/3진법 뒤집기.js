function solution(n) {
  const ternary = n.toString(3);
  const computed = [...ternary].reverse().join("");
  const result = computed.toString(10);

  return parseInt(result, 3);
}

console.log(solution(45));
