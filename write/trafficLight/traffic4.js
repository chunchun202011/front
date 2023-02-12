//异步+函数式
const traffic = document.getElementById('traffic');

function wait(time){
  return new Promise(resolve => setTimeout(resolve, time));
}

function setState(state){
  traffic.className = state;
}

async function start(){
  //noprotect
  while(1){
    setState('wait');
    await wait(1000);
    setState('stop');
    await wait(3000);
    setState('pass');
    await wait(3000);
  }
}

start();