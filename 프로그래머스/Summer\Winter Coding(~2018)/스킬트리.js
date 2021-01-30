function solution(skill, skill_trees) {
  let result = 0;
  console.log(skill);
  console.log(skill_trees);

  let splited = skill.split("");
  console.log(splited);
  here: for (let tree of skill_trees) {
    console.log(tree);
    let temp = 0;
    let notLearned = false;
    for (let skill of splited) {
      let idx = tree.indexOf(skill);
      if (notLearned && idx !== -1) continue here;
      if (idx === -1) {
        notLearned = true;
        continue;
      }
      if (idx < temp) continue here;
      temp = idx;
    }
    result++;
  }

  return result;
}

console.log(solution("CBD", ["BDA"]));
// , "CBADF", "AECB", "BDA"
