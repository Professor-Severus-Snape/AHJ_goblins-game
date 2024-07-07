export default class Modal {
  constructor() {
    this.modal = document.querySelector('.modal');
    this.closeBg = this.modal.querySelector('.modal__close-bg');
    this.closeBtn = this.modal.querySelector('.modal__close-btn');
    this.title = this.modal.querySelector('.modal__title');
    this.modalButton = this.modal.querySelector('.modal__button');
  }

  show() {
    this.modal.classList.remove('modal_hidden');
  }

  hide() {
    this.modal.classList.add('modal_hidden');
  }
}
