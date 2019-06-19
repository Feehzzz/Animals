export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);

  }
  // abre ou fecha modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }
  // adiciona evento de toggle ao modal
  eventToggleModal(e){
    e.preventDefault();
    this.toggleModal();
  }
  // fecha o modal ao clicar fora
  clickForaModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal(e);
    }
  }
  // adiciona eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click',  this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}

