import outSideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('ativo');
    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    })
  }
  if (dropdownMenus) {
    dropdownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}
