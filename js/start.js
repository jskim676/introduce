function start () {
  const desktop = document.getElementById('desktop');
  const startWin = document.getElementById('start-window');
  const startBtn = document.getElementById('start-button');
  
  let isStatus = true;
  let num = 100;
  startBtn.addEventListener('click',function() {
    num++;
    startWin.children[0].style.zIndex = num;
    if(isStatus === true) {
      startWin.classList.remove('hidden');
      isStatus = false;
    } else {
      startWin.classList.add('hidden');
      isStatus = true;
    }
  });
  
  // 바탕화면 클릭 시 시작창은 꺼짐
  
  desktop.addEventListener('click', function ()  {
    startWin.classList.add('hidden');
    isStatus = true;
  });
  
  
  // 커리큘럼의 아이콘을 마우스 오버하였을시 시작 메뉴가 펼쳐져 설명이 나온다.
  const skill = Array.from(document.querySelectorAll('#skill > div > img'));
  for(let k=0; k<skill.length; k++) {
    skill[k].addEventListener('mouseover', function() {
      num++;
      startWin.classList.remove('hidden');
      startWin.style.zIndex = num;
    });
  }
}


export default start