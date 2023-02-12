const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(cards) {
  return [...cards].sort(() => Math.random() > 0.5 ? -1 : 1);
}

console.log(shuffle(cards));

const result = Array(10).fill(0);

for(let i = 0; i < 1000000; i++) {
  const c = shuffle(cards);
  for(let j = 0; j < 10; j++) {
    result[j] += c[j];
  }
}

console.table(result);