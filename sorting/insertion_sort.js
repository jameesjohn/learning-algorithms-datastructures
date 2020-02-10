function sorter(unsorted) {
  for(let i = 1; i < unsorted.length; i++) {
    for(let j = 0; j < i; j++) {
      showState(unsorted);
      if(unsorted[i] < unsorted[j]) {
        const spliced = unsorted.splice(i, 1);
        unsorted.splice(j, 0, spliced[0]);
      }
    }
  }

  return unsorted;
}

console.log(sorter([3,6,1,10,5,9,2,8,4,7]))