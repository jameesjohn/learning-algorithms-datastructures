function sorter(nums) {
  if(nums.length === 1) {
    return nums;
  }
  const first = sorter(nums.splice(0, nums.length / 2));
  const second = sorter(nums);

  return sticher(first, second);

}

function sticher(set1, set2) {
  const stiched = [];
  const maxTimes = set2.length + set1.length;
  for(let i = 0; i < maxTimes; i++) {
    if(set1.length === 0) {
      stiched.push(...set2);
      break;
    } else if(set2.length === 0) {
      stiched.push(...set1);
      break;
    } else {
      if(set1[0] <= set2[0]) {
        stiched.push(set1.shift());
      } else {
        stiched.push(set2.shift());
      }
    }
  }

  return stiched;
}


function testSticher(set1, set2, expected) {
  const result = sticher(set1, set2);
  let isCorrect = true;
  for(let i = 0; i < expected.length; i++) {
    if(result[i] !== expected[i]) {
      isCorrect = false;
    }
  }

  if (isCorrect) {
    console.log('Works correctly')
  } else {
    console.log(`Fails: Expected ${result} to be ${expected}`);
  }
}

// console.log(sticher([1,8,9], [2,4,5]))
// testSticher([1,8,9], [2,4,5], [1,2,3,4,5,7]);
console.log(sorter([3,6,1,10,5,9,2,8,4,7]));
