const traffic = document.getElementById('traffic');

(function reset(){
  traffic.className = 's1';
  
  setTimeout(function(){
      traffic.className = 's2';
      setTimeout(function(){
        traffic.className = 's3';
        setTimeout(function(){
          traffic.className = 's4';
          setTimeout(function(){
            traffic.className = 's5';
            setTimeout(reset, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
  }, 1000);
})();