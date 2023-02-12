const traffic = document.getElementById('traffic');

const stateList = [
  {state: 'wait', last: 1000},
  {state: 'stop', last: 3000},
  {state: 'pass', last: 3000},
];

function start(traffic, stateList){
  function applyState(stateIdx) {
    const {state, last} = stateList[stateIdx];
    traffic.className = state;
    setTimeout(() => {
      applyState((stateIdx + 1) % stateList.length);
    }, last)
  }
  applyState(0);
}

start(traffic, stateList);