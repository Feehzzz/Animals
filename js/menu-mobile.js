import outSideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    // define touchstart e click como argumentos 
    // padrão de events caso o usuario não define
    if (events === undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events
    }
    this.activeClass = 'ativo'
    this.openMenu = this.openMenu.bind(this)
  }
 // adiciona a classe ativo ao botão do menu mobile
  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outSideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    })
  }
  // adiciona o evento aos elementos do menu mobile
  addEventMobile(){
    this.events.forEach(evento => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }
  init(){
    if(this.menuButton && this.menuList){
    this.addEventMobile();
    }
    return this
  }
 
}
