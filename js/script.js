import Scrollsuave from './scroll-suave.js';
import Accordion from './accordion.js';
import TabNav from './tabnav.js';
import Modal from './modal.js';
import ToolTip from './tooltip.js';
import DropDownMenu from './dropdown.js';
import MenuMobile from './menu-mobile.js';
import initFuncionamento from './funcionamento.js';
import fetchAnimais from './fetch-animais.js';
import fetchBitcoin from './fetch-bitcoin.js';
import ScrollAnima from './scroll-anima.js';


const options = {
  behavior: 'smooth',
  block: 'start'
}
const scrollsuave = new Scrollsuave('[data-menu="suave"] a[href^="#"]', options);
scrollsuave.init();

const accordion =  new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]'); 
tooltip.init();

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
fetchAnimais('./animaisapi.json', '.numeros-grid');


const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdown = new DropDownMenu('[data-dropdown]')
dropdown.init()

const menuMobile = new MenuMobile('[data-menu="button"]','[data-menu="list"]' )
menuMobile.init();

initFuncionamento();


