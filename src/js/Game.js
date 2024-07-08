import Field from './Field';
import Goblin from './Goblin';
import Modal from './Modal';

export default class Game {
  constructor() {
    this.modal = new Modal();
    this.field = new Field().fieldElement;
    this.goblin = new Goblin().goblinElement;
    this.controller = document.querySelector('.controller');
    this.controller.after(this.field);
    this.cells = [...this.field.querySelectorAll('.cell')];

    this.startBtn = document.querySelector('.start');
    this.score = document.querySelector('.score');
    this.miss = document.querySelector('.miss');

    this.previousIndex = null;
    this.currentIndex = null;
    this.previousScore = 0;
    this.currentScore = 0;
    this.missCount = 0;

    this.cells.forEach((cell) => cell.addEventListener('click', this.onCellClick.bind(this)));
    this.startBtn.addEventListener('click', this.onStartBtnClick.bind(this));
    this.modal.closeBg.addEventListener('click', this.onModalCloseClick.bind(this));
    this.modal.closeBtn.addEventListener('click', this.onModalCloseClick.bind(this));
    this.modal.modalBtn.addEventListener('click', this.onModalBtnClick.bind(this));
  }

  onStartBtnClick() {
    this.stop();
    this.start();
  }

  onCellClick(event) {
    if (event.target === this.goblin) {
      this.goblin.remove();
      this.currentScore += 1;
      this.score.textContent = `Попадания: ${this.currentScore}`;
    }
  }

  onModalCloseClick() {
    this.modal.hide();
  }

  onModalBtnClick() {
    this.modal.hide();
    this.start();
  }

  start() {
    this.previousScore = 0;
    this.currentScore = 0;
    this.missCount = 0;
    this.score.textContent = 'Попадания: 0';
    this.miss.textContent = 'Промахи: 0';

    this.moveGoblin();

    this.intervalId = setInterval(() => {
      this.moveGoblin();

      if (this.previousScore === this.currentScore) {
        this.missCount += 1;
        this.miss.textContent = `Промахи: ${this.missCount}`;
        if (this.missCount > 4) {
          this.stop();
          this.modal.show();
        }
      } else {
        this.previousScore = this.currentScore;
      }
    }, 1000);
  }

  moveGoblin() {
    this.currentIndex = Math.ceil(Math.random() * 16);

    while (this.previousIndex === this.currentIndex && this.previousIndex) {
      this.currentIndex = Math.ceil(Math.random() * 16);
    }

    this.previousIndex = this.currentIndex;

    this.cell = document.querySelector(`.cell-${this.currentIndex}`);
    this.cell.append(this.goblin);
  }

  stop() {
    clearInterval(this.intervalId);
    this.goblin.remove();
    this.modal.title.textContent = `Вы набрали очков: ${this.currentScore}`;
  }
}
