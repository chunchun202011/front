const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function * draw(cards){
    const c = [...cards];

  for(let i = c.length; i > 0; i--) {
    const pIdx = Math.floor(Math.random() * i);
    [c[pIdx], c[i - 1]] = [c[i - 1], c[pIdx]];
    yield c[i - 1];
  }
}

const result = draw(cards);
console.log([...result]);