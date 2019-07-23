import Game from './Game';


export default class Gem {

    constructor ( x, y, type, context ) {
        
        this.x = x;
        this.y = y;
        this.type = type;
        this.sprite = null;
        this.context = context;
        this.cellWidth = this.context.game.world.width / 10;
        this.cellHeight = this.context.game.world.height / 10;

        this.createSprite(this.x, this.y);
    }

    swap (gem) {
        let temp = {...gem};

        gem.sprite.destroy();
        this.sprite.destroy();

        gem.type = this.type;
        this.type = temp.type;

        gem.createSprite(gem.x, gem.y);
        this.createSprite(this.x, this.y);
    }

    createSprite (x, y) {
        if (this.type != null) {
            this.sprite = this.context.game.add.sprite(0 + this.cellWidth * x, 0 + this.cellHeight * y, `gem${ this.type }`);
            this.sprite.scale.setTo(0.8, 0.8);
            this.sprite.inputEnabled = true;
            this.sprite.events.onInputDown.add(() => this.context.handleClick(this), this.context);
        }
    }

    

}
