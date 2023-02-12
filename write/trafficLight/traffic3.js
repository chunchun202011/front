//过程抽象
const traffic = document.getElementById('traffic');

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function poll(...fnList){
  let stateIndex = 0;
  
  return async function(...args){
    let fn = fnList[stateIndex++ % fnList.length];
    return await fn.apply(this, args);
  }
}

async function setState(state, ms){
  traffic.className = state;
  await wait(ms);
}

let trafficStatePoll = poll(setState.bind(null, 'wait', 1000),
                            setState.bind(null, 'stop', 3000),
                            setState.bind(null, 'pass', 3000));

(async function() {
  // noprotect
  while(1) {
    await trafficStatePoll();
  }
}());
