function creator() {
  const store = {}
  return function(num) {
    if(store[num]) {
      return store[num];
    }
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    store[num] = `rgb(${r}, ${g}, ${b})`;
    return store[num];
  }
}

const colorCreator = creator();
let timesCalled = 0;
function showState(nums) {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.flexDirection = 'column';

  for(let i = 0; i < nums.length; i++) {
    const span = document.createElement('span');
    span.style.backgroundColor = colorCreator(nums[i]);
    span.style.color = '#FFFFFF';
    span.textContent = nums[i];
    span.style.padding = '4px';
    span.style.margin = '1px';
    span.style.textAlign = 'center';
    div.appendChild(span);
  }

  document.querySelector('#display').appendChild (div)

}

function showSimulatedState(nums) {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.flexDirection = 'column';

  for(let i = 0; i < nums.length; i++) {
    const span = document.createElement('span');
    span.style.backgroundColor = colorCreator(nums[i]);
    span.style.color = '#FFFFFF';
    span.textContent = nums[i];
    span.style.padding = '4px';
    span.style.margin = '1px';
    span.style.textAlign = 'center';
    div.appendChild(span);
  }

  const timeOut = timesCalled * 2300;
  timesCalled ++;

  setTimeout(() => {
    const display = document.querySelector('#display');
    if( display.lastElementChild) display.removeChild(display.lastElementChild);
    document.querySelector('#display').append/* Child */(div)
  }, timeOut);
}