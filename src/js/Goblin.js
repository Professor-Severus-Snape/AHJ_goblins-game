import url from '../img/goblin.png';

export default class Goblin {
  constructor() {
    const goblinElement = document.createElement('img');
    goblinElement.classList.add('goblin');
    goblinElement.src = url;
    goblinElement.alt = 'гоблин';
    this.goblin = goblinElement;
  }
}
