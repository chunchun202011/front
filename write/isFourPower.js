// function isPowerOfFour(num) {
//   num = parseInt(num);

//   while(num > 1) {
//     if(num % 4) return false;
//     num /= 4;
//   }
//   return num === 1;
// }

// function isPowerOfFour(num) {
//   num = parseInt(num);

//   while(num > 1) {
//     if(num & 0b11) return false;
//     num >>>=2;
//   }
//   return num === 1;
// }

// function isPowerOfFour(num) {
//   num = parseInt(num).toString(2);
  
//   return /^1(?:00)*$/.test(num);
// }

function isPowerOfFour(num){
    num = parseInt(num);
    
    return num > 0 &&
           (num & (num - 1)) === 0 &&
           (num & 0xAAAAAAAAAAAAA) === 0;
  }
  
  num.addEventListener('input', function(){
    num.className = '';
  });
  
  checkBtn.addEventListener('click', function(){
    let value = num.value;
    num.className = isPowerOfFour(value) ? 'yes' : 'no';
  });