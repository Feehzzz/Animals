import Scrollsuave from './scroll-suave.js';

import Accordion from './accordion.js';
import initTabNav from './tabnav.js';
import initModal from './modal.js';
import initToolTip from './tooltip.js';
import initDropDownMenu from './dropdown.js';
import initMenuMobile from './menu-mobile.js';
import initFuncionamento from './funcionamento.js';
import initFetchAnimais from './fetch-animais.js';
import initFetchBitcoin from './fetchbitcoin.js';
import initAnimacaoScroll from './scroll-animacao.js';



const options = {
  behavior: 'smooth',
  block: 'start'
}
const scrollsuave = new Scrollsuave('[data-menu="suave"] a[href^="#"]', options);
scrollsuave.init();
const accordion =  new Accordion('[data-anime="accordion"] dt');
accordion.init();

initModal();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
