export default class Modal {
  constructor() {
    this.modalElement = document.querySelector('.modal');
    this.closeBg = this.modalElement.querySelector('.modal__close-bg');
    this.closeBtn = this.modalElement.querySelector('.modal__close-btn');
    this.title = this.modalElement.querySelector('.modal__title');
    this.modalBtn = this.modalElement.querySelector('.modal__btn');
  }

  show() {
    this.modalElement.classList.remove('modal_hidden');
  }

  hide() {
    this.modalElement.classList.add('modal_hidden');
  }
}
