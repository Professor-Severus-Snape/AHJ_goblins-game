export default class Copyrights {
  constructor() {
    const link = document.querySelector('.copyrights__link');
    this.copyrights = link ? link.textContent : '';
  }

  static stoleRights() {
    // eslint-disable-next-line no-console
    console.error('This work has been stolen from https://github.com/Professor-Severus-Snape/AHJ_goblins-game');
  }
}
