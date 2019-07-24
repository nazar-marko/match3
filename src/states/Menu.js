
export default class Menu extends Phaser.State {

    preload () {
        
        this.background = this.add.image(0, 0, "bg");
        this.logo = this.add.image(this.game.world.centerX, this.game.world.centerY-200, "logo");
        this.button =  this.add.image(this.game.world.centerX, this.game.world.centerY, "btn");
        this.sfx = this.add.image(this.game.world.right-100, this.game.world.top+25, "btn-sfx");
        this.sfx.scale.setTo(0.5, 0.5);
        
    }

    create () {

        let audio = this.add.audio('bg-audio');
        audio.loop = true;
        audio.play();

        this.button.anchor.setTo(0.5, -0.5);
        this.logo.anchor.setTo(0.5, 0);
        this.button.inputEnabled = true;
        this.button.events.onInputDown.add(this.runGame, this);
    }

    runGame () {
        this.state.start("Game");
    }

}
