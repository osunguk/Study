function numberSearch(str) {
    if(str.length === 0) return 0
    // TODO: 여기에 코드를 작성합니다.
    let splited = str.split('');
    console.log(splited)
    let numSum = 0;
    let cnt = 0;
    for(let i = 0; i < splited.length; i++){
        if(splited[i] === ' ') {
            cnt++;
            continue;
        }
        console.log(Number(splited[i]))
        if(typeof Number(splited[i]) === 'number' && !Number.isNaN(Number(splited[i]))){
            cnt++;
            numSum += Number(splited[i]);
            console.log(numSum, cnt);
        }
    }
    console.log(splited.length, cnt, numSum);
    return Math.round(numSum/(splited.length - cnt));
}

let output = numberSearch('Hello6 9World 2, Nic8e D7ay!');  // 1
console.log(output);


console.log(typeof NaN);