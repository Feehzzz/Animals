export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    // bind do objeto da classe aos callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this)
  }
  // mose a tooltip com base em seus estilos
  // de acordo com a posição do mouse 
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`
    }
  }
  // remove a tooltip e os eventos de mousemove e leave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }
  //cria a tooltip box e insere no body
  criarToolTipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  // cria a tooltip e adiciona os eventos 
  // de mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltip e coloca em uma propriedade
    this.criarToolTipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }
  // adiciona os eventos de mouseove a cada tool
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }
  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;

  }
}

