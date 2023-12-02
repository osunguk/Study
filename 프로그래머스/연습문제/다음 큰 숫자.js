function solution(n) {
  let last = 0
  let cnt = 0
  let repeat = 0
  let binary = n.toString(2)
  for (let i of binary.split('0').reverse()) {
    if (i !== '') {
      repeat = i.length
      break
    }
  }

  console.log(binary.split('0'))
  for (let i = 0; i < binary.length; i++) {
    console.log(binary[i])

    if (binary[i] === '1') {
      cnt += 1
      last = i
    }
  }
  last
  cnt
  repeat

  console.log(binary.length - last)

  console.log(2 ** 2)

  let sum = 0
  for (let i = 0; i < repeat - 1 && cnt !== 0; i++, cnt--) {
    sum += 2 ** i
  }
  console.log(n)
  console.log(2 ** (binary.length - last - 1))
  console.log(sum)
  let result = n + 2 ** (binary.length - last - 1) + sum
  console.log(result)
  console.log(n.toString(2))
  console.log(result.toString(2))
  return result
}

n = 12

n

console.log(n.toString(2))
solution(n)
