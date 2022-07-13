import { icons, programName, qs, qsmark} from "./script.js";

function iconClick (target, win, btn) {
  const idSet = {
    zero : 'game-taskBar',
    one : 'curriculum-taskBar',
    two : 'portfolio-taskBar',
    three : 'contact-taskBar'
  }
  const src = {
    zero : './img/win98_icon/game_icon.svg',
    one : './img/win98_icon/curriculum_icon.svg',
    two : './img/win98_icon/portfolio_icon.svg',
    three : './img/win98_icon/contact_icon.svg'
  }
  const textContent = {
    zero : 'Game',
    one : 'Curriculum',
    two : 'Portfolio',
    three : 'Contact'
  }
  target.addEventListener('dblclick', function() {
    // let num = 1;
    // num++;
    // win.children[0].style.zIndex = num;
    // console.log(num);
    win.classList.remove('hidden');

    const createProgram = (name, icon, text) => {
      programName.program.appendChild(name);
      name.classList.add('window-style');
      name.appendChild(icon);
      name.appendChild(text);

      if(name === programName.Name0) {
        name.setAttribute('id',`${idSet.zero}`);
        icon.setAttribute("src", `${src.zero}`);
        text.textContent = `${textContent.zero}`;
      } else if(name === programName.Name1) {
        name.setAttribute('id',`${idSet.one}`);
        icon.setAttribute("src", `${src.one}`);
        text.textContent = `${textContent.one}`;
      } else if (name === programName.Name2) {
        name.setAttribute('id',`${idSet.two}`);
        icon.setAttribute("src", `${src.two}`);
        text.textContent = `${textContent.two}`;
      } else if (name === programName.Name3) {
        name.setAttribute('id',`${idSet.three}`)
        icon.setAttribute("src", `${src.three}`);
        text.textContent = `${textContent.three}`;
      }

      name.addEventListener('click', function() {
        num++;
        win.children[0].style.zIndex = num;
      });

      btn.addEventListener('click',function () {
        if(name.parentNode !== null) {
          win.classList.add('hidden');
          name.parentNode.removeChild(name);
        }
      });
    }
    
    const desktopIcon = (icon, idSet, pgname, pgicon, pgtext) => {
      if(target === icon) {
        if(document.querySelector(idSet) === null) {
          createProgram(pgname, pgicon, pgtext);
          if(target === icons[0]) {
            qs.classList.remove('hidden');
            qsmark.classList.remove('hidden');
          }
        }
      }
    }

    desktopIcon(icons[0], `#${idSet.zero}`, programName.Name0, programName.Name0Icon, programName.Name0Text);
    desktopIcon(icons[1], `#${idSet.one}`, programName.Name1, programName.Name1Icon, programName.Name1Text);
    desktopIcon(icons[2], `#${idSet.two}`, programName.Name2, programName.Name2Icon, programName.Name2Text);
    desktopIcon(icons[3], `#${idSet.three}`, programName.Name3, programName.Name3Icon, programName.Name3Text);
  }); 
}

export default iconClick
