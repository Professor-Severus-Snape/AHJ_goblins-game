import Goblin from './Goblin';
import Modal from './Modal';

export default class Game {
  constructor() {
    this.modal = new Modal();
    this.goblin = new Goblin().goblin;

    this.cells = [...document.querySelectorAll('.cell')];
    this.startBtn = document.querySelector('.start-game');
    this.scoreElement = document.querySelector('.score');
    this.missCountElement = document.querySelector('.miss');

    this.previousIndex = null;
    this.currentIndex = null;
    this.previousScore = 0;
    this.currentScore = 0;
    this.missCount = 0;

    this.cells.forEach((cell) => cell.addEventListener('click', this.onCellClick.bind(this)));
    this.startBtn.addEventListener('click', this.onStartBtnClick.bind(this));
    this.modal.closeBg.addEventListener('click', this.onModalCloseClick.bind(this));
    this.modal.closeBtn.addEventListener('click', this.onModalCloseClick.bind(this));
    this.modal.modalButton.addEventListener('click', this.onModalButtonClick.bind(this));
  }

  onStartBtnClick() {
    this.stop();
    this.start();
  }

  onCellClick(event) {
    if (event.target === this.goblin) {
      this.goblin.remove();
      this.currentScore += 1;
      this.scoreElement.textContent = `Попадания: ${this.currentScore}`;
    }
  }

  onModalCloseClick() {
    this.modal.hide();
  }

  onModalButtonClick() {
    this.modal.hide();
    this.start();
  }

  start() {
    this.previousScore = 0;
    this.currentScore = 0;
    this.missCount = 0;
    this.scoreElement.textContent = 'Попадания: 0';
    this.missCountElement.textContent = 'Промахи: 0';

    this.moveGoblin();

    this.intervalId = setInterval(() => {
      this.moveGoblin();

      if (this.previousScore === this.currentScore) {
        this.missCount += 1;
        this.missCountElement.textContent = `Промахи: ${this.missCount}`;
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
