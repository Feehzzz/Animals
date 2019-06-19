export default class AnimaNumeros {
  constructor(numeros, observeTarget, observerClass, ) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget)
    this.observerClass = observerClass;
    
    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }

  // recebe um elemento do dom, com numero em seu texto
  // incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100)
    let start = 0;
    const timer = setInterval(() => {
      start += incremento
      numero.innerText = start;

      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 20 * Math.random())
  }
  // ativa incrementar numero para cada
  // numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }
  init() {
    if(this.numeros.length && this.observeTarget){
    this.addMutationObserver();
    }
    return this;

  }
  //função ocorre quando a houver mutação
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  //adiciona ao mutationobserver para verificar
  // quando possui class ativo ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }
}
