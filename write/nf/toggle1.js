//on和off切换，命令式
switcher.onclick = function(evt){
    if(evt.target.className === 'on'){
      evt.target.className = 'off';
    }else{
      evt.target.className = 'on';
    }
  }