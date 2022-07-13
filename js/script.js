import getTime from "./clock.js";
import questionIncrease from "./questionIncrease.js";
import moving from "./moving.js";
import gameInfo from "./gameInfo.js";
import iconClick from "./icon.js";
import fullMode from "./fullMode.js";
import start from "./start.js";

export const icons = document.getElementById('icon').children;
// 작업표시줄에 생성되는 프로그램 변수
export const programName = {
  program : document.getElementById('program'),
  
  Name0 : document.createElement('div'),
  Name0Icon : document.createElement('img'),
  Name0Text : document.createElement('p'),
  
  Name1 : document.createElement('div'),
  Name1Icon : document.createElement('img'),
  Name1Text : document.createElement('p'),
  
  Name2 : document.createElement('div'),
  Name2Icon : document.createElement('img'),
  Name2Text : document.createElement('p'),
  
  Name3 : document.createElement('div'),
  Name3Icon : document.createElement('img'),
  Name3Text : document.createElement('p'),
}

export const win = {
  game : document.getElementById('game-window'),
  fullGame : document.getElementById('game-fullWindow'),
  cc : document.getElementById('curriculum-window'), 
  pf : document.getElementById('portfolio-window'),
  ct : document.getElementById('contact-window')
}

export const winBtn = {
  game : Array.from(document.getElementById('game-window-button').children),
  fullGame : Array.from(document.getElementById('game-fullWindow-button').children),
  cc : document.getElementById('curriculum-window-button').children[0],
  pf : document.getElementById('portfolio-window-button').children[0],
  ct : document.getElementById('contact-window-button').children[0]
}

const helloWorld = document.getElementById('hello-world');
const btnConfirm = document.getElementById('confirm');
export const qs = document.getElementById('question');
export const qsmark = document.querySelector('#clock > div > img');


// --------------game --------------
fullMode();

function classAddRemove (target, add, remove) {
  target.addEventListener('click', function () {
    add.classList.add('hidden');
    remove.classList.remove('hidden');
  });
}

classAddRemove(btnConfirm, helloWorld, desktop);
classAddRemove(winBtn.fullGame[0], win.fullGame, qs);

// 게임 정보 확인
gameInfo();

// 질문 늘어나는 효과
questionIncrease(qs.children[0].children[0]);
questionIncrease(qs.children[0].children[1]);

// -------------- desktop icon --------------

iconClick(icons[0], win.game, winBtn.game[2]);
iconClick(icons[1], win.cc, winBtn.cc); 
iconClick(icons[2], win.pf, winBtn.pf); 
iconClick(icons[3], win.ct, winBtn.ct);

// -------------- topBar & scrolling move --------------
const root = document.getElementById('root');
const topBar = Array.from(document.getElementsByClassName('top-bar'));

export const scrolling = document.getElementById('scroll')
export let scrollingTop = scrolling.parentNode.getBoundingClientRect().height - scrolling.getBoundingClientRect().height
const scrollParent = scrolling.parentNode;

moving(topBar[0],topBar[0].parentNode,root);
moving(topBar[1],topBar[1].parentNode,root);
moving(topBar[3],topBar[3].parentNode,root);
moving(topBar[4],topBar[4].parentNode,root);
moving(topBar[5],topBar[5].parentNode,root);
moving(scrolling, scrolling, scrollParent);

// -------------- zIndex --------------
let num =1;
for(let i=0; i<topBar.length; i++) {
  topBar[i].addEventListener('mousedown', function () {
    num++;
    topBar[i].parentNode.style.zIndex = num;
  });
}

// -------------- start --------------
start();

// -------------- clock --------------
getTime();

