import url from '../img/goblin.png';

export default class Goblin {
  constructor() {
    this.goblinElement = document.createElement('img');
    this.goblinElement.classList.add('goblin');
    this.goblinElement.src = url;
    this.goblinElement.alt = 'гоблин';
  }
}
