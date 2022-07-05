import { scrolling,scrollingTop , num } from "./script.js";

function moving (topbar,win,container) {
  const {width:containerWidth, height:containerHeight} = container.getBoundingClientRect();
  const {width:moveWidth, height:moveHeight} = win.getBoundingClientRect();
  
  let isDragging = null;
  let originLeft = null;
  let originTop = null;
  let originX = null;
  let originY = null;
  
  topbar.addEventListener('mousedown', (e) =>{
    isDragging = true;
    originX = e.clientX;
    originY = e.clientY;
    originLeft = win.offsetLeft;
    originTop = win.offsetTop;
  });
  
  win.addEventListener('mousedown', function() {
    num;
    win.style.zIndex = num;
  });
  
  document.addEventListener('mouseup', (e) => {
    isDragging = false;
  });
  
  // 창을 드래그 할때 원래 위치했던 좌표해서 움직여진 좌표의 차이값을 원래 위치했던 left 값에 더한다.
  // 화면 밖으로 나가지않게 범위를 지정하였다.
  document.addEventListener('mousemove', (e)=> {
    if(isDragging) {
      const diffX = e.clientX - originX;
      const diffY = e.clientY - originY;
  
      // 박스가 나갈수 없게 범위 지정
      const endOfXPoint = containerWidth - moveWidth;
      const endOfYPoint = containerHeight - moveHeight;
  
      win.style.left = `${Math.min(Math.max(0, originLeft+diffX), endOfXPoint)}px`;
      win.style.top = `${Math.min(Math.max(0, originTop+diffY), endOfYPoint)}px`;
    }
  });

  if(topbar === scrolling) {
    topbar.addEventListener('mousemove', (e) => {
      console.log(gameicon.style.top);
      console.log(scrolling.style.top);
      if(isDragging) {
        const diffY = e.clientY - originY;
        const endOfYPoint = containerHeight - moveHeight;
    
        gameicon.style.top = `-${Math.floor(Math.min(Math.max(0, originTop+diffY), endOfYPoint)/scrollingTop*100)}%`;
      }
    });
  }
}

export default moving