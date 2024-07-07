import Game from './Game';
import Copyrights from './Copyrights';

export default class App {
  static init() {
    const copyrights = new Copyrights();
    if (copyrights.copyrights === '© Professor-Severus-Snape, 2024') {
      this.game = new Game();
      return;
    }

    Copyrights.stoleRights();
  }
}
