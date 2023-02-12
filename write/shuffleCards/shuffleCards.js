//洗牌：正确
const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(cards) {
  const c = [...cards];
  for(let i = c.length; i > 0; i--) {
    const pIdx = Math.floor(Math.random() * i);
    [c[pIdx], c[i - 1]] = [c[i - 1], c[pIdx]];
  }
  return c;
}

console.log(shuffle(cards));

const result = Array(10).fill(0);

for(let i = 0; i < 10000; i++) {
  const c = shuffle(cards);
  for(let j = 0; j < 10; j++) {
    result[j] += c[j];
  }
}

console.table(result);

