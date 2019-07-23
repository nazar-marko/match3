import Game from './Game';

export default class GameOver extends Phaser.State {

    init(...args) {
        this.score = args[0];
    }

    create () {
        console.log(this);
        let style = { font: "65px Arial", fill: "#fff", align: "center" };
        this.game.add.text(this.game.world.centerX * 0.5, this.game.world.centerY, `Game over! Your score is: ${this.score}`, style)
    }
}