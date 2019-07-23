import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import BootState from './states/Boot';
import MenuState from './states/Menu';
import GameState from './states/Game';
import GameOver from './states/GameOver';

class Game extends Phaser.Game {
    constructor () {
        const width = window.innerWidth * window.devicePixelRatio;
        const height = window.innerHeight * window.devicePixelRatio; 

        super( width, height, Phaser.CANVAS);

        this.state.add("Boot", BootState);
        this.state.add("Menu", MenuState);
        this.state.add("Game", GameState);
        this.state.add("GameOver", GameOver);

        this.state.start("Boot");
    }
}

new Game();