function sorter (unsorted) {
  var swapped = true;
  while(swapped) {
    swapped = false;
    for(let i = 0; i < unsorted.length; i++) {
      showSimulatedState(unsorted);
      if(unsorted[i] > unsorted [i+1]) {
        let middle = null;
        middle = unsorted[i];
        unsorted[i] = unsorted[i+1];
        unsorted[i+1] = middle;
        swapped = true;
      }
    }
  }

  return unsorted;
}

// sorter([5,3,10,6, 77, 13, -2, 25, 31, 44, 0]);



function test(param, expected) {
  let result = sorter(param);
  let isSorted = true;

  for(let i = 0; i < param.length; i++) {
    if(result[i] !== expected[i]) {
      isSorted = false;
    }
  }

  if(isSorted) {
    console.log('✔ Sorting function works as expected');
  } else {
    const error =  new Error(
    `❌  Sorting function is not working correctly. \n Expected ${expected} but got ${result}`);
    console.log(error.message);
  }
}

// test([5,3,10,6, 77, 13, -2, 25, 31, 44, 0], [-2, 0, 3, 5, 6, 10, 13, 25, 31, 44, 77]);

// test([3,1,6,10,5,9,2,8,4,7], [1,2,3,4,5,6,7,8,9,10]);
sorter([3,6,1,10,5,9,2,8,4,7]);
