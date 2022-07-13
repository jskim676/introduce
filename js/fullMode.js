import { win, winBtn, qs, qsmark, programName } from "./script.js";

function fullMode () {
  let fullmode = false;
  let num = 100;
  
  // 최소화 버튼
  const minimize = (minBtn) => {
    minBtn.addEventListener('click', function ()  {
      if(fullmode === false) {
        win.game.classList.remove('hidden');
        qs.classList.remove('hidden');
      } else {
        win.fullGame.classList.remove('hidden');
        qs.classList.remove('hidden');
      }
      if(minBtn === winBtn.game[0]) {
        win.game.classList.add('hidden');
        qs.classList.add('hidden');
      }
    });
  }

  minimize(winBtn.game[0]);
  minimize(programName.Name0);

  // 최대화 버튼
  const maximize = (maxBtn,event, remove, add, mode) => {
    maxBtn.addEventListener(`${event}`, function ()  {
      remove.classList.remove('hidden');
      add.classList.add('hidden');
      num++;
      win.fullGame.children[0].style.zIndex = num;
      fullmode = mode;
    });
  }

  maximize(winBtn.game[1], 'click',  win.fullGame, win.game, true);
  maximize(document.querySelector('.smallTopBar'), 'dblclick', win.fullGame, win.game, false);
  maximize(win.fullGame.children[0].children[0], 'dblclick', win.game, win.fullGame, false);
  maximize(winBtn.fullGame[1], 'click', win.game, win.fullGame, false);

  // X 버튼
  const xBtn = (xBtn,win) => {
    xBtn.addEventListener('click', function () {
      win.classList.add('hidden');
      qs.classList.add('hidden');
      qsmark.classList.add('hidden');
      programName.Name0.parentNode.removeChild(programName.Name0);
    });
  }
  xBtn(winBtn.game[2], win.game);
  xBtn(winBtn.fullGame[2], win.fullGame);
}

export default fullMode