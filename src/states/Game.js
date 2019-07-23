import Gem from './Gem';


export default class Game extends Phaser.State {


    constructor () {
        super();
        this.gems = [];
        this.selected1 = null;
        this.removedIndexes = [];
        this.score = 0;
    }

    get getScore() {
        return this.score;
    }

    handleClick (gem) {
        if(this.selected1 == null) {
            this.selected1 = gem;
        } else {
            if ((gem.x == this.selected1.x+1 || gem.x == this.selected1.x-1 || gem.x == this.selected1.x) && (gem.y == this.selected1.y+1 || gem.y == this.selected1.y-1 || gem.y == this.selected1.y)) {
                gem.swap(this.selected1);
                while(this.checkTable());
            }
            this.selected1 = null;
        }
    }

    generateGems () {
        for(let j = 0; j < 10; j++) {
            let row = [];
            for(let i = 0; i < 10; i++) {
                row.push(new Gem(i, j, Math.floor(Math.random()*6)+1, this));
            };
            this.gems.push(row);
        }
    }

    checkColumn ( colId ) {
        let wasRemoved = false;
        for(let i = 0; i < 10-2;) {
            let currentGem = this.gems[i][colId];
            let counter = 1;
            let j = i + 1;
            while (j < 10 && this.gems[j][colId].type == currentGem.type) {
                counter++;
                j++;
            }
            if (counter > 2) {
                for (let z = i; z < i + counter; z++) {
                    this.removedIndexes.push([z, colId]);
                }
                wasRemoved = true;
            }

            i += counter;
        }
        return wasRemoved;
    }

    checkRow ( rowId ) {
        let wasRemoved = false;
        for(let i = 0; i < 10-2;) {
            let currentGem = this.gems[rowId][i];
            let counter = 1;
            let j = i + 1;
            while (j < 10 && this.gems[rowId][j].type == currentGem.type) {
                counter++;
                j++;
            }
            if (counter > 2) {
                for (let z = i; z < i + counter; z++) {
                    this.removedIndexes.push([rowId, z]);
                    // this.gems[rowId][z].sprite.destroy();
                    // this.gems[rowId][z].type = null;
                }
                wasRemoved = true;
            }

            i += counter;
        }
        return wasRemoved;
    }

    // checkTable () {
        
        
    // }

    checkTable () {
        // console.log(this.removedIndexes);
        let wasRemoved = false;
        for (let i = 0; i < 10; i++) {
            wasRemoved = this.checkColumn(i) | this.checkRow(i);
        }
        let dropNeeded = this.removedIndexes.length > 0;
        this.removedIndexes.forEach(indexes => {
            this.score += 100;
            // if (this.gems[indexes[1]][indexes[1]].sprite.exists) {
                this.gems[indexes[0]][indexes[1]].sprite.destroy();
                this.gems[indexes[0]][indexes[1]].type = null;
            // }
        });
        this.removedIndexes = [];
        if (dropNeeded) {
            this.dropGems();
            this.fillTable();
        }

        return wasRemoved;
    }

    gameTimeout () {
        this.game.time.events.add(60 * 1000 * 2, () => {
            this.state.start("GameOver", true, true, this.score);
        });
    }

    fillTable () {
        this.gems.forEach((row, y) => row.forEach((gem, x) => {
            if(gem.type == null) {
                this.gems[y][x] = new Gem(gem.x, gem.y, Math.floor(Math.random()*6)+1, this);
            }
        }));
        while(this.checkTable());
    }

    dropGems () {
        for (let i = 9; i >= 0; i--) {
            for (let j = 9; j >= 0; j--) {
                if (this.gems[i][j].type == null) {
                    for (let z = 0; z < i; z++) {
                        this.gems[z][j].swap(this.gems[i][j]);
                    }
                }
            }
        }
    }

    create () {
        this.generateGems();
        console.log(this.checkTable())
        while (this.checkTable());
        this.gameTimeout();
    }

    update () {
        // this.checkTable();
        // this.fillTable();
    }
}