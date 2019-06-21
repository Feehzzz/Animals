import outSideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(menu, events) {
    this.dropdownMenus = document.querySelectorAll(menu);
    // define touchstart e click como argumentos 
    // padrão de events caso o usuario não define
    if (events === undefined) {
      this.events = ['touchstart', 'click']
    } else {
      this.events = events
    }
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = 'ativo'

  }
  // ativa o dropdown e adiciona a função que observa o click fora
  activeDropDownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    })
  }
  // adiciona os eventos ao dropdown
  addDropEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropEvent();
    }
    return this;

  }

}
