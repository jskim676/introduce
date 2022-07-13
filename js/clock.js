function getTime() {
  const clock = document.querySelector('#clock > div > p');
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();

  let ampm = hour > 12 ? "오후" : "오전";

  // 현재 시간을 오전 오후로 표시해서 나타냄
  if(hour>12) {
    clock.textContent = `${ampm} ${hour-12} : ${minute < 10 ? `0${minute}` : minute}`;
  } else if (hour === 12) {
    clock.textContent = `${ampm} ${hour} : ${minute < 10 ? `0${minute}` : minute}`;
  } else {
    clock.textContent = `${ampm} ${hour<10 ? `0${hour}`: hour} : ${minute < 10 ? `0${minute}` : minute}`;
  }

  setInterval(getTime,1000);
}

export default getTime
