class Player {

    constructor(cellSize) {
        // KEYS
        this.P_UP = 119; // keyW // arrow up 38
        this.P_DOWN = 115; // keyS // arrow down 40
        this.P_RIGHT = 100; // keyD // arrow right 39
        this.P_LEFT = 97; // keyA // arrow left 37
        this.PLACE_BOMB = 32; // keySpace
        this.SOUND_ON_OF = 112 // keyP

        // ATTRIBUTES
        this.x = cellSize;
        this.y = cellSize;
        this.cellSize = cellSize;

        this.bombCounter = 3; // number of bombs that player can use
        this.bombs = []; // array with class Bomb

        // LISTENERS
        this.gameMapListener; // get current cells from class GameMap
    }

    setGameMapListener(call) {
        this.gameMapListener = call; // call is the function getCells() from class GameMap
    }

    // get key code of pressed key from document and do some action based on key pressed
    onKeyPress(keyCode) {
        switch(keyCode) {
            case this.P_UP:
                if (this.canMoveUp()) {
                    this.moveUp();
                }
                break;
            case this.P_DOWN:
                if (this.canMoveDown()) {
                    this.moveDown();
                }
                break;
            case this.P_RIGHT:
                if (this.canMoveRight()) {
                    this.moveRight();
                }
                break;
            case this.P_LEFT:
                if (this.canMoveLeft()) {
                    this.moveLeft();
                }
                break;
            case this.PLACE_BOMB:
                if (this.bombCounter) {
                    this.bombs.push(new Bomb(this.cellSize, this.x, this.y));
                    let cells = this.gameMapListener();
                    cells[this.getRow()][this.getCollumn()].drawBomb();
                }
                
                break;
            default:
                break;
        }
    }

    canMoveUp() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        return ((cells[i-1][j].type === 1) ? true : false);
    }

    moveUp() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        if (cells[i][j].isBombSet) {
            cells[i][j].clear();
            cells[i][j].drawBomb();
        } else {
            cells[i][j].clear();
        }
        this.y -= this.cellSize;
        cells[this.getRow()][this.getCollumn()].drawPlayer();
    }

    canMoveDown() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        return ((cells[i+1][j].type === 1) ? true : false);
    }

    moveDown() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        if (cells[i][j].isBombSet) {
            cells[i][j].clear();
            cells[i][j].drawBomb();
        } else {
            cells[i][j].clear();
        }
        this.y += this.cellSize;
        cells[this.getRow()][this.getCollumn()].drawPlayer();
    }

    canMoveRight() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        return ((cells[i][j+1].type === 1) ? true : false);
    }

    moveRight() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        if (cells[i][j].isBombSet) {
            cells[i][j].clear();
            cells[i][j].drawBomb();
        } else {
            cells[i][j].clear();
        }
        this.x += this.cellSize;
        cells[this.getRow()][this.getCollumn()].drawPlayer();
    }

    canMoveLeft() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        return ((cells[i][j-1].type === 1) ? true : false);
    }

    moveLeft() {
        let i = this.getRow();
        let j = this.getCollumn();
        let cells = this.gameMapListener();
        if (cells[i][j].isBombSet) {
            cells[i][j].clear();
            cells[i][j].drawBomb();
        } else {
            cells[i][j].clear();
        }
        this.x -= this.cellSize;
        cells[this.getRow()][this.getCollumn()].drawPlayer();
    }

    getRow() {
        return (Math.floor((this.y + this.cellSize)/40) - 1);
    }

    getCollumn() {
        return (Math.floor((this.x + this.cellSize)/40) - 1);
    }
    
}