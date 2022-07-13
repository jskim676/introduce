function questionIncrease (target) {

  // 질문 박스의 길이를 늘려서 내용을 볼 수 있게함
  let slideStatus = true;
  target.addEventListener('click', e=> {
    if(slideStatus === true) {
      target.style.height = "45vh";
      target.style.transition = "0.5s";
      slideStatus = false;
    } else {
      target.style.height = "10vh";
      slideStatus = true;
    }
  });
}

export default questionIncrease