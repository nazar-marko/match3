export default class Boot extends Phaser.State {

    preload() {
        this.camera.bounds = null;
        this.camera.focusOnXY(0, 0);
        // this.game.scale = "SHOW_ALL";
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //others
        this.load.image("bg", "assets/images/backgrounds/background.jpg");
        this.load.audio('bg-audio', 'assets/audio/background.mp3');

        this.load.image("btn", "assets/images/btn-play.png");
        this.load.image("logo", "assets/images/donuts_logo.png");
        this.load.image("bg-score", "assets/images/bg-score.png");
        this.load.image("big-shadow", "assets/images/big-shadow.png");
        this.load.image("btn-sfx", "assets/images/btn-sfx.png");
        this.load.image("text-timeup", "assets/images/text-timeup.png");
        this.load.image("donut", "assets/images/donut.png");

        //main gems
        this.load.image("gem1", "assets/images/game/gem-01.png");
        this.load.image("gem2", "assets/images/game/gem-02.png");
        this.load.image("gem3", "assets/images/game/gem-03.png");
        this.load.image("gem4", "assets/images/game/gem-04.png");
        this.load.image("gem5", "assets/images/game/gem-05.png");
        this.load.image("gem6", "assets/images/game/gem-06.png");

        //bonus gems
        this.load.image("gem7", "assets/images/game/gem-07.png");
        this.load.image("gem8", "assets/images/game/gem-08.png");
        this.load.image("gem9", "assets/images/game/gem-09.png");
        this.load.image("gem10", "assets/images/game/gem-10.png");
        this.load.image("gem11", "assets/images/game/gem-11.png");
        this.load.image("gem12", "assets/images/game/gem-12.png");
        this.load.image("hand", "assets/images/game/hand.png");
        this.load.image("shadow", "assets/images/game/shadow.png");

        //particles
        this.load.image("particle-ex1", "assets/images/particles/particle_ex1.png");
        this.load.image("particle-ex2", "assets/images/particles/particle_ex2.png");
        this.load.image("particle-ex3", "assets/images/particles/particle_ex3.png");
        this.load.image("particle1", "assets/images/particles/particle-1.png");
        this.load.image("particle2", "assets/images/particles/particle-2.png");
        this.load.image("particle3", "assets/images/particles/particle-3.png");
        this.load.image("particle4", "assets/images/particles/particle-4.png");
        this.load.image("particle5", "assets/images/particles/particle-5.png");

    }

    create() {
        this.state.start("Menu");
    }
}
